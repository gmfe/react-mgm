import React from 'react'
import { getCurrency } from './../../util/currency'

class Price extends React.Component {
  constructor (props) {
    super(props)
    this.currency = getCurrency()
    console.warn('Price 已废弃。请使用 PriceNew 组件')
  }

  render () {
    let { ...rest } = this.props
    const child = this.props.children ? this.props.children : 0

    return (
      <span {...rest}><span className='currency'>{this.currency}</span>{child}</span>
    )
  }
}

export default Price
