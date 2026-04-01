# InputNumber 数字输入框

## 简介

InputNumber 是一个数字输入组件，用于限制用户只能输入符合精度要求的数字。支持最大值、最小值限制，并通过 `big.js` 进行高精度数值校验。

> 注意：此组件位于 `input_number` 目录，与 `input/input.number.js` 是两个不同的组件。

## 使用

```jsx
import InputNumber from 'react-mgm/input_number'
```

## API

### Props

| 参数 | 说明 | 类型 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| value | 当前值，传入 null 显示为空 | number | - | - |
| onChange | 值变化时的回调函数，参数为 number 或 null | function | 是 | - |
| placeholder | 占位文本 | string | - | - |
| max | 最大值限制 | number | - | - |
| min | 最小值限制 | number | - | - |
| precision | 精确度，保留几位小数 | number | - | `2` |

> 其他原生 input 标签的属性均可透传使用。

## 示例

### 基本用法

```jsx
function Demo () {
  const [value, setValue] = useState(null)

  const handleChange = (value) => {
    setValue(value)
  }

  return (
    <InputNumber
      value={value}
      onChange={handleChange}
      max={9999}
      min={0}
      precision={2}
      placeholder='请输入数量'
    />
  )
}
```

## 注意事项

- value 传入 `null` 时输入框显示为空，`onChange` 回调在输入为空时返回 `null`。
- 使用 `big.js` 进行精度校验，确保小数位数的准确性。
- 当输入的值不符合 max、min 或 precision 约束时，输入将被忽略（不会更新值）。
- 该组件为受控组件，需要配合 `value` 和 `onChange` 使用。
