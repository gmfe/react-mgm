import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import classNames from 'classnames'
import { is } from 'gm-util'

class Button extends React.Component {
  state = {
    loading: false
  }

  handleClick = (event) => {
    event.preventDefault()
    const { onClick } = this.props
    const { loading } = this.state

    if (loading) {
      return
    }

    const result = onClick(event)

    if (is.promise(result)) {
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
      className,
      children,
      ...rest
    } = this.props

    const { loading } = this.state

    return (
      <button
        {...rest}
        className={classNames({
          'weui-btn_loading': loading
        }, className)}
        onClick={this.handleClick}
      >
        {loading && <i className='weui-loading'/>}
        {children}
      </button>
    )
  }
}

Button.propTypes = {
  onClick: PropTypes.func
}

Button.defaultProps = {
  onClick: _.noop
}

export default Button
