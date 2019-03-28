import React from 'react'
import Button from '../../src/component/button'
import Storage from '../../src/component/storage'

class StorageWrap extends React.Component {
  constructor (props) {
    super(props)
    this.state = { value: '' }
  }

  handleSet () {
    let value = { a: 'undefined', b: '123 5', c: null, d: undefined }
    // let value = [12, undefined, 'abc', null]
    // let value = 'undefined'
    // let value
    Storage.set('demo-key', value)
  }

  handleGet = () => {
    let value = JSON.stringify(Storage.get('demo-key'))
    this.setState({ value })
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value })
  }

  render () {
    let str = "{ a: 'undefined', b: '123 5', c: null, d: undefined }"
    return (
      <div>
        <h2>操作localStorage</h2>
        <span>要设置的值：{str}</span>
        <Button className='weui-btn weui-btn_default' onClick={this.handleSet}>set localStorage</Button>
        <Button className='weui-btn weui-btn_default' onClick={this.handleGet}>get localStorage</Button>
        <span>返回的值:{this.state.value}</span>
      </div>
    )
  }
}

export default StorageWrap
