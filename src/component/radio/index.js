import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import classNames from 'classnames'
import Flex from '../flex'

class Radio extends React.Component {
  render () {
    const { disabled, checked, onChange, children, ...rest } = this.props
    return (
      <Flex
        {...rest}
        alignCenter
        onClick={disabled ? _.noop : () => onChange(!checked)}
        style={{
          opacity: disabled ? 0.7 : 1
        }}
      >
        <i className={classNames('ifont text-18 padding-4 line-height', {
          'text-primary ifont-success': checked,
          'text ifont-circle': !checked
        })}/>
        {children}
      </Flex>
    )
  }
}

Radio.propTypes = {
  disabled: PropTypes.bool,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func
}

Radio.defaultProps = {
  onChange: _.noop
}

export default Radio
