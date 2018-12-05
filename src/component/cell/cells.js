import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const Cells = (props) => {
  const { children, checkbox, className, ...others } = props

  const cls = classNames('weui-cells', className, {
    'weui-cells_checkbox': checkbox
  })

  return (
    <div className={cls} {...others}>{children}</div>
  )
}

Cells.propTypes = {
  checkbox: PropTypes.bool
}

Cells.defaultProps = {
  checkbox: false
}

export default Cells
