import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const CellFooter = (props) => {
  const { className, children, primary, ...others } = props
  const cls = classNames({
    'weui-cell__ft': true,
    'weui-cell_primary': primary
  }, className)

  return (
    <div className={cls} {...others}>{children}</div>
  )
}

CellFooter.propTypes = {
  primary: PropTypes.bool
}

CellFooter.defaultProps = {
  primary: false
}

export default CellFooter
