import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import Flex from '../flex'
import SVGSuccess from '../../../svg/success.svg'
import SVGCircle from '../../../svg/circle.svg'

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
        {checked ? (
          <SVGSuccess className='text-18 padding-4 line-height'/>
        ) : (
          <SVGCircle className='text-18 padding-4 line-height'/>
        )}
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
