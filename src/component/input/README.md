# Input 数字输入框 (InputNumber)

## 简介

InputNumber 是一个数字输入组件（位于 `input/input.number.js`），用于限制用户只能输入指定精度的数字。支持最大值、最小值限制以及负数输入。

## 使用

```jsx
import InputNumber from 'react-mgm/input/input.number'
```

## API

### Props

| 参数 | 说明 | 类型 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| value | 当前值 | oneOfType(number, string) | - | - |
| onChange | 值变化时的回调函数 | function | 是 | - |
| placeholder | 占位文本 | string | - | - |
| className | 自定义类名 | string | - | - |
| max | 最大值 | number | - | - |
| min | 最小值 | number | - | - |
| precision | 精确度，保留几位小数 | number | - | `2` |
| minus | 是否支持输入负数 | boolean | - | `false` |

> 其他原生 input 标签的属性均可透传使用。

## 示例

### 基本用法

```jsx
function Demo () {
  const [value, setValue] = useState('')

  const handleChange = (value) => {
    setValue(value)
  }

  return (
    <InputNumber
      value={value}
      onChange={handleChange}
      max={99.99}
      min={0}
      precision={2}
      placeholder='请输入金额'
    />
  )
}
```

### 支持负数输入

```jsx
<InputNumber
  value={value}
  onChange={handleChange}
  minus
  precision={3}
/>
```

## 注意事项

- 输入时会自动限制精度，超出 precision 的小数位将被过滤。
- 当输入值超过 max 时，自动设为 max；低于 min 时，自动设为 min。
- minus 为 false（默认）时，不允许输入负数。
