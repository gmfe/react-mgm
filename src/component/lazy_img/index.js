import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { isElementOverViewport } from 'gm-util'
import _ from 'lodash'

class LazyImg extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      show: false
    }
    this.targetDom = null

    this.debounceDoLazy = _.debounce(this.doLazy, props.delay).bind(this)
  }

  componentDidMount () {
    const { targetId } = this.props
    this.targetDom = targetId ? window.document.getElementById(targetId) : window.document.getElementsByClassName('page-content')[0]
    if (this.targetDom) {
      this.targetDom.addEventListener('scroll', this.debounceDoLazy)
      this.doLazy()
    }
  }

  componentWillUnmount () {
    this.removeListener()
  }

  removeListener () {
    if (this.targetDom) {
      this.targetDom.removeEventListener('scroll', this.debounceDoLazy)
    }
  }

  doLazy () {
    if (this.refImg && isElementOverViewport(this.refImg)) {
      this.setState({
        show: true
      })
      this.removeListener()
    }
  }

  render () {
    const {
      className,
      src,
      placeholder,
      delay, targetId, // eslint-disable-line
      ...rest
    } = this.props

    return <img
      {...rest}
      ref={ref => (this.refImg = ref)}
      className={classNames('lazy-img', className)}
      src={this.state.show && src ? src : placeholder}
    />
  }
}

LazyImg.propType = {
  src: PropTypes.string,
  placeholder: PropTypes.string,
  targetId: PropTypes.string, // 指定监听滚动的dom id
  delay: PropTypes.number
}

LazyImg.defaultProps = {
  delay: 500
}

export default LazyImg
