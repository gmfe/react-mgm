import React from 'react'
import Infinite from '../../src/component/infinite'

class InfiniteWrap extends React.Component {
  constructor (props) {
    super(props)
    this.state = { done: false }
  }

  handleBottom = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        this.setState({
          done: true
        })
        resolve()
      }, 2000)
    })
  }

  render () {
    return (
      <div>
        <Infinite
          done={this.state.done}
          onBottom={this.handleBottom}
          style={{ height: '300px' }}
        >
          <div>aaaaa</div>
          <div>aaaaa</div>
          <div>aaaaa</div>
          <div>aaaaa</div>
          <div>aaaaa</div>
          <div>aaaaa</div>
          <div>aaaaa</div>
          <div>aaaaa</div>
          <div>aaaaa</div>
          <div>aaaaa</div>
          <div>aaaaa</div>
          <div>aaaaa</div>
          <div>aaaaa</div>
          <div>aaaaa</div>
          <div>aaaaa</div>
          <div>aaaaa</div>
          <div>aaaaa</div>
          <div>aaaaa</div>
          <div>aaaaa</div>
          <div>aaaaa</div>
          <div>aaaaa</div>
          <div>aaaaa</div>
          <div>aaaaa</div>
          <div>aaaaa</div>
          <div>aaaaa</div>
          <div>aaaaa</div>
          <div>aaaaa</div>
        </Infinite>
      </div>
    )
  }
}

export default InfiniteWrap
