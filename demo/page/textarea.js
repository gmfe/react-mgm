import React from 'react'
import Page from '../../src/component/page'
import Textarea from '../../src/component/textarea'

class TextareaWrap extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: 'a\na'
    }
    this.handleChange = ::this.handleChange
  }

  render () {
    return (
      <Page>
        <h2>textarea</h2>
        <hr/>
        固定高度
        <Textarea
          value={this.state.value}
          onChange={this.handleChange}
          wrapProps={{ style: { maxHeight: '6.4em' } }}
        />
        原生textarea不能随内容变高。
        <Textarea value={this.state.value} onChange={this.handleChange}/>
      </Page>
    )
  }

  handleChange (event) {
    this.setState({
      value: event.target.value
    })
  }
}

export default TextareaWrap
