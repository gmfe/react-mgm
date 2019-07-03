import React from 'react'
import { InnerLayer, Popup, Select, Slider } from '../../src'

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
  state = {
    arr: [1, 2, 3, 4, 5]
  }

  handleClick = () => {
    this.setState({
      arr: [1, 2, 3]
    })
  }

  render () {
    const { arr } = this.state
    return (
      <div>
        <button onClick={() => {
          InnerLayer.render({
            children: <P/>
          })
        }}>innerLayer
        </button>
        <div style={{ width: '500px', border: '1px solid #ddd' }}>
          <Slider>
            { arr.map(v => (
              <div><h1>{v}</h1></div>
            )) }
          </Slider>
        </div>
        <button onClick={this.handleClick}>change slider length</button>
      </div>
    )
  }
}

export default DemoWrap
