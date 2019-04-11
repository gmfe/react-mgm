import React from 'react'
import LayoutRoot from '../layout_root'
import classNames from 'classnames'

const InnerLayerStatics = {
  render (props) {
    LayoutRoot.renderWith(LayoutRoot.TYPE.INNERLAYER, <InnerLayer {...props}/>)
  },

  hide () {
    LayoutRoot.hideWith(LayoutRoot.TYPE.INNERLAYER)
  }
}

const InnerLayer = ({ className, children, ...rest }) => (
  <div {...rest} className={classNames('inner-layer-container container-full', className)}>
    {children}
  </div>
)

Object.assign(InnerLayer, InnerLayerStatics)

export default InnerLayer
