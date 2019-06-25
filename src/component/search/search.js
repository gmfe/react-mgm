import { getLocale } from '../../locales'
import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import _ from 'lodash'

class Search extends React.Component {
  input = React.createRef()

  handleSearch = (e) => {
    e.preventDefault()
    this.props.onSearch()
    this.input.current.blur()
  }

  handleChange = (e) => {
    this.props.onChange(e.target.value)
  }

  handleClear = () => {
    this.props.onChange('')
  }

  handleCancel = () => {
    this.props.onChange('')
    this.props.onCancel()
  }

  render () {
    const { value, placeholder, autoFocus, searchText, type, onCancel, onSearch, onChange, className, style, ...rest } = this.props
    return (
      <form
        {...rest}
        onSubmit={this.handleSearch}
        className={classNames('search padding-lr-8 flex flex-align-center', className)}
        style={{
          height: '45px',
          ...style
        }}
      >
        <label className='relative flex flex-flex'>
          <i className='weui-icon-search absolute' style={{ left: '8px', top: '7px' }}/>
          <input
            type='search'
            className='weui-input bg-white'
            placeholder={placeholder}
            ref={this.input}
            value={value}
            autoFocus={this.props.autoFocus}
            onChange={this.handleChange}
            style={{
              height: '28px',
              borderRadius: '14px',
              padding: '0 28px'
            }}
          />
          {value && (
            <i
              className='weui-icon-clear absolute'
              style={{
                right: '8px',
                top: '7px'
              }}
              onClick={this.handleClear}
            />
          )}
        </label>
        {
          type === 'search' ? (
            <a
              href='javascript:'
              className='text-link margin-left-8'
              onClick={this.handleSearch}
            >
              {searchText || getLocale('搜索')}
            </a>
          ) : (
            <a
              href='javascript:'
              className='text-link margin-left-8'
              onClick={this.handleCancel}
            >
              {searchText || getLocale('取消')}
            </a>
          )
        }
      </form>
    )
  }
}

Search.propTypes = {
  // 'search': 带搜索按钮 'cancel'：带取消按钮
  type: PropTypes.oneOf(['search', 'cancel']),
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  autoFocus: PropTypes.bool,
  // 即时搜索可不传
  onSearch: PropTypes.func,
  onCancel: PropTypes.func,
  placeholder: PropTypes.string,
  // 自定义搜索按钮文案
  searchText: PropTypes.string
}

Search.defaultProps = {
  autoFocus: false,
  onSearch: _.noop,
  onCancel: _.noop,
  placeholder: getLocale('搜索'),
  type: 'search'
}

export default Search
