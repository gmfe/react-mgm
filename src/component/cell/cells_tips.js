import React from 'react'
import classNames from 'classnames'

const CellsTips = (props) => {
  const { className, children, ...others } = props
  const cls = classNames('weui-cells__tips', className)

  return (
    <div className={cls} {...others}>{children}</div>
  )
}

export default CellsTips
