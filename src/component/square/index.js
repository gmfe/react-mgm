import React from 'react'
import classNames from 'classnames'

class Square extends React.Component {
  render () {
    const {
      className,
      children,
      ...rest
    } = this.props
    const cn = classNames('square-inner', className)

    return (
      <div className='square'>
        <div {...rest} className={cn}>
          {children}
        </div>
      </div>
    )
  }
}

export default Square
