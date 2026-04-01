# Price 价格

价格显示组件，支持金额格式化、千分位分隔、多币种切换等功能。

## 使用

```jsx
import Price from 'react-mgm/lib/price'
```

## API

### Props

| 属性 | 类型 | 必填 | 默认值 | 说明 |
|------|------|------|--------|------|
| value | number | 是 | - | 价格数值 |
| precision | number | - | 2 | 小数位数 |
| useGrouping | boolean | - | true | 是否使用千分位分隔符 |
| currencyScale | number | - | 0.85 | 货币符号缩放比例（em） |
| keepZero | boolean | - | true | 是否保留小数点后无效的零 |
| isFenUnit | boolean | - | false | 输入值是否为分单位（传入分单位会自动除以 100） |
| feeType | string | - | '' | 币种类型，用于多币种场景，对应 `setCurrencyList` 中的 `type` 字段 |

### 静态方法

| 方法 | 说明 |
|------|------|
| `Price.format(value, isFenUnit, formatOptions)` | 格式化价格数字。`value` 为数值，`isFenUnit` 是否为分单位，`formatOptions` 包含 `useGrouping`、`precision`、`keepZero` 选项 |
| `Price.setCurrency(symbol)` | 设置全局货币符号，会触发所有 Price 组件重新渲染。设置后自动持久化到 localStorage |
| `Price.getCurrency(type)` | 获取货币符号。传入 `type` 时从多币种列表中查找，不传则返回全局默认符号 |
| `Price.setUnit(unit)` | 设置全局货币单位 |
| `Price.getUnit(type)` | 获取货币单位。传入 `type` 时从多币种列表中查找，不传则返回全局默认单位 |
| `Price.setCurrencyList(list)` | 设置多币种列表。`list` 数组每项包含 `symbol`（符号）、`type`（类型）、`unit`（单位）字段 |

## 示例

### 基本使用

```jsx
import React from 'react'
import Price from 'react-mgm/lib/price'

class Demo extends React.Component {
  render () {
    return (
      <div>
        <Price value={100} />
        {/* 输出: ¥100.00 */}

        <Price value={-12314} />
        {/* 输出: -¥12,314.00 */}

        <Price value={12345.678} />
        {/* 输出: ¥12,345.68 */}

        <Price value={125345.6478} precision={3} />
        {/* 输出: ¥125,345.648 */}
      </div>
    )
  }
}
```

### 分单位输入

```jsx
<Price value={12345} isFenUnit />
{/* 12345 分 = 123.45 元，输出: ¥123.45 */}
```

### 切换货币符号

```jsx
// 在应用初始化时设置货币符号
Price.setCurrency('$')

// 多币种场景
Price.setCurrencyList([
  { symbol: '¥', type: 'CNY', unit: '元' },
  { symbol: '$', type: 'USD', unit: 'dollar' }
])

// 在组件中使用 feeType 指定币种
<Price value={100} feeType='USD' />
{/* 输出: $100.00 */}
```

### 使用静态方法格式化

```jsx
const formatted = Price.format(8132789.5404)
// 输出: "8,132,789.54"
```

## 注意事项

- 当 `value` 为 `null`、`undefined` 或 `NaN` 时，组件不会渲染任何内容
- `setCurrency` 设置的符号会自动持久化到 localStorage，刷新页面后仍有效
- 多币种列表通过 `setCurrencyList` 设置后，组件会根据 `feeType` 自动匹配对应的货币符号
- 货币符号默认缩放比例为 0.85em，当 `currencyScale` 大于 1 时固定为 1em
