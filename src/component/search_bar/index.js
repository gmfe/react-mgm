import { getLocale } from '../../locales'
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import _ from 'lodash'

class SearchBar extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      id: props.id || '_mgm_search_bar_id' + (Math.random() + '').slice(2),
      focus: props.defaultFocus
    }

    this.handleOK = ::this.handleOK
    this.handleFocus = ::this.handleFocus
    this.handleBlur = ::this.handleBlur
    this.handleChange = ::this.handleChange
    this.handleClear = ::this.handleClear
    this.handleCancel = ::this.handleCancel
    this.handleInputFocus = ::this.handleInputFocus
  }

  componentDidMount () {
    console.warn('Deprecated. Use Search or SearchPage instead.')
  }

  render () {
    const cn = classNames('weui-search-bar', {
      'weui-search-bar_focusing': this.props.value || this.state.focus
    })

    return (
      <div className={cn}>
        <form className='weui-search-bar__form' onSubmit={this.handleOK}>
          <div className='weui-search-bar__box' onClick={this.handleInputFocus}>
            <i className='weui-icon-search'/>
            <input
              id={this.state.id}
              type='search'
              className='weui-search-bar__input'
              placeholder={this.props.placeholder}
              ref={(ref) => (this.input = ref)}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              onChange={this.handleChange}
              value={this.props.value}
              autoFocus={this.props.defaultFocus}
            />
            {this.props.value === '' ? undefined : (
              <a
                href='javascript:'
                className='weui-icon-clear'
                onClick={this.handleClear}
              />
            )}
          </div>
          <label
            htmlFor={this.state.id}
            className='flex flex-align-center weui-search-bar__label'
            onClick={this.handleInputFocus}
          >
            <i className='weui-icon-search'/>
            <span>{this.props.placeholder}</span>
          </label>
        </form>
        {this.props.OKBtn ? (
          <a href='javascript:' className='weui-search-bar__cancel-btn' onClick={this.handleOK}>
            {this.props.OKBtn === true ? getLocale('搜索') : this.props.OKBtn}
          </a>
        ) : (
          <a
            href='javascript:'
            className='weui-search-bar__cancel-btn'
            onClick={this.handleCancel}
          >{getLocale('取消')}</a>
        )}
      </div>
    )
  }

  handleInputFocus (e) {
    // 避免穿透
    e && e.preventDefault()
    this.setState({
      focus: true
    })
    this.input && this.input.focus()
  }

  handleFocus (e) {
    e && e.preventDefault()
    this.props.onFocus(e)
    this.setState({
      focus: true
    })
  }

  handleBlur (e) {
    e && e.preventDefault()
    this.props.onBlur(e)
    // blur触发优先于handleOK，，可能会导致OK按钮消失了，点不了
    setTimeout(() => {
      this.setState({
        focus: false
      })
    }, 500)
  }

  handleClear (e) {
    e && e.preventDefault()
    this.props.onChange('')
    this.props.onClear()
    this.input && this.input.focus()
  }

  handleCancel (e) {
    e && e.preventDefault()
    this.setState({ focus: false })
    this.props.onChange('')
    this.props.onCancel()
    this.input && this.input.blur()
  }

  handleOK (e) {
    e && e.preventDefault()
    this.input && this.input.blur()
    this.props.onOK()
    this.setState({
      focus: false
    })
  }

  handleChange (e) {
    this.props.onChange(e.target.value)
  }
}

SearchBar.defaultProps = {
  defaultFocus: false,
  onBlur: _.noop,
  onFocus: _.noop,
  onOK: _.noop,
  onCancel: _.noop,
  onClear: _.noop,
  OKBtn: false
}

SearchBar.propTypes = {
  defaultFocus: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  onOK: PropTypes.func,
  onCancel: PropTypes.func,
  onClear: PropTypes.func,
  OKBtn: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]) // 就没有onCancel 时间 了，传string则替换文本
}

export default SearchBar
