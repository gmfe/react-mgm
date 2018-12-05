import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Flex from '../flex'

class Loading extends React.Component {
  render () {
    let {
      line,
      children,
      className,
      ...rest
    } = this.props

    return (
      <Flex
        alignCenter
        justifyCenter
        {...rest}
        className={classNames('loading', className)}
      >
        {line ? (
          <Flex alignEnd className='loading-linear'>
            <div className='line'/>
            <div className='line'/>
            <div className='line'/>
            <div className='line'/>
            <div className='line'/>
          </Flex>
        ) : <i className='weui-loading'/>}

        <span className='weui-loadmore__tips margin-left-4'>{children}</span>
      </Flex>
    )
  }
}

Loading.propTypes = {
  line: PropTypes.bool
}

export default Loading
