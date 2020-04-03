import { getLocale } from '../../locales'
import React from 'react'
import PropTypes from 'prop-types'
import LayoutRoot from '../layout_root'
import Loading from '../loading'
import Mask from '../mask'
import Flex from '../flex'
import SVGSuccess from '../../../svg/success.svg'
import SVGInfoCircle from '../../../svg/info-circle.svg'
import SVGWarning from '../../../svg/warning.svg'
import SVGClose from '../../../svg/close.svg'

let timer = null
let ToastStatics = {
  clear () {
    clearTimeout(timer)
    LayoutRoot.removeComponent(LayoutRoot.TYPE.TOAST)
  },
  _tip (options = {}, type) {
    if (typeof options === 'string') {
      options = {
        children: options
      }
    }

    if (options.time === undefined) {
      options.time = 2000
      if (type === 'loading' || type === 'loading_linear') {
        options.time = 20000
      }
    }

    if (type) {
      options[type] = true
    }

    if (options.time) {
      timer = setTimeout(() => {
        ToastStatics.clear()
      }, options.time)
    }

    LayoutRoot.setComponent(LayoutRoot.TYPE.TOAST, <Toast {...options}/>)
  },
  tip (options) {
    ToastStatics._tip(options)
  },
  success (options) {
    ToastStatics._tip(options, 'success')
  },
  info (options) {
    ToastStatics._tip(options, 'info')
  },
  warning (options) {
    ToastStatics._tip(options, 'warning')
  },
  danger (options) {
    ToastStatics._tip(options, 'danger')
  },
  loading (options) {
    ToastStatics._tip(options, 'loading')
  },
  loading_linear (options) {
    ToastStatics._tip(options, 'loading_linear')
  }
}

class Toast extends React.Component {
  render () {
    let { children, loading, loading_linear, success, info, warning, danger } = this.props

    let icon = null
    if (loading) {
      icon = <i className='weui-loading'/>
      children = children || getLocale('加载中...')
    } else if (success) {
      icon = <SVGSuccess className='toast-icon'/>
    } else if (info) {
      icon = <SVGInfoCircle className='toast-icon'/>
    } else if (warning) {
      icon = <SVGWarning className='toast-icon'/>
    } else if (danger) {
      icon = <SVGClose className='toast-icon'/>
    } else if (loading_linear) {
      icon = <Loading line/>
    }

    return (
      <div>
        {(loading || loading_linear) && <Mask show opacity={0.01}/>}
        <Flex justifyCenter className='toast'>
          <div className='toast-inner'>
            {icon && (
              <div className='loading-icon'>
                {icon}
              </div>
            )}
            <div className='toast-content'>{children}</div>
          </div>
        </Flex>
      </div>
    )
  }
}

Object.assign(Toast, ToastStatics)

Toast.propTypes = {
  time: PropTypes.any, // 在组件上没意义，单纯给静态方法调用参考
  loading: PropTypes.bool,
  loading_linear: PropTypes.bool,
  success: PropTypes.bool,
  info: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool
}

Toast.defaultProps = {
  time: 2000,
  loading: false
}

export default Toast
