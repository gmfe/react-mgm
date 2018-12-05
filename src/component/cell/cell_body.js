import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class CellBody extends React.Component {
  render () {
    const { className, children, primary, ...others } = this.props
    const cls = classNames({
      'weui-cell__bd': true,
      'weui-cell_primary': primary
    }, className)

    return (
      <div className={cls} {...others}>{children}</div>
    )
  }
}

CellBody.propTypes = {
  primary: PropTypes.bool
}

CellBody.defaultProps = {
  primary: false
}

export default CellBody
