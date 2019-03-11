import React from 'react'
import Price from '../../src/component/price'

Price.setCurrency('¥')

class PriceWrap extends React.Component {
  render () {
    return (
      <div>
        <div> <Price value={100}/> </div>
        <div> <Price value={-12314}/> </div>
        <div> <Price value={12345.678}/> </div>
        <div> <Price value={125345.6478} precision={3}/> </div>

        {
          Price.format(-8132789.5404)
        }
      </div>
    )
  }
}

export default PriceWrap
