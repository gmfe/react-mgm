import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class Mask extends React.Component {
  render () {
    const {
      className, style,
      show,
      opacity,
      ...rest
    } = this.props

    const s = Object.assign({ opacity }, style)

    if (!show) {
      return null
    }

    return (
      <div {...rest} className={classNames('mask', className)} style={s}/>
    )
  }
}

Mask.propTypes = {
  show: PropTypes.bool,
  opacity: PropTypes.number
}

Mask.defaultProps = {
  show: false,
  opacity: 0.5
}

export default Mask
