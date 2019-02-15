import React from 'react'
import LayoutRoot from '../layout_root'
import classNames from 'classnames'

const InnerLayerStatics = {
  render (props) {
    const popstate = (e) => {
      // 代表还有其他state，即浮层，所以不采取任务逻辑
      if (e.state && e.state.type === 'innerLayer') {
        return
      }
      LayoutRoot.removeComponent(LayoutRoot.TYPE.INNERLAYER)
      window.removeEventListener('popstate', popstate)
    }

    window.addEventListener('popstate', popstate)

    window.history.pushState({ type: 'innerLayer' }, null)

    LayoutRoot.setComponent(LayoutRoot.TYPE.INNERLAYER, <InnerLayer {...props}/>)
  },

  hide () {
    LayoutRoot.removeComponent(LayoutRoot.TYPE.INNERLAYER)

    window.history.go(-1)
  }
}

const InnerLayer = ({ className, children, ...rest }) => (
  <div {...rest} className={classNames('under-popup-container container-full', className)}>
    {children}
  </div>
)

Object.assign(InnerLayer, InnerLayerStatics)

export default InnerLayer
