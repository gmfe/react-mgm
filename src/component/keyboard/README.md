# Keyboard 数字键盘

## 简介

数字键盘组件，支持输入数字和小数点，包含退格和自定义按钮。适用于金额输入等场景。

## 使用

```jsx
import { Keyboard } from 'react-mgm'
```

## API

### Props

| 属性 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | string | 是 | 当前输入的值 |
| onChange | function | 是 | 值变更回调，参数为变更后的字符串值 |
| onSubmit | function | 否 | 点击完成按钮的回调，参数为 `'submit'` |
| submitText | string | 否 | 完成按钮的文本，默认 `'完成'` |
| btnOne | object | 否 | 中间左侧自定义按钮，格式为 `{ text: string, onClick: function }` |
| btnTwo | object | 否 | 中间右侧自定义按钮，格式为 `{ text: string, onClick: function }` |

### 默认值

| 属性 | 默认值 |
| --- | --- |
| onSubmit | `_.noop`（空函数） |
| submitText | `'完成'` |

## 示例

### 基础用法

```jsx
import React, { useState } from 'react'
import { Keyboard } from 'react-mgm'

function KeyboardDemo() {
  const [value, setValue] = useState('')

  return (
    <Keyboard
      value={value}
      onChange={setValue}
      onSubmit={() => console.log('提交：', value)}
    />
  )
}
```

### 带自定义按钮

```jsx
import React, { useState } from 'react'
import { Keyboard } from 'react-mgm'

function KeyboardDemo() {
  const [value, setValue] = useState('')

  return (
    <Keyboard
      value={value}
      onChange={setValue}
      onSubmit={() => console.log('提交：', value)}
      btnOne={{ text: '+', onClick: () => console.log('加号') }}
      btnTwo={{ text: '-', onClick: () => console.log('减号') }}
    />
  )
}
```

## 注意事项

- `value` 为 `string` 类型，键盘输入的数字和小数点会拼接到当前值上。
- 键盘布局为 4 行 4 列：第一行 `1 2 3 退格`，第二行 `4 5 6 btnOne`，第三行 `7 8 9 btnTwo`，第四行 `0(跨2列) . 完成`。
- `btnOne` 和 `btnTwo` 为可选的蓝色高亮按钮，未设置时显示为空白占位。
- 退格按钮在 `value` 为空时自动禁用（透明度降低，不可点击）。
- 键盘固定宽度为 `100vw`，高度为 `80vw`。
