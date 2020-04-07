import React from 'react'
import PropTypes from 'prop-types'
import Flex from '../flex'
import classNames from 'classnames'
import ScrollIntoView from '../scroll_into_view'
import Big from 'big.js'
import InputNumber from '../input/input.number'
import SVGMinusCycle from '../../../svg/minus-circle.svg'
import SVGAddCycle from '../../../svg/add-circle.svg'

class Counter extends React.Component {
  constructor (props) {
    super(props)

    this.handleCountMinus = :: this.handleCountMinus
    this.handleCountPlus = :: this.handleCountPlus
    this.handleCountInputBlur = :: this.handleCountInputBlur
  }

  // 点减号时触发
  handleCountMinus () {
    const { onCountMinus } = this.props
    const { amount } = this.props

    if (amount === 0) {
      return
    }

    const amount_new = Number(Big(amount || 1).minus(1).toString())
    onCountMinus(amount_new)
  }

  // 点加号时触发
  handleCountPlus (e) {
    const { onCountPlus } = this.props
    const { amount } = this.props

    let amount_new = Number(Big(amount || 0).plus(1).toString())

    onCountPlus(amount_new, e)
  }

  // 失焦后触发
  handleCountInputBlur (e) {
    const { onCountInputBlur } = this.props
    const amount = e.target.value

    onCountInputBlur(amount)
  }

  render () {
    const { amount, isPlusDisabled } = this.props
    const minusIconClass = classNames('counter-del-btn', {
      'disable none': amount === 0
    })
    const plusIconClass = classNames('counter-add-btn', {
      'disable': isPlusDisabled
    })
    const inputClass = classNames('counter-num', {
      'counter-num-border': amount > 0
    })

    return (
      <Flex alignCenter className='counter-container-option'>
        <SVGMinusCycle
          className={minusIconClass}
          onClick={this.handleCountMinus}
        />
        {
          <ScrollIntoView>
            <InputNumber
              className={inputClass}
              onChange={this.props.onCountNumEdit}
              onBlur={this.handleCountInputBlur}
              onFocus={this.props.onCountInputFocus}
              value={amount || ''}
            />
          </ScrollIntoView>
        }
        <SVGAddCycle
          className={plusIconClass}
          onClick={this.handleCountPlus}
        />
      </Flex>
    )
  }
}

Counter.propTypes = {
  onCountMinus: PropTypes.func.isRequired,
  onCountPlus: PropTypes.func.isRequired,
  onCountNumEdit: PropTypes.func.isRequired,
  onCountInputBlur: PropTypes.func.isRequired,
  isPlusDisabled: PropTypes.bool,
  amount: PropTypes.any.isRequired
}

export default Counter
