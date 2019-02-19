import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const CellHeader = (props) => {
  const { className, children, primary, ...others } = props
  const cls = classNames('flex-none', {
    'weui-cell__hd': true,
    'weui-cell_primary': primary
  }, className)

  return (
    <div className={cls} {...others}>{children}</div>
  )
}

CellHeader.propTypes = {
  primary: PropTypes.bool
}

CellHeader.defaultProps = {
  primary: false
}

export default CellHeader
