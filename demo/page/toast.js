import React from 'react'
import Toast from '../../src/component/toast'
import Page from '../../src/component/page'

class ToastWrap extends React.Component {
  handleToast (type) {
    if (type === 'success') {
      Toast.success({
        time: 0,
        children: (
          <div>
            <div>保存成功啦保存成功啦保存成功啦保存成功啦</div>
          </div>
        )
      })
    } else if (type === 'loading_linear') {
      Toast.loading_linear({
        time: 10000,
        children: (
          <div>
            <div>录音中...</div>
          </div>
        )
      })
    } else if (type === 'loading') {
      Toast.loading({
        time: 0
      })
    } else {
      Toast[type]({
        children: type,
        time: 0
      })
    }
  }

  render () {
    return (
      <Page white>
        <h2>toast</h2>
        <button
          className='weui-btn weui-btn_primary'
          onClick={this.handleToast.bind(this, 'tip')}>Toast tip
        </button>
        <button
          className='weui-btn weui-btn_primary'
          onClick={this.handleToast.bind(this, 'success')}>Toast success
        </button>
        <button
          className='weui-btn weui-btn_primary'
          onClick={this.handleToast.bind(this, 'info')}>Toast info
        </button>
        <button
          className='weui-btn weui-btn_primary'
          onClick={this.handleToast.bind(this, 'warning')}>Toast warning
        </button>
        <button
          className='weui-btn weui-btn_primary'
          onClick={this.handleToast.bind(this, 'danger')}>Toast danger
        </button>
        <button
          className='weui-btn weui-btn_primary'
          onClick={this.handleToast.bind(this, 'loading')}>Toast loading
        </button>
        <button
          className='weui-btn weui-btn_primary'
          onClick={this.handleToast.bind(this, 'loading_linear')}>Toast loading_linear
        </button>
      </Page>
    )
  }
}

export default ToastWrap
