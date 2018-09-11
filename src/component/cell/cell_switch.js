import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const CellSwitch = (props) => {
  const {
    className,
    bodyText,
    bodyProps,
    checked,
    onChange,
    ...rest
  } = props

  const cls = classNames('weui-cell weui-cell_switch', className)

  return (
    <div {...rest} className={cls}>
      <div {...bodyProps} className={classNames('weui-cell__bd', bodyProps.className)}>{bodyText}</div>
      <div className='weui-cell__ft' style={{ fontSize: '0' }}>
        <input
          checked={checked}
          onChange={onChange}
          type='checkbox'
          className='weui-switch'
        />
      </div>
    </div>
  )
}

CellSwitch.propTypes = {
  bodyText: PropTypes.string.isRequired,
  bodyProps: PropTypes.object,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
}

CellSwitch.defaultProps = {
  bodyProps: {}
}

export default CellSwitch
