import React from 'react'
import Price from '../../src/component/price'

Price.setCurrency('¥')

class PriceWrap extends React.Component {
  render () {
    return (
      <div>
        <Price value={100}/>
      </div>
    )
  }
}

export default PriceWrap
