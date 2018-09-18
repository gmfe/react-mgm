import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import classNames from 'classnames'
import _ from 'lodash'
import Flex from '../flex'
import { getLocale } from '../../locales'

const nowMountStart = +moment().startOf('day')

class Day extends React.Component {
  handleClick = () => {
    const {disabled, onClick, value} = this.props

    if (disabled) {
      return
    }
    onClick(value)
  }

  render () {
    const {currentMoment, value, begin, end, disabled, label} = this.props

    const wm = currentMoment.month()
    const vm = value.month()

    if (wm !== vm) {
      return <Flex flex className='calendar-day'/>
    }

    const bv = begin && +begin.startOf('day')
    const ev = end && +end.startOf('day')
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
        onClick={this.handleClick}
      >
        {nowMountStart === +value.startOf('day') ? getLocale('calendar', 'today') : value.date()}
        {label && <small className='text-desc'>起始</small>}
      </Flex>
    )
  }
}

class Head extends React.Component {
  render () {
    const {currentMoment} = this.props
    const month = currentMoment.month()

    return (
      <Flex alignCenter className='calendar-head text-center clearfix'>
        <Flex flex justifyCenter className='calendar-head-title text-center text-16 text-bold padding-tb-8'>
          <span>{currentMoment.year()}{getLocale('calendar', 'year')}</span>
          <span
            className='calendar-head-month'
            onClick={this.handleSelectMonth}
          >{getLocale('calendar', 'months')[month]}</span>
        </Flex>
      </Flex>
    )
  }
}

class Week extends React.Component {
  render () {
    const weekDays = getLocale('calendar', 'weekDays')
    return (
      <Flex className='bg-default'>
        {_.map(weekDays, (v, i) => (
          <Flex
            flex
            justifyCenter
            alignCenter
            key={i}
            className={classNames('calendar-day-name', {
              'calendar-color-second-primary': i === 0 || (i === weekDays.length - 1)
            })}
          >{v}</Flex>
        ))}
      </Flex>
    )
  }
}

class Calendar extends React.Component {
  constructor (props) {
    super(props)
    const {begin, end} = props
    this.state = {
      currentMoment: begin ? moment(begin) : moment(),
      begin: begin && moment(begin),
      end: end && moment(end)
    }
  }

  componentWillReceiveProps (nextProps) {
    const {begin, end} = this.props
    if (begin || end) {
      if (+begin !== +nextProps.begin || +end !== +nextProps.begin) {
        this.setState({
          begin: moment(nextProps.begin),
          end: moment(nextProps.end)
        })
      }
    }
  }

  handleSelectDay = (m) => {
    this.props.onSelect(m.toDate())
  }

  getDisabled (m) {
    let {min, max, disabledDate} = this.props
    min = min ? moment(min).startOf('day') : null
    max = max ? moment(max).startOf('day') : null

    let disabled = false

    if (disabledDate) {
      disabled = disabledDate(m.toDate())
    } else {
      if (min && m < min) {
        disabled = true
      }
      if (max && m > max) {
        disabled = true
      }
    }
    return disabled
  }

  render () {
    const {label} = this.props
    const {currentMoment, begin, end} = this.state

    // startOf('month') 当月第一天  day(0) 星期日
    const m = moment(currentMoment).startOf('month').day(0).add(-1, 'day')

    return (
      <div className='calendar'>
        <Head currentMoment={currentMoment}/>
        <Week/>
        <div className='calendar-content'>
          {_.map(_.groupBy(_.range(42), v => parseInt(v / 7)), (v, i) => (
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
  }
}

Calendar.propTypes = {
  begin: PropTypes.object,
  end: PropTypes.object,
  onChange: PropTypes.func,
  min: PropTypes.object,
  max: PropTypes.object,
  disabledDate: PropTypes.func,
  label: PropTypes.bool // 显示备注
}

Calendar.defaultProps = {
  onSelect: _.noop,
  label: false
}

export default Calendar
