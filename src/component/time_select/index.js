
import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'
import InnerLayer from '../inner_layer'
import Flex from '../flex'
import TimeSelect from './time_select'

class Component extends React.Component {
  handleChange = ({ time, selected }) => {
    this.props.onChange({ time, selected })
  }

  handleHide = () => {
    InnerLayer.hide()
  }

  handleCalendarPopup = () => {
    const { data, selected, begin, end, title, type } = this.props
    InnerLayer.render({
      className: 'animated-in animated-slide-in-bottom',
      children: <TimeSelect
        title={title}
        type={type}
        begin={moment(begin)}
        end={moment(end)}
        data={data}
        selected={selected}
        getRange={this.props.getRange}
        onChange={this.handleChange}
        onHide={this.handleHide}
      />
    })
  }

  renderText = () => {
    return this.props.renderText()
  }

  render () {
    return (
      <Flex
        row justifyCenter
        className='padding-4 border-bottom'
        onClick={this.handleCalendarPopup}
      >
        <Flex className='padding-tb-4'>{this.renderText()}</Flex>
        <Flex alignCenter className='padding-left-8'>
          <i className='xfont xfont-down-small'/>
        </Flex>
      </Flex>
    )
  }
}

Component.propTypes = {
  title: PropTypes.string,
  type: PropTypes.number, // 0： 选一个周期, 1：选多个周期
  begin: PropTypes.object.isRequired, // 开始 Date
  end: PropTypes.object.isRequired, // 结束 Date
  data: PropTypes.array.isRequired, // 时间配置list
  selected: PropTypes.object.isRequired, // 当前的时间配置
  onChange: PropTypes.func.isRequired, // ({ time: { begin, end}, selected }) => {}
  getRange: PropTypes.func.isRequired // 可选范围 (selected) => {max, min}
}

export default Component
