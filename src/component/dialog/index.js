import { getLocale } from '../../locales'
import React from 'react'
import PropTypes from 'prop-types'
import LayoutRoot from '../layout_root'
import _ from 'lodash'

const DialogStatics = {
  dialog (options) {
    return new Promise((resolve, reject) => {
      const _onConfirm = options.onConfirm || _.noop
      options.onConfirm = () => {
        Promise.resolve(_onConfirm()).then(data => {
          DialogStatics.hide()

          setTimeout(() => {
            resolve(data)
          }, 50)
        })
      }

      const _onCancel = options.onCancel || _.noop
      options.onCancel = () => {
        DialogStatics.hide()

        const reason = _onCancel()
        setTimeout(() => {
          reject(reason)
        }, 50)
      }

      LayoutRoot.renderWith(LayoutRoot.TYPE.MODAL, <Dialog {...options} show/>)
    })
  },

  alert (options) {
    if (typeof options === 'string') {
      options = {
        children: options
      }
    }
    options.alert = true
    return DialogStatics.dialog(options)
  },

  confirm (options) {
    if (typeof options === 'string') {
      options = {
        children: options
      }
    }
    options.confirm = true
    return DialogStatics.dialog(options)
  },
  hide () {
    LayoutRoot.hideWith(LayoutRoot.TYPE.MODAL)
  }
}

class Dialog extends React.Component {
  handleConfirm = (e) => {
    e.preventDefault()
    this.props.onConfirm()
  }

  handleCancel = (e) => {
    e.preventDefault()
    this.props.onCancel && this.props.onCancel()
  }

  handleOtherClick = (e) => {
    e.preventDefault()
    this.props.onOtherClick && this.props.onOtherClick()
  }

  render () {
    const {
      show,
      title,
      confirm,
      confirmText,
      cancelText,
      otherText,
      picture,
      children
    } = this.props

    if (!show) {
      return null
    }

    return (
      <div>
        {/* 有一种情况是在 popup 组件中使用 dialog 组件，popup z-index 为 2000，而 mask 为 1000，就不能在 popup 之上 */}
        {/* 因此将这里的 mask z-index 设置成和 dialog 一样 */}
        <div className='weui-mask' style={{ zIndex: 5000 }}/>
        <div className='weui-dialog animated-in animated-fade-in'>
          <div className='weui-dialog__hd'>
            <strong className='weui-dialog_title'>{title}</strong>
          </div>
          <div className='weui-dialog__bd'>
            {children}
            {picture && <div>
              <img src={picture} style={{ height: '200px', width: '200px' }}/>
            </div>}
          </div>
          <div className='weui-dialog__ft'>
            {otherText && <a
              href='javascript:;'
              className='weui-dialog__btn weui-dialog__btn_default'
              onClick={this.handleOtherClick}
            >{otherText}</a>
            }
            {confirm && <a
              href='javascript:;'
              className='weui-dialog__btn weui-dialog__btn_default'
              onClick={this.handleCancel}
            >{cancelText}</a>
            }
            <a
              href='javascript:;'
              className='weui-dialog__btn weui-dialog__btn_primary'
              onClick={this.handleConfirm}
            >{confirmText}</a>
          </div>
        </div>
      </div>
    )
  }
}

Object.assign(Dialog, DialogStatics)

Dialog.propTypes = {
  show: PropTypes.bool,
  title: PropTypes.string,
  alert: PropTypes.bool,
  confirm: PropTypes.bool,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func,
  confirmText: PropTypes.string,
  cancelText: PropTypes.string,
  otherText: PropTypes.string, // 当有三个按钮时
  onOtherClick: PropTypes.func,
  picture: PropTypes.string // 图片路径
}

Dialog.defaultProps = {
  title: getLocale('提示'),
  confirmText: getLocale('确定'),
  cancelText: getLocale('取消')
}

export default Dialog
