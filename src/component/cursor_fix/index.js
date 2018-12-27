import React from 'react'
import PropTypes from 'prop-types'

class CursorFix extends React.Component {
  handleClick = (event) => {
    // 移动的的光标容易飘。click perventDefault 然后 focus 下可解决。
    // 别问我为什么。
    event.preventDefault()
    event.target.focus()
    this.props.onClick && this.props.onClick(event)
  }

  render () {
    const {
      component,
      ...rest
    } = this.props
    return React.createElement(component, Object.assign(rest, {
      onClick: this.handleClick
    }))
  }
}

CursorFix.propTypes = {
  component: PropTypes.string.isRequired
}

export default CursorFix
