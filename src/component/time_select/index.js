
import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'
import Popup from '../popup'
import Flex from '../flex'
import TimeSelect from './time_select'

import SVGDownSmall from '../../../svg/down_small.svg'

class Component extends React.Component {
  handleChange = ({ time, selected }) => {
    this.props.onChange({ time, selected })
  }

  handleHide = () => {
    Popup.hide()
  }

  handleCalendarPopup = () => {
    const { data, selected, begin, end, title, type, getRange, showText } = this.props
    Popup.render({
      bottom: true,
      height: '100%',
      children: <TimeSelect
        title={title}
        type={type}
        begin={moment(begin)}
        end={moment(end)}
        showText={showText}
        data={data}
        selected={selected}
        getRange={getRange}
        onChange={this.handleChange}
        onHide={this.handleHide}
      />
    })
  }

  render () {
    const { className } = this.props
    return (
      <Flex
        row justifyCenter
        className={`padding-4 ${className}`}
        onClick={this.handleCalendarPopup}
      >
        <Flex className='padding-tb-4'>{this.props.text}</Flex>
        <Flex alignCenter className='padding-left-8'>
          <SVGDownSmall/>
        </Flex>
      </Flex>
    )
  }
}

Component.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
  showText: PropTypes.bool, // 是否是选择运营周期
  type: PropTypes.oneOf([0, 1]), // 0： 选一个周期, 1：选多个周期
  begin: PropTypes.object.isRequired, // 开始 Date
  end: PropTypes.object.isRequired, // 结束 Date
  data: PropTypes.array.isRequired, // 时间配置list
  selected: PropTypes.object.isRequired, // 当前的时间配置
  onChange: PropTypes.func.isRequired, // ({ time: { begin, end}, selected }) => {}
  getRange: PropTypes.func.isRequired // 可选范围 (selected) => {max, min}
}

export default Component
