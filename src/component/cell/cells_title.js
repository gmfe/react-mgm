import React from 'react'
import classNames from 'classnames'

const CellsTitle = (props) => {
  const {className, children, ...others} = props
  const cls = classNames('weui-cells__title', className)

  return (
    <div className={cls} {...others}>{children}</div>
  )
}

export default CellsTitle
