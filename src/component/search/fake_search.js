import { getLocale } from '../../locales'
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Flex from '../flex'

const FakeSearch = (props) => {
  const { placeholder, center, light, className, style, children, ...rest } = props

  return (
    <Flex
      {...rest}
      column
      justifyCenter
      className={classNames('fake-search padding-lr-8', className)}
      style={{
        height: '45px',
        ...style
      }}
    >
      <Flex
        alignCenter
        justifyCenter={center}
        className='text-center text-desc'
        style={{
          borderRadius: '14px',
          height: '28px',
          lineHeight: '28px',
          padding: '0 8px',
          background: light ? 'rgba(214, 214, 214, 0.4)' : 'white'
        }}
      >
        <i className='weui-icon-search margin-right-4'/>
        {placeholder}
        {children}
      </Flex>
    </Flex>
  )
}

FakeSearch.propTypes = {
  onClick: PropTypes.func,
  placeholder: PropTypes.string,
  center: PropTypes.bool,
  light: PropTypes.bool
}

FakeSearch.defaultProps = {
  placeholder: getLocale('搜索')
}

export default FakeSearch
