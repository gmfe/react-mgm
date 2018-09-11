import React from 'react'
import { findDOMNode } from 'react-dom'
import _ from 'lodash'

const iPhone = window.navigator.userAgent.indexOf('iPhone') > -1

class ScrollIntoView extends React.Component {
  constructor (props) {
    super(props)
    this.__mounted = false
  }

  componentWillMount () {
    if (!_.isObject(this.props.children)) {
      console.error('There must be one and only one component')
    }
  }

  componentWillUnmount () {
    this.__mounted = true
  }

  handleFocus = () => {
    const { onFocus } = this.props.children.props

    onFocus && onFocus()

    if (!iPhone) {
      setTimeout(() => {
        if (this.__mounted) {
          const target = findDOMNode(this.ref)
          target.scrollIntoViewIfNeeded ? target.scrollIntoViewIfNeeded() : target.scrollIntoView()
        }
      }, 500)
    }
  }

  render () {
    return React.cloneElement(this.props.children, {
      ref: ref => (this.ref = ref),
      onFocus: this.handleFocus
    })
  }
}

export default ScrollIntoView
