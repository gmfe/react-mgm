import React from 'react'
import PropTypes from 'prop-types'
import Flex from '../flex'
import classNames from 'classnames'
import _ from 'lodash'
import SVGAngleLeft from '../../../svg/angle-left.svg'

const Header = (props) => {
  const {
    title,
    hideBack,
    onBack,
    right,
    style,
    ...rest
  } = props

  const handleBack = () => {
    onBack()
  }

  return (
    <Flex
      alignCenter
      justifyBetween
      style={{
        height: '45px',
        ...style
      }}
      {...rest}
    >
      <Flex alignCenter>
        {!hideBack && (
          <SVGAngleLeft className=' text-24 padding-lr-8' onClick={handleBack}/>
        )}
        <div className={classNames('text-16 padding-right-8', {
          'padding-left-8': hideBack
        })}>
          {title}
        </div>
      </Flex>
      {right}
    </Flex>
  )
}

Header.propTypes = {
  onBack: PropTypes.func,
  title: PropTypes.string,
  hideBack: PropTypes.bool,
  right: PropTypes.element
}

Header.defaultProps = {
  onBack: _.noop
}

export default Header
