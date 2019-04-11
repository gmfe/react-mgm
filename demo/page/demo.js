import React from 'react'
import { InnerLayer, Popup, Select } from '../../src'

class S extends React.Component {
  render () {
    return (
      <div>
        <button onClick={() => {
          Select.render({
            value: 1,
            data: [{
              text: '11',
              value: 1
            }]
          })
        }}>select
        </button>
      </div>
    )
  }
}

class P extends React.Component {
  render () {
    return (
      <div className='bg-default' style={{ height: '200px' }}>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <button onClick={() => {
          Popup.render({
            children: <S/>
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
            children: <P/>
          })
        }}>innerLayer
        </button>
      </div>
    )
  }
}

export default DemoWrap
