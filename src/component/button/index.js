import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import classNames from 'classnames'
import { is } from 'gm-util'

class Button extends React.Component {
  constructor (props) {
    super(props)
    this.handleClick = ::this.handleClick
    this.state = {
      loading: false
    }
  }

  handleClick (event) {
    event.preventDefault()
    const { hasLoading, onClick } = this.props
    const { loading } = this.state

    if (loading) {
      return
    }

    const result = onClick(event)

    if (hasLoading && is.promise(result)) {
      this.setState({ loading: true })
      Promise.resolve(result).then(() => this.setState({
        loading: false
      }), () => this.setState({
        loading: false
      }))
    }
  }

  render () {
    const {
      onClick, // eslint-disable-line
      hasLoading,
      className,
      children,
      ...rest
    } = this.props

    const { loading } = this.state

    return (
      <button
        {...rest}
        className={classNames({
          'weui-btn_loading': hasLoading && loading
        }, className)}
        onClick={this.handleClick}
      >
        {hasLoading && loading && <i className='weui-loading'/>}
        {children}
      </button>
    )
  }
}

// 只封装了 loading
Button.propTypes = {
  hasLoading: PropTypes.bool,
  onClick: PropTypes.func
}

Button.defaultProps = {
  hasLoading: false,
  onClick: _.noop
}

export default Button
