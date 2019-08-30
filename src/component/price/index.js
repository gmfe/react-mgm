import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { formatNumber } from 'gm-util'
import storage from '../storage'
const eventBus = {
  add (eventName, handler) {
    window.addEventListener(eventName, handler)
  },
  dispatch (eventName, detail) {
    window.dispatchEvent(new window.CustomEvent(eventName, { detail }))
  },
  remove (eventName, handler) {
    window.removeEventListener(eventName, handler)
  }
}

const symbolKey = 'Price#symbol'
const unitKey = 'Price#unit'

// 默认 _symbol 为货币符号
let _symbol = storage.get(symbolKey) || '¥'
let _unit = storage.get(unitKey) || '元'
// [{ symbol: '￥', type: 'CNY', unit: '元' },...]
let _currencyList = [] // 多币种列表
const getCurrentFromType = type =>
  _.find(_currencyList, item => item.type === type)

const format = (value, isFenUnit, formatOptions) => {
  if (isFenUnit) {
    value = value / 100
  }
  return formatNumber(value, formatOptions)
}
class Price extends React.Component {
  rerender = () => {
    this.forceUpdate()
  }
  componentDidMount () {
    eventBus.add('REACT_MGM_UPDATE_PRICE', this.rerender)
  }
  componentWillUnmount () {
    eventBus.remove('REACT_MGM_UPDATE_PRICE', this.rerender)
  }
  render () {
    const {
      value,
      useGrouping,
      precision,
      currencyScale,
      isFenUnit,
      keepZero,
      feeType,
      ...rest
    } = this.props
    const current = getCurrentFromType(feeType)
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
        >
          {current ? current.symbol : _symbol}
        </span>{format(Math.abs(value), isFenUnit, { useGrouping, precision, keepZero })}
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
  isFenUnit: PropTypes.bool,
  feeType: PropTypes.string
}

Price.defaultProps = {
  precision: 2,
  useGrouping: true,
  currencyScale: 0.85,
  keepZero: true,
  isFenUnit: false,
  feeType: ''
}

Price.format = format

Price.setCurrencyList = (list = []) => {
  if (!list || !list.length) return
  _currencyList = list
}

// 设置符号
Price.setCurrency = symbol => {
  if (!symbol || symbol === _symbol) return
  _symbol = symbol
  storage.set(symbolKey, symbol)
  eventBus.dispatch('REACT_MGM_UPDATE_PRICE')
}

// 获得符号
Price.getCurrency = (type = '') => {
  let current = type ? getCurrentFromType(type) : null
  return current ? current.symbol : _symbol
}

Price.setUnit = unit => {
  if (!unit || unit === _unit) return
  _unit = unit
  storage.set(unitKey, unit)
}

Price.getUnit = (type = '') => {
  let current = type ? getCurrentFromType(type) : null
  return current ? current.unit : _unit
}

export default Price
