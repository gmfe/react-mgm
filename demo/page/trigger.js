import React from 'react'
import Trigger from '../../src/component/trigger'

class TriggerWrap extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}

    this.renderPopup = ::this.renderPopup
  }

  renderPopup () {
    return (
      <div className='gm-border' style={{ width: '200px', height: '200px', background: 'red' }}>
        <div>popup</div>
      </div>
    )
  }

  render () {
    return (
      <Trigger component={<div/>} popup={this.renderPopup()}>
        <button className='btn btn-default'>focus me(default)</button>
      </Trigger>
    )
  }
}

export default TriggerWrap
