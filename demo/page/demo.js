import React from 'react'
import InputNumber from '../../src/component/input_number'

class DemoWrap extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      amount: 2
    }
    //
    // setTimeout(() => {
    //   this.setState({
    //     amount: 1
    //   })
    // }, 5000)
  }

  render () {
    const { amount } = this.state

    console.log(amount)

    return (
      <div>
        <InputNumber
          min={0}
          value={amount}
          onChange={na => {
            console.log('onChange')
            this.setState({
              amount: na
            })
          }}
        />
      </div>
    )
  }
}

export default DemoWrap
