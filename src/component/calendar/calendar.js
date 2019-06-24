import { getLocale } from '../../locales'
import React from 'react'
import { findDOMNode } from 'react-dom'
import PropTypes from 'prop-types'
import moment from 'moment'
import classNames from 'classnames'
import _ from 'lodash'
import Flex from '../flex'

class Day extends React.Component {
  nowMountStart = +moment().startOf('day')
  handleClick = () => {
    const { onClick, value } = this.props

    onClick(value)
  }

  render () {
    const { currentMoment, value, begin, end, disabled, label } = this.props

    const wm = currentMoment.month()
    const vm = value.month()

    if (wm !== vm) {
      return <Flex flex className='calendar-day'/>
    }

    const bv = begin && +moment(begin).startOf('day')
    const ev = end && +moment(end).startOf('day')
    const v = +value.startOf('day')

    const cn = classNames('calendar-day', {
      'calendar-day-label': label,
      'calendar-day-disabled': disabled,
      'calendar-day-active': begin && v >= bv && v <= ev,
      'calendar-day-point': begin && end && (v === bv || v === ev)
    })

    return (
      <Flex
        flex
        column
        justifyCenter
        alignCenter
        className={cn}
        onClick={disabled ? _.noop : this.handleClick}
      >
        {this.nowMountStart === +value.startOf('day') ? getLocale('今天') : value.date()}
        {label && (
          <small>
            {v === bv && v === ev && getLocale('单天')}
            {v === bv && v !== ev && getLocale('起始')}
            {v !== bv && v === ev && getLocale('结束')}
          </small>
        )}
      </Flex>
    )
  }
}

const months = [
  getLocale('1月'),
  getLocale('2月'),
  getLocale('3月'),
  getLocale('4月'),
  getLocale('5月'),
  getLocale('6月'),
  getLocale('7月'),
  getLocale('8月'),
  getLocale('9月'),
  getLocale('10月'),
  getLocale('11月'),
  getLocale('12月')
]
class Head extends React.Component {
  render () {
    const { currentMoment } = this.props
    const month = currentMoment.month()

    return (
      <Flex alignCenter className='calendar-head text-center clearfix'>
        <Flex flex justifyCenter className='calendar-head-title text-center text-16 text-bold padding-tb-4'>
          <span>{currentMoment.year()}{getLocale('年')}</span>
          <span
            className='calendar-head-month'
            onClick={this.handleSelectMonth}
          >{months[month]}</span>
        </Flex>
      </Flex>
    )
  }
}
const weekDays = [
  getLocale('日'),
  getLocale('一'),
  getLocale('二'),
  getLocale('三'),
  getLocale('四'),
  getLocale('五'),
  getLocale('六')
]
class Week extends React.Component {
  render () {
    return (
      <Flex className='bg-default'>
        {_.map(weekDays, (v, i) => (
          <Flex
            flex
            justifyCenter
            alignCenter
            key={i}
            className='calendar-day-name'
          >{v}</Flex>
        ))}
      </Flex>
    )
  }
}

class Calendar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isSelectBegin: true
    }
  }

  apiScrollToBegin = () => {
    const $dom = findDOMNode(this.refCalendar).querySelector('.calendar-day-point')
    if ($dom) {
      $dom.scrollIntoView({
        behavior: 'smooth'
      })
    }
  }

  handleSelectDay = (m) => {
    const { begin, end } = this.props
    const { isSelectBegin } = this.state

    let sb = begin
    let se = end

    // 一开始选择 开始时间
    if (isSelectBegin) {
      sb = m.toDate()
      se = m.toDate()

      this.setState({
        isSelectBegin: false
      })
    } else {
      // 如果结束时间小于开始时间，则认为还是选择开始时间
      if (m < sb) {
        sb = m.toDate()
        se = m.toDate()

        this.setState({
          isSelectBegin: false
        })
      } else {
        // 真正选中结束时间啦
        se = m.toDate()
        this.setState({
          isSelectBegin: true
        })
      }
    }

    this.props.onChange({
      begin: sb,
      end: se
    })
  }

  getDisabled (m) {
    // TODO 可以优化
    let { min, max } = this.props
    min = min ? moment(min).startOf('day') : null
    max = max ? moment(max).startOf('day') : null

    let disabled = false

    if (min && m < min) {
      disabled = true
    }
    if (max && m > max) {
      disabled = true
    }

    return disabled
  }

  computedMonthList () {
    const { min, max, begin, end } = this.props
    // 优先 min，其次 begin ，其次 当前
    let mMin = (min ? moment(min) : (begin ? moment(begin) : moment())).startOf('month')
    const mMax = (max ? moment(max) : (end ? moment(end) : moment())).startOf('month')

    const arr = []

    // eslint-disable-next-line
    while (mMin <= mMax) {
      arr.push(moment(mMin))
      mMin.add(1, 'month')
    }

    return arr
  }

  render () {
    const { begin, end, label } = this.props

    const itemList = _.groupBy(_.range(42), v => parseInt(v / 7))

    return (
      <div ref={ref => (this.refCalendar = ref)}>
        {_.map(this.computedMonthList(), (currentMoment, cmi) => {
          const m = moment(currentMoment).day(0).add(-1, 'day')

          return (
            <div className='calendar' key={cmi}>
              <Head currentMoment={currentMoment}/>
              <Week/>
              <div className='calendar-content'>
                {_.map(itemList, (v, i) => (
                  <Flex key={i} className='calendar-content-div'>
                    {_.map(v, (value, index) => {
                      const mm = moment(m.add(1, 'day'))

                      return (
                        <Day
                          key={index}
                          begin={begin}
                          end={end}
                          currentMoment={currentMoment}
                          value={mm}
                          onClick={this.handleSelectDay}
                          disabled={this.getDisabled(mm)}
                          label={label}
                        />
                      )
                    })}
                  </Flex>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

Calendar.propTypes = {
  begin: PropTypes.object,
  end: PropTypes.object,
  onChange: PropTypes.func,
  min: PropTypes.object,
  max: PropTypes.object,
  label: PropTypes.bool // 显示备注
}

Calendar.defaultProps = {
  onChange: _.noop,
  label: false
}

export default Calendar
