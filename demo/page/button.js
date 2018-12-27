import React from 'react'
import Button from '../../src/component/button'

class ButtonWrap extends React.Component {
  handleClick () {
    return new Promise(resolve => setTimeout(() => resolve('12'), 2000))
  }

  render () {
    return (
      <div>
        <h2>Button 只封装了 loading</h2>
        <hr/>
        loading 2s
        <Button className='weui-btn weui-btn_default' onClick={this.handleClick}>asdfa</Button>
      </div>
    )
  }
}

export default ButtonWrap
