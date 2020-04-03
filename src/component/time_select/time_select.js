import { getLocale } from '../../locales'
import React from 'react'
import PropTypes from 'prop-types'
import Flex from '../flex'
import { Calendar } from '../calendar'
import moment from 'moment'
import ConfigSelect from './config_select'

import SVGRemove from '../../../svg/remove.svg'

class Component extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selected: this.props.selected,
      begin: this.props.begin,
      end: this.props.end
    }
    this.calendarRef = React.createRef()
    this._unmount = false
  }

  componentDidMount () {
    this.handleScrollToBegin()
  }

  componentWillUnmount () {
    this._unmount = true
  }

  handleScrollToBegin = () => {
    setTimeout(() => {
      !this._unmount && this.calendarRef.current.apiScrollToBegin()
    }, 500)
  }

  handleHide = () => {
    this.props.onHide()
  }

  handleChange = (selected) => {
    this.setState({
      selected,
      begin: moment(),
      end: moment()
    })
  }

  handleSubmit = () => {
    const { selected, begin, end } = this.state
    this.props.onChange({
      time: {
        begin: moment(begin).toDate(),
        end: moment(end).toDate()
      },
      selected
    })
    this.handleHide()
  }

  handleCalendar = ({ begin, end }) => {
    this.setState({
      begin: moment(begin),
      end: moment(end)
    }, () => {
      !this.props.type && this.handleSubmit()
    })
  }

  render () {
    const { data, title, type, showText } = this.props
    const { begin, end, selected } = this.state
    const { min, max } = this.props.getRange(selected)
    return (
      <Flex column className='page time-select'>
        <Flex column none className='overflow-hidden'>
          <Flex alignCenter style={{ fontSize: '1.1em' }} className='padding-tb-8 padding-lr-16 border-bottom'>
            <Flex
              onClick={this.handleHide}
              className='absolute-left padding-left-16'
            >
              <SVGRemove style={{ fontSize: '1em' }} className='padding-lr-4'/>
            </Flex>
            <Flex flex={1} justifyCenter className='text-bold'>{title}</Flex>
            {
              type ? <Flex
                className='absolute-right padding-right-16'
                onClick={this.handleSubmit}
              >
                <button className='weui-btn weui-btn_mini weui-btn_primary time-select-btn'>{getLocale('确定')}</button>
              </Flex> : null
            }
          </Flex>
        </Flex>
        {showText && <Flex column none className='overflow-hidden'>
          <ConfigSelect
            data={data}
            selected={selected}
            onChange={this.handleChange}
            onSelect={this.handleScrollToBegin}
          />
        </Flex>}
        <Flex
          column
          flex
          className='page-content block padding-lr-8'
        >
          <div>
            <Calendar
              ref={this.calendarRef}
              min={min}
              max={max}
              begin={begin}
              end={end}
              onChange={this.handleCalendar}
            />
          </div>
        </Flex>
      </Flex>
    )
  }
}

Component.propTypes = {
  title: PropTypes.string,
  type: PropTypes.number,
  showText: PropTypes.bool,
  begin: PropTypes.object.isRequired,
  end: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  selected: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  getRange: PropTypes.func.isRequired
}

Component.defaultProps = {
  showText: true,
  title: getLocale('选择运营时间'),
  type: 1
}

export default Component
