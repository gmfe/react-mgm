import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { getLocale } from '../../locales'

class Search extends React.Component {
  constructor (props) {
    super(props)
    this.input = React.createRef()
  }

  handleSearch = (e) => {
    e.preventDefault()
    this.props.onSearch && this.props.onSearch()
    this.input.current.blur()
  }

  handleChange = (e) => {
    this.props.onChange(e.target.value)
  }

  handleClear = () => {
    this.props.onChange('')
    this.input.current.focus()
  }

  handleCancel = (e) => {
    this.props.onChange('')
    this.props.onCancel && this.props.onCancel()
  }

  render () {
    const { value, placeholder, autoFocus, searchText, type, onCancel, onSearch, onChange, className, ...rest } = this.props
    return (
      <form
        {...rest}
        onSubmit={this.handleSearch}
        className={classNames('search', 'padding-lr-8', 'relative', className)}
      >
        <label className='search-label'>
          <i className='weui-icon-search search-icon relative align-self-center'/>
          <input
            type='search'
            className={classNames('search-input border-none text-desc align-self-center')}
            placeholder={placeholder}
            ref={this.input}
            value={value}
            autoFocus={this.props.autoFocus}
            onChange={this.handleChange}
          />
          <i
            className={classNames('weui-icon-clear', 'search-clear', 'relative', 'align-self-center', { 'inline-block': !!value })}
            onClick={this.handleClear}
          />
        </label>
        {
          type === 'search' ? (
            <a href='javascript:' className='search-btn inline-block text-link margin-left-8 align-self-center' onClick={this.handleSearch}>
              {searchText}
            </a>
          ) : (
            <a
              href='javascript:'
              className={classNames('cancel-btn', 'text-link', 'margin-left-8', 'align-self-center', 'inline-block')}
              onClick={this.handleCancel}
            >
              {getLocale('searchBar', 'cancel')}
            </a>
          )
        }
      </form>
    )
  }
}

Search.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  // 即时搜索可不传
  onSearch: PropTypes.func,
  autoFocus: PropTypes.bool,
  onCancel: PropTypes.func,
  placeholder: PropTypes.string,
  // 'search': 带搜索按钮 'cancel'：带取消按钮
  type: PropTypes.oneOf(['search', 'cancel']),
  // 自定义搜索按钮文案
  searchText: PropTypes.string
}

Search.defaultProps = {
  autoFocus: false,
  onCancel: _.noop,
  placeholder: getLocale('searchBar', 'search'),
  type: 'search',
  searchText: getLocale('searchBar', 'search')
}

export default Search
