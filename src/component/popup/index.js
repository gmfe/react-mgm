import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Mask from '../mask/index'
import LayoutRoot from '../layout_root'
import _ from 'lodash'

const PopupStatics = {
  render (options) {
    const _onHide = options.onHide
    options.onHide = () => {
      PopupStatics.hide()
      _onHide && _onHide()
    }
    LayoutRoot.renderWith(LayoutRoot.TYPE.POPUP, <Popup {...options} show/>)
  },

  hide () {
    LayoutRoot.hideWith(LayoutRoot.TYPE.POPUP)
  }
}

class Popup extends React.Component {
  constructor (props) {
    super(props)
    this.handleChange = ::this.handleChange
  }

  handleChange (e) {
    e.preventDefault()
    this.props.onHide()
  }

  render () {
    const {
      show,
      left,
      right,
      bottom,
      width,
      height,
      opacity,
      className,
      style,
      onHide, // eslint-disable-line
      isPickPopup,
      children,
      ...rest
    } = this.props

    const cn = classNames('popup', {
      active: show,
      'popup-left': left,
      'popup-right': right,
      'popup-bottom': bottom,
      'animated-in animated-slide-in-left': left,
      'animated-in animated-slide-in-right': right,
      'animated-in animated-slide-in-bottom': bottom
    }, className)

    let s = Object.assign({}, style)
    if ((left || right) && width) {
      s.width = width
    } else if (bottom) {
      s.height = height
    }

    if (!show) {
      return null
    }

    return (
      <div className={classNames('popup-container', {
        'picker-popup-container': isPickPopup
      })}>
        <Mask show opacity={opacity} onClick={this.handleChange}/>
        <div {...rest} className={cn} style={s}>
          <div className='popup-content'>
            {children}
          </div>
        </div>
      </div>
    )
  }
}

Object.assign(Popup, PopupStatics)

// 这里的 onChange 命名不合理，假如子组件中由一个 onChange 事件，当被触发的时候，那这个父组件的 onChange 事件会因为事件冒泡而被执行，与预期不符
Popup.propTypes = {
  show: PropTypes.bool,
  onHide: PropTypes.func,
  left: PropTypes.bool,
  right: PropTypes.bool,
  bottom: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
  opacity: PropTypes.number,

  // 内部用
  isPickPopup: PropTypes.bool
}

Popup.defaultProps = {
  show: false,
  onHide: _.noop
}

export default Popup
