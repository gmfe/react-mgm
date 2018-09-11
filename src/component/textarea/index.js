import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class Textarea extends React.Component {
  static defaultProps = {
    wrapProps: {}
  }

  render () {
    const cn = classNames('textarea-adapter', this.props.wrapProps.className)
    const { wrapProps, ...rest } = this.props
    return (
      <div {...wrapProps} className={cn}>
        <pre>{this.props.value}</pre>
        <textarea {...rest} className={classNames('weui-textarea', this.props.className)}/>
      </div>
    )
  }
}

Textarea.propTypes = {
  wrapProps: PropTypes.object
}

Textarea.defaultProps = {
  wrapProps: {}
}

export default Textarea
