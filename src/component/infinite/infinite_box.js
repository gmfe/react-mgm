import { getLocale } from '../../locales'
import React from 'react'
import PropTypes from 'prop-types'
import Infinite from './index'
import Flex from '../flex'

class InfiniteBox extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      page_obj: null,
      limit: 10, // 后台默认10
      offset: 0,
      loading: false,
      done: false
    }
  }

  // 暴露给外面用
  apiDoFirstRequest = (params) => {
    this.setState({
      page_obj: null,
      limit: 10,
      offset: 0,
      loading: false,
      done: false
    }, () => this.handleRequest(params))
  }

  handleRequest = (params = {}) => {
    const { loading, page_obj } = this.state

    if (loading) {
      return
    }

    this.setState({
      loading: true
    })

    const result = this.props.onRequest(Object.assign({
      page_obj
    }, params))
    result.then(json => {
      this.setState({
        loading: false,
        page_obj: json.pagination.page_obj,
        done: !json.pagination.more && json.data && json.data.length > 0 // 有数据切more false 才叫真正的没有更多数据
      })
    }).catch(() => {
      this.setState({
        loading: false
      })
    })
  }

  handleReload = () => {
    this.apiDoFirstRequest()
  }

  render () {
    const {
      onRequest, // eslint-disable-line
      children,
      showEmpty,
      ...rest
    } = this.props
    const { loading } = this.state

    return (
      <Infinite
        {...rest}
        onBottom={this.handleRequest}
        done={showEmpty ? false : this.state.done}
      >
        {loading && (
          <div className='text-center' style={{
            paddingTop: 100
          }}>
            {getLocale('加载中...')}
          </div>
        )}
        {showEmpty && !loading && (
          <Flex column justifyCenter style={{
            paddingTop: 100
          }}>
            <div className='text-center'>{getLocale('没有数据')}</div>
            <div className='padding-8'/>
            <button
              className='weui-btn weui-btn_default weui-btn_mini'
              onClick={this.handleReload}
            >{getLocale('点击重新加载')}
            </button>
          </Flex>
        )}
        {children}
      </Infinite>
    )
  }
}

InfiniteBox.propTypes = {
  // 提供 page_obj，要返回 promise，且 resolve json
  onRequest: PropTypes.func.isRequired,
  showEmpty: PropTypes.bool
}

InfiniteBox.defaultProps = {
  showEmpty: false
}

export default InfiniteBox
