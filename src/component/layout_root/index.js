import React from 'react'

const TYPE = {
  INNERLAYER: 'innerLayer',
  POPUP: 'popup',
  MODAL: 'modal',
  TOAST: 'toast',
  NPROGRESS: 'nprogress'
}

let setComponentFunc = null

class LayerRoot extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      innerLayer: null,
      popup: null,
      modal: null,
      toast: null,
      nprogress: null
    }
  }

  componentDidMount () {
    setComponentFunc = (type, component) => {
      this.setState({
        [type]: component
      })
    }
  }

  componentWillUnmount () {
    setComponentFunc = null
  }

  render () {
    // 有层级关系
    return (
      <div>
        {this.state.innerLayer}
        {this.state.popup}
        {this.state.modal}
        {this.state.toast}
        {this.state.nprogress}
      </div>
    )
  }
}

LayerRoot.setComponent = (type, com) => {
  if (setComponentFunc) {
    LayerRoot.removeComponent(type)
    setComponentFunc(type, com)
  } else {
    console.warn('LayerRoot is uninitialized')
  }
}

LayerRoot.removeComponent = (type) => {
  if (setComponentFunc) {
    setComponentFunc(type, null)
  } else {
    console.warn('LayerRoot is uninitialized')
  }
}

LayerRoot.TYPE = TYPE

export default LayerRoot
