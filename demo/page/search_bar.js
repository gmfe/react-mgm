import React from 'react'
import Page from '../../src/component/page'
import SearchBar from '../../src/component/search_bar'

class SearchBarWrap extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      defaultFocus: false,
      value: ''
    }

    this.handleChange = ::this.handleChange
  }

  render () {
    return (
      <Page>
        <SearchBar
          placeholder='搜索商品'
          value={this.state.value}
          onChange={this.handleChange}
          onOK={this.handleOK}
          onCancel={this.handleCancel}
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
        />

        <SearchBar
          placeholder='搜索商品'
          value={this.state.value}
          onChange={this.handleChange}
          onOK={this.handleOK}
          onCancel={this.handleCancel}
          onBlur={this.handleBlur}
          OKBtn
          defaultFocus
        />
      </Page>
    )
  }

  handleFocus () {
    console.log('focus')
  }

  handleBlur () {
    console.log('blur')
  }

  handleChange (value) {
    this.setState({
      value
    })
  }

  handleOK () {
    console.log('ok')
  }

  handleCancel () {
    console.log('cancel')
  }
}

export default SearchBarWrap
