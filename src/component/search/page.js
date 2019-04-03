import React from 'react'
import PropTypes from 'prop-types'
import Page from '../page'
import Search from './search'
import _ from 'lodash'

class SearchPage extends React.Component {
  handleSearch = () => {
    this.props.onSearch()
  }

  handleCancel = () => {
    this.props.onCancel()
  }

  renderHeader () {
    const { active, header, value, onChange } = this.props

    if (active) {
      return (
        <Search
          value={value}
          onChange={onChange}
          autoFocus
          type='cancel'
          onSearch={this.handleSearch}
          onCancel={this.handleCancel}
        />
      )
    }

    return header
  }

  render () {
    const {
      active,
      onCancel,
      value, onChange, onSearch,// eslint-disable-line
      children,
      ...rest
    } = this.props

    return (
      <Page
        {...rest}
        header={this.renderHeader()}
      >
        {children}
      </Page>
    )
  }
}

SearchPage.propTypes = {
  active: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  // 存在建议搜索词，所以需要把 value 交给调用方控制
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func,
  ...Page.propTypes
}

SearchPage.defaultProps = {
  onSearch: _.noop
}

export default SearchPage
