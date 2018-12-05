import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import _ from 'lodash'
import Flex from '../flex/index'

class SliderFlag extends React.Component {
  render () {
    const { count, index, type, flag, activeStyle } = this.props
    return (
      <Flex justifyCenter className={classNames('slider-flag', {
        'slider-flag-line': type === 'line',
        'slider-flag-inner': flag === 'inner'
      })}>
        {_.map(_.range(count), (value, i) => (
          <span
            className={classNames({ active: index === i })}
            style={index === i ? activeStyle : {}}
            key={i}
          />
        ))}
      </Flex>
    )
  }
}

SliderFlag.propTypes = {
  type: PropTypes.oneOf(['dot', 'line']),
  flag: PropTypes.oneOf(['default', 'inner']),
  count: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  activeStyle: PropTypes.object
}

SliderFlag.defaultProps = {
  type: 'dot',
  flag: 'default'
}

export default SliderFlag
