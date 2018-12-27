import React from 'react'
import Dialog from '../../src/component/dialog'
import Page from '../../src/component/page'

class DialogWrap extends React.Component {
  constructor (props) {
    super(props)

    this.handleA = ::this.handleA
    this.handleA = ::this.handleA

    this.state = {
      confirm: false,
      alert: false,
      btnText: { cancelText: '不合并', confirmText: '合并' }
    }
  }

  handleA () {
    Dialog.alert('yoyoyo').then(() => {
      console.log('ok')
    })
  }

  handleC () {
    Dialog.confirm({
      children: '确定么?',
      confirmText: '去充值'
    }).then(() => {
      console.log('ok')
    }).catch(() => {
      console.log('cancel')
    })
  }

  render () {
    const { alert, confirm, btnText } = this.state
    return (
      <Page>
        <button className='weui-btn weui-btn_primary' onClick={() => this.setState({
          alert: !alert
        })}>Alert Dialog
        </button>
        <button className='weui-btn weui-btn_primary' onClick={() => this.setState({
          confirm: !confirm
        })}>Confirm Dialog
        </button>

        <Dialog
          alert
          show={alert}
          title='Alert Dialog'
          onConfirm={() => this.setState({ alert: !alert })}
        >
          这是alert
        </Dialog>

        <Dialog
          confirm
          show={confirm}
          title='Alert Dialog'
          onCancel={() => this.setState({ confirm: !confirm })}
          onConfirm={() => this.setState({ confirm: !confirm })}
          {...btnText}
        >
          这是confirm内容
        </Dialog>

        <button className='weui-btn weui-btn_warn' onClick={this.handleA}>Alert Dialog（API+Promise）</button>
        <button className='weui-btn weui-btn_warn' onClick={this.handleC}>Confirm Dialog（API+Promise）
        </button>
      </Page>
    )
  }
}

export default DialogWrap
