import React from 'react'
import { InnerLayer, Popup } from '../../src'

class Com extends React.Component {
  render () {
    return (
      <div className='bg-white' style={{ height: '500px' }}>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <button onClick={() => {
          Popup.render({
            children: <div className='bg-default'>dafafa</div>
          })
        }}>popup
        </button>
      </div>
    )
  }
}

class DemoWrap extends React.Component {
  render () {
    return (
      <div>
        <button onClick={() => {
          InnerLayer.render({
            children: <Com/>
          })
        }}>innerLayer
        </button>
      </div>
    )
  }
}

export default DemoWrap
