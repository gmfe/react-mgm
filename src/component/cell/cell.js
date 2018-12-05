import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Cell = (props) => {
  const {
    className,
    children,
    access,
    label,
    href,
    link,
    htmlFor,
    ...others
  } = props
  const CellComponent = href ? 'a' : htmlFor ? 'label' : 'div'

  const cls = classNames({
    'weui-cell': true,
    'weui-cell_access': access,
    'weui-cell_link': link,
    'weui-check__label': label
  }, className)

  return (
    <CellComponent
      {...others}
      className={cls}
      href={href}
      htmlFor={htmlFor}
    >
      {children}
    </CellComponent>
  )
}

Cell.propTypes = {
  access: PropTypes.bool,
  link: PropTypes.bool,
  label: PropTypes.bool
}

Cell.defaultProps = {
  access: false,
  link: false,
  label: false

}

export default Cell
