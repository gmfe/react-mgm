# Counter 计数器

## 简介

计数器组件，包含减号按钮、数字输入框和加号按钮，支持手动输入数字。常用于商品数量选择等场景。

## 使用

```jsx
import { Counter } from 'react-mgm'
```

## API

### Props

| 属性 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| amount | any | 是 | 当前数量值 |
| onCountMinus | function | 是 | 点击减号按钮的回调，参数为减少后的数量 |
| onCountPlus | function | 是 | 点击加号按钮的回调，参数为增加后的数量，第二个参数为事件对象 `e` |
| onCountNumEdit | function | 是 | 输入框内容变更时的回调，参数为当前输入值 |
| onCountInputBlur | function | 是 | 输入框失焦时的回调，参数为当前输入值 |
| isPlusDisabled | boolean | 否 | 是否禁用加号按钮 |

## 示例

### 基础用法

```jsx
import React from 'react'
import { Counter } from 'react-mgm'

class CounterDemo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      amount: 9,
      maxAmount: 999
    }
  }

  handleCountMinus = (amount) => {
    this.setState({ amount })
  }

  handleCountPlus = (amount) => {
    this.setState({ amount })
  }

  handleCountNumEdit = (amount) => {
    const { maxAmount } = this.state
    if (amount > maxAmount) amount = maxAmount
    this.setState({ amount })
  }

  handleCountInputBlur = (amount) => {
    this.setState({ amount })
  }

  render() {
    const { amount, maxAmount } = this.state
    return (
      <Counter
        amount={amount}
        onCountMinus={this.handleCountMinus}
        onCountPlus={this.handleCountPlus}
        onCountNumEdit={this.handleCountNumEdit}
        onCountInputBlur={this.handleCountInputBlur}
        isPlusDisabled={amount >= maxAmount}
      />
    )
  }
}
```

## 注意事项

- `amount` 为 `0` 时，减号按钮自动隐藏（添加 `none` 类名）。
- `isPlusDisabled` 为 `true` 时，加号按钮显示为禁用状态。
- 点击减号时，如果 `amount` 已经为 `0` 则不触发回调。
- 加减操作使用 `big.js` 进行精确计算，避免浮点数精度问题。
- 输入框使用 `InputNumber` 组件，只允许输入数字。
- `onCountPlus` 回调的第二个参数为事件对象 `e`，可用于阻止事件冒泡等操作。
