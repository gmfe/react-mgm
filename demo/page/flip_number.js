import React from 'react'
import FlipNumber from '../../src/component/flip_number'

class FlipNumberWrap extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      begin: null,
      end: null
    }
  }

  render () {
    return (
      <div className='padding-8'>
        <FlipNumber useGroup delay={1000} decimal={2} from={0} to={123.456}/>
      </div>
    )
  }
}

export default FlipNumberWrap
