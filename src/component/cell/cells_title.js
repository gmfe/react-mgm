import React from 'react'
import classNames from 'classnames'

const CellsTitle = (props) => {
  const { className, children, ...rest } = props

  return (
    <div {...rest} className={classNames('weui-cells__title', className)}>{children}</div>
  )
}

export default CellsTitle
