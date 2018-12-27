import React from 'react'
import Calendar from '../../src/component/calendar/calendar'
import moment from 'moment'

class CalendarWrap extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      begin: moment().add(-4, 'd').toDate(),
      end: moment().toDate()
    }
  }

  componentDidMount () {
    this.refCalendar.apiScrollToBegin()
  }

  render () {
    return (
      <div className='padding-8' style={{ height: '400px', overflow: 'auto' }}>
        <Calendar
          ref={ref => (this.refCalendar = ref)}
          min={moment().add(-1, 'month').toDate()}
          max={moment().toDate()}
          begin={this.state.begin}
          end={this.state.end}
          onChange={({ begin, end }) => {
            console.log(moment(begin).format('YYYY-MM-DD'), moment(end).format('YYYY-MM-DD'))
            this.setState({ begin, end })
          }}
          label
        />
      </div>
    )
  }
}

export default CalendarWrap
