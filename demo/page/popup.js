import React from 'react'
import Popup from '../../src/component/popup'
import Page from '../../src/component/page'

class PopupWrap extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      show: false,
      show2: false
    }

    this.handleShow = ::this.handleShow
    this.handleShow2 = ::this.handleShow2
    this.handleShow3 = ::this.handleShow3
    this.handleChange = ::this.handleChange
    this.handleChange2 = ::this.handleChange2
  }

  handleShow () {
    this.setState({
      show: !this.state.show
    })
  }

  handleShow2 () {
    this.setState({
      show2: !this.state.show2
    })
  }

  handleShow3 () {
    Popup.render({
      left: true,
      children: <div>
        调用静态方法
      </div>
    })
  }

  handleShow4 () {
    Popup.render({
      right: true,
      children: <div>
        调用静态方法
      </div>
    })
  }

  handleChange () {
    this.setState({
      show: !this.state.show
    })
  }

  handleChange2 () {
    this.setState({
      show2: !this.state.show2
    })
  }

  render () {
    return (
      <Page>
        <button className='weui-btn weui-btn_primary' onClick={this.handleShow}>open popup left</button>
        <button className='weui-btn weui-btn_primary' onClick={this.handleShow2}>open popup bottom</button>
        <button className='weui-btn weui-btn_primary' onClick={this.handleShow3}>open popup API left</button>
        <button className='weui-btn weui-btn_primary' onClick={this.handleShow4}>open popup API right</button>
        <Popup left show={this.state.show} onHide={this.handleChange}>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
        </Popup>

        <Popup opacity={0.8} bottom show={this.state.show2} onHide={this.handleChange2}>
          <div style={{ height: '300px' }}>height 100px</div>
        </Popup>

        <div>asdf</div>
        <div>asdf</div>
        <div>asdf</div>
        <div>asdf</div>
        <div>asdf</div>
        <div>asdf</div>
        <div>asdf</div>
        <div>asdf</div>
        <div>asdf</div>
        <div>asdf</div>
        <div>asdf</div>
        <div>asdf</div>
        <div>asdf</div>
        <div>asdf</div>
        <div>asdf</div>
        <div>asdf</div>
        <div>asdf</div>
        <div>asdf</div>
        <div>asdf</div>
        <div>asdf</div>
        <div>asdf</div>
        <div>asdf</div>
        <div>asdf</div>
        <div>asdf</div>
        <div>asdf</div>
      </Page>
    )
  }
}

export default PopupWrap
