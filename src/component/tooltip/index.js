import React from 'react'
import PropTypes from 'prop-types'

class Tooltip extends React.Component {
  render () {
    const { placement, children, style } = this.props

    return (
      <div className={`tooltip tooltip-${placement}`} style={style}>
        <div className='tooltip-arrow'/>
        <div className='tooltip-inner'>{children}</div>
      </div>
    )
  }
}

Tooltip.propTypes = {
  placement: PropTypes.oneOf(['top', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight'])
}

Tooltip.defaultProps = {
  placement: 'bottomRight'
}

export default Tooltip
