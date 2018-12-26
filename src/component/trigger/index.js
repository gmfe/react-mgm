import React from 'react'
import PropTypes from 'prop-types'
import { findDOMNode } from 'react-dom'
import classNames from 'classnames'
import { createChainedFunction, contains } from 'gm-util'
import Mask from '../mask/index'

class Trigger extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      active: false
    }
    this.handleClick = ::this.handleClick
    this.handleMouseEnter = ::this.handleMouseEnter
    this.handleMouseLeave = ::this.handleMouseLeave
    this.handleBodyClick = ::this.handleBodyClick
    this.handleTimeoutHide = ::this.handleTimeoutHide

    this.timer = null
    this.timeouter = null
    this.refPopup = null
    this.refMask = null
  }

  componentDidMount () {
    window.document.body.addEventListener('click', this.handleBodyClick)
  }

  componentWillUnmount () {
    window.document.body.removeEventListener('click', this.handleBodyClick)
  }

  handleBodyClick (event) {
    const target = event.target
    const root = findDOMNode(this)
    if (!contains(root, target)) {
      clearTimeout(this.timeouter)

      this.setState({
        active: false
      })
    }
  }

  handleClick (event) {
    const { disabled, children, type, mask, timeout } = this.props
    // 优先获取props的disabled
    if (disabled === true) {
      return
    }

    let active = true
    if (type === 'click') {
      // 如果是点击的，点击 popup 内部不改变active
      if (contains(findDOMNode(this.refPopup), event.target)) {
        return
      }

      active = !this.state.active
    }

    // 点击mask，则隐藏
    if (mask) {
      if (contains(findDOMNode(this.refMask), event.target)) {
        active = false
      }
    }

    if (disabled === false) {
      timeout && clearTimeout(this.timeouter)

      this.setState({
        active
      })
    }
    // 如果没有props disabled，判定children是否不可用状态
    if (!children.props.disabled) {
      this.setState({
        active
      }, this.handleTimeoutHide)
    }
  }

  handleTimeoutHide () {
    const { timeout } = this.props
    timeout && clearTimeout(this.timeouter)

    if (timeout && this.state.active) {
      this.timeouter = setTimeout(() => {
        this.setState({
          active: false
        })
      }, timeout)
    }
  }

  handleMouseEnter () {
    const { disabled, children } = this.props
    // 优先获取props的disabled
    if (disabled === true) {
      return
    }

    clearTimeout(this.timer)

    if (disabled === false) {
      this.setState({
        active: true
      })
    }

    // 如果没有props disabled，判定children是否不可用状态
    if (!children.props.disabled) {
      this.setState({
        active: true
      })
    }
  }

  handleMouseLeave () {
    const { disabled, children } = this.props
    // 优先获取props的disabled
    if (disabled === true) {
      return
    }

    clearTimeout(this.timer)

    if (disabled === false) {
      this.timer = setTimeout(() => {
        this.setState({
          active: false
        })
      }, 500)
    }

    // 如果没有props disabled，判定children是否不可用状态
    if (!children.props.disabled) {
      this.timer = setTimeout(() => {
        this.setState({
          active: false
        })
      }, 500)
    }
  }

  render () {
    const { component, children, popup, type, right, top, adjustX, mask, opacity } = this.props
    const child = React.Children.only(children)
    const { active } = this.state

    const p = {}
    const popupStyle = {}
    if (type === 'focus' || type === 'click') {
      p.onClick = createChainedFunction(component.props.onClick, this.handleClick)
    } else if (type === 'hover') {
      p.onMouseEnter = createChainedFunction(component.props.onMouseEnter, this.handleMouseEnter)
      p.onMouseLeave = createChainedFunction(component.props.onMouseLeave, this.handleMouseLeave)
    }

    const componentProps = Object.assign({}, component.props, p)

    if (adjustX) {
      if (right) {
        popupStyle.right = adjustX + 'px'
      } else {
        popupStyle.left = adjustX + 'px'
      }
    }

    return React.cloneElement(component, Object.assign({}, componentProps, {
      className: classNames(component.props.className, 'trigger'),
      children: [
        child,
        active ? React.createElement('div', {
          key: 'popup',
          ref: ref => (this.refPopup = ref),
          className: classNames('trigger-popup ', {
            'trigger-popup-right': right,
            'trigger-popup-top': top
          }),
          style: popupStyle
        }, popup) : null,
        active && mask && type !== 'hover' ? <Mask
          show
          opacity={opacity}
          ref={ref => (this.refMask = ref)}
        /> : null
      ]
    }))
  }
}

Trigger.propTypes = {
  type: PropTypes.oneOf(['focus', 'click', 'hover']),
  component: PropTypes.element.isRequired,
  popup: PropTypes.element, // 有可能是无
  children: PropTypes.element,
  right: PropTypes.bool,
  top: PropTypes.bool,
  disabled: PropTypes.bool,
  mask: PropTypes.bool,
  opacity: PropTypes.number,
  timeout: PropTypes.number, // tigger自动隐藏时间间隔
  adjustX: PropTypes.number // 调整X方向的偏移
}

Trigger.defaultProps = {
  type: 'click',
  mask: false,
  opacity: 0.5
}

export default Trigger
