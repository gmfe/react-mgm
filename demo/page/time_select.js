
import React from 'react'
import moment from 'moment'
import _ from 'lodash'
import TimeSelect from '../../src/component/time_select'

function cycleDateValue (time, time_config) {
  if (!time_config) return ''
  if (time_config.type !== 2) { // 非预售
    const { e_span_time, start, end } = time_config.order_time_limit
    return `${moment(time.begin).format('MM月DD日')}${start}~${moment(time.end).add(e_span_time, 'd').format('MM月DD日')}${end}下单`
  }

  const { receiveEndSpan, start, end } = time_config.receive_time_limit
  if (receiveEndSpan === 0) { // 预售
    return `${moment(time.begin).format('MM月DD日')}${start}~${moment(time.end).format('MM月DD日')}${end}收货`
  } else {
    return `${moment(time.begin).format('MM月DD日')}${start}~${moment(time.end).add(1, 'd').format('MM月DD日')}${end}收货`
  }
}
const list = [
  { name: '预售运营时间',
    order_time_limit: { end: '16:30', 'start': '16:30', e_span_time: 1 },
    task_begin_time: '10:00',
    _id: 'ST2128',
    service_time_creator: 'T23994',
    final_distribute_time_span: 0,
    desc: '预售',
    receive_time_limit: {
      end: '10:00',
      s_span_time: 1,
      receiveEndSpan: 1,
      start: '10:00',
      receiveTimeSpan: '15',
      e_span_time: 6,
      weekdays: 127
    },
    final_distribute_time: '20:00',
    type: 2
  }, {
    desc: '24h售卖商品服务',
    final_distribute_time: '12:00',
    final_distribute_time_span: 1,
    name: '全天售卖',
    order_time_limit: { end: '23:00', e_span_time: 0, start: '06:00' },
    receive_time_limit: { end: '12:00', s_span_time: 1, e_span_time: 1, start: '06:00', receiveTimeSpan: '15' },
    service_time_creator: 'T23994',
    task_begin_time: '06:00',
    type: 1,
    _id: 'ST2714'
  }
]

class Component extends React.Component {
  constructor (props) {
    super(props)
    this.data = _.map(list, item => {
      return {
        ...item,
        value: item._id,
        text: item.name
      }
    })

    this.state = {
      selected: this.data[0],
      time: {
        begin: moment().toDate(),
        end: moment().toDate()
      }
    }
  }

  setSelectedTime = (time) => {
    this.setState({
      time
    })
  }

  setSelected = (selected) => {
    this.setState({
      selected
    })
  }

  getRange = (selected) => {
    const { e_span_time } = selected.receive_time_limit
    const startDay = (30 - e_span_time) || 15
    const endDay = selected.type === 2 ? e_span_time : 0
    return {
      min: moment().add(-startDay, 'day').toDate(),
      max: moment().add(endDay, 'day').toDate()
    }
  }

  handleChange = ({ time, selected }) => {
    time && this.setSelectedTime(time)
    selected && this.setSelected(selected)
  }

  renderText = () => {
    const { time, selected } = this.state
    return cycleDateValue(time, selected)
  }

  render () {
    const { time: { begin, end }, selected } = this.state
    const data = this.data
    return (
      <div>
        <TimeSelect
          title='选择时间'
          text={this.renderText()}
          type={1}
          begin={begin}
          end={end}
          data={data}
          selected={selected}
          onChange={this.handleChange}
          getRange={this.getRange}
          renderText={this.renderText}
        />
      </div>
    )
  }
}

export default Component
