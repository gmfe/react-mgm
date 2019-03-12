import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { formatNumber } from 'gm-util'

// _currency 为货币符号
let _currency = '¥'
let _unit = '元'

const format = (value, isFenUnit, formatOptions) => {
  if (isFenUnit) {
    value = value / 100
  }
  return formatNumber(value, formatOptions)
}
class Price extends React.Component {
  render () {
    const {
      value,
      useGrouping,
      precision,
      currencyScale,
      isFenUnit,
      keepZero,
      ...rest
    } = this.props
    if (_.isNil(value) || _.isNaN(value)) {
      return null
    }
    return (
      <span {...rest}>
        {value < 0 ? '-' : ''}
        <span
          style={{
            fontSize: `${currencyScale > 1 ? '1' : currencyScale}em`
          }}
        >{_currency}</span>{format(Math.abs(value), isFenUnit, { useGrouping, precision, keepZero })}
      </span>
    )
  }
}

Price.propTypes = {
  value: PropTypes.number.isRequired,
  precision: PropTypes.number,
  useGrouping: PropTypes.bool,
  currencyScale: PropTypes.number,
  // 是否保留小数点后无效的零
  keepZero: PropTypes.bool,
  isFenUnit: PropTypes.bool
}

Price.defaultProps = {
  precision: 2,
  useGrouping: true,
  currencyScale: 0.85,
  keepZero: true,
  isFenUnit: false
}

Price.format = format

// 设置符号
Price.setCurrency = currency => {
  if (!currency) return
  _currency = currency
}

// 获得符号
Price.getCurrency = () => {
  return _currency
}

Price.setUnit = unit => {
  if (!unit) return
  _unit = unit
}

Price.getUnit = () => {
  return _unit
}

export default Price
