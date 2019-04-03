import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { getLocale } from '../../locales'

class FakeSearch extends React.Component {
  render () {
    const { onClick, placeholder, className, ...rest } = this.props
    return (
      <div
        {...rest}
        onClick={onClick}
        className={classNames('fake-search', 'text-desc', 'padding-lr-8', className)}
      >
        <i className='weui-icon-search icon-search margin-right-4'/>
        {placeholder}
      </div>
    )
  }
}

FakeSearch.propTypes = {
  onClick: PropTypes.func,
  placeholder: PropTypes.string
}

FakeSearch.defaultProps = {
  placeholder: getLocale('searchBar', 'search')
}

export default FakeSearch
