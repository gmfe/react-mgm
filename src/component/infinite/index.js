import { getLocale } from '../../locales'
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Flex from '../flex/index'
import _ from 'lodash'
import { is } from 'gm-util'

class Infinite extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      loading: false
    }
    this.timer = null
    this.scrollTop = 0
  }

  // TODO getDerivedStateFromProps
  componentWillReceiveProps (nextProps) {
    if (nextProps.done) {
      this.noLoading()
    }
  }

  noLoading = () => {
    this.setState({
      loading: false
    })
  }

  handleBottom () {
    if (this.props.done) {
      return
    }

    clearTimeout(this.timer)

    this.setState({
      loading: true
    })

    const result = this.props.onBottom()
    // 简单判断是否promise
    if (is.promise(result)) {
      result.then(this.noLoading, this.noLoading)
    } else {
      // 假设要点时间 500
      this.timer = setTimeout(this.noLoading, 500)
    }
  }

  handleScroll = (event) => {
    // TODO 优化
    // 向下滚动才触发
    if (event.target.scrollTop > this.scrollTop) {
      if (!this.state.loading) {
        // 一定阈值才触发
        if (event.target.clientHeight + event.target.scrollTop + this.props.bottomOffset >= event.target.scrollHeight) {
          this.handleBottom()
        }
      }
    }
    this.scrollTop = event.target.scrollTop

    this.props.onScroll()
  }

  render () {
    const {
      className, children, done,
      bottomOffset, onBottom, // eslint-disable-line
      ...rest
    } = this.props

    const { loading } = this.state

    return (
      <div
        {...rest}
        className={classNames('infinite', className)}
        onScroll={this.handleScroll}
      >
        {children}
        <Flex justifyCenter alignCenter className='text-center'>
          {loading && (
            <Flex column justifyCenter style={{ height: '30px' }}>
              <i className='weui-loading'/>
            </Flex>
          )}
          {done && (
            <Flex
              column
              justifyCenter
              className='text-desc text-small infinite-no-more'
              style={{ height: '30px' }}
            >{getLocale('没有更多数据')}</Flex>
          )}
        </Flex>
      </div>
    )
  }
}

Infinite.defaultProps = {
  onBottom: _.noop,
  bottomOffset: 30 + 50, // loading 高度 + 50
  onScroll: _.noop
}

Infinite.propTypes = {
  onBottom: PropTypes.func.isRequired,
  bottomOffset: PropTypes.number,
  done: PropTypes.bool,
  onScroll: PropTypes.func
}

export default Infinite
