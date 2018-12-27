import React from 'react'
import Counter from '../../src/component/counter'

class CounterWrap extends React.Component {
  constructor (props) {
    super(props)

    this.handleCountMinus = ::this.handleCountMinus
    this.handleCountPlus = ::this.handleCountPlus
    this.handleCountNumEdit = ::this.handleCountNumEdit
    this.handleCountInputBlur = ::this.handleCountInputBlur

    this.state = ({
      amount: 9,
      maxAmount: 999
    })
  }

  handleCountMinus (amount) {
    console.log('minus: ', amount)

    this.setState({
      amount: amount
    })
  }

  handleCountPlus (amount) {
    console.log('add: ', amount)

    this.setState({
      amount: amount
    })
  }

  handleCountNumEdit (amount) {
    console.log('edit: ', amount)
    const { maxAmount } = this.state

    if (amount > maxAmount) {
      amount = maxAmount
    }

    this.setState({
      amount: amount
    })
  }

  handleCountInputBlur (amount) {
    console.log('Blur: ', amount)

    this.setState({
      amount: amount
    })
  }

  render () {
    const { amount, maxAmount } = this.state
    const plusDisabled = amount >= maxAmount

    return (
      <div>
        <Counter
          key='counter'
          onCountMinus={this.handleCountMinus}
          onCountPlus={this.handleCountPlus}
          onCountNumEdit={this.handleCountNumEdit}
          onCountInputBlur={this.handleCountInputBlur}
          amount={amount}
          isPlusDisabled={plusDisabled}
        />
      </div>
    )
  }
}

// TODO 整理

export default CounterWrap
