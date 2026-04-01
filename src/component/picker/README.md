# Picker 选择器

## 简介

选择器组件，支持多列滚动选择。包含四个子组件：

- **Picker** - 基础多列选择器
- **ConfirmPicker** - 带确认/取消按钮的选择器（支持命令式调用）
- **CouplingPicker** - 联动多列选择器（父子级联）
- **ConfirmCouplingPicker** - 带确认/取消按钮的联动选择器（支持命令式调用）

## 使用

```jsx
import { Picker, ConfirmPicker, CouplingPicker, ConfirmCouplingPicker } from 'react-mgm'
```

## API

### Picker

基础多列滚动选择器。

#### Props

| 属性 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| datas | array | 是 | 数据源，格式为 `[[{ value, text }], [{ value, text }]]`，数组中的每个子数组代表一列 |
| values | array | 是 | 当前选中的值数组，如 `['Mr.', 'Micheal', 'Jordan']` |
| itemHeight | number | 否 | 每个选项的高度（px），默认 `36` |
| onChange | function | 是 | 选择变更回调，参数为新的 `values` 数组 |
| renderOption | function | 否 | 自定义选项渲染函数，参数为 `(dataIndex, option)`，默认渲染 `option.text` |

#### 默认值

| 属性 | 默认值 |
| --- | --- |
| itemHeight | `36` |
| renderOption | `(dataIndex, option) => option.text` |

---

### ConfirmPicker

带确认/取消按钮的选择器，内嵌在弹窗中使用。

#### Props

| 属性 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| title | string | 否 | 弹窗标题 |
| datas | array | 是 | 数据源，格式同 Picker |
| values | array | 是 | 当前选中的值数组 |
| itemHeight | number | 否 | 每个选项的高度（px），默认 `32` |
| renderOption | function | 否 | 自定义选项渲染函数 |
| onConfirm | function | 是 | 点击确定按钮的回调，参数为选中的 `values` 数组 |
| onCancel | function | 是 | 点击取消按钮的回调 |

#### 默认值

| 属性 | 默认值 |
| --- | --- |
| itemHeight | `32` |
| onConfirm | `_.noop`（空函数） |
| onCancel | `_.noop`（空函数） |

#### 静态方法

| 方法 | 说明 |
| --- | --- |
| ConfirmPicker.render(props) | 命令式调用，弹出选择器，返回 Promise。确认时 resolve 选中的 values，取消/关闭时 reject |
| ConfirmPicker.hide() | 隐藏已弹出的选择器 |

---

### CouplingPicker

联动多列选择器，支持父子级联关系。

#### Props

| 属性 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| datas | array | 是 | 联动数据源，格式为 `[{ value, text, children: [{ value, text, children: [...] }] }]`，最多支持三级联动 |
| values | array | 是 | 当前选中的值数组 |
| itemHeight | number | 否 | 每个选项的高度（px），默认 `36` |
| onChange | function | 是 | 选择变更回调，参数为新的 `values` 数组 |
| renderOption | function | 否 | 自定义选项渲染函数 |

#### 默认值

| 属性 | 默认值 |
| --- | --- |
| itemHeight | `36` |
| renderOption | `(dataIndex, option) => option.text` |

---

### ConfirmCouplingPicker

带确认/取消按钮的联动选择器，内嵌在弹窗中使用。

#### Props

| 属性 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| title | string | 否 | 弹窗标题 |
| datas | array | 是 | 联动数据源，格式同 CouplingPicker |
| values | array | 是 | 当前选中的值数组 |
| itemHeight | number | 否 | 每个选项的高度（px），默认 `32` |
| renderOption | function | 否 | 自定义选项渲染函数 |
| onConfirm | function | 是 | 点击确定按钮的回调，参数为选中的 `values` 数组 |
| onCancel | function | 是 | 点击取消按钮的回调 |

#### 默认值

| 属性 | 默认值 |
| --- | --- |
| itemHeight | `32` |
| onConfirm | `_.noop`（空函数） |
| onCancel | `_.noop`（空函数） |

#### 静态方法

| 方法 | 说明 |
| --- | --- |
| ConfirmCouplingPicker.render(props) | 命令式调用，弹出联动选择器，返回 Promise。确认时 resolve 选中的 values，取消/关闭时 reject |
| ConfirmCouplingPicker.hide() | 隐藏已弹出的联动选择器 |

## 示例

### Picker 基础用法

```jsx
import React, { useState } from 'react'
import { Picker } from 'react-mgm'

function PickerDemo() {
  const [values, setValues] = useState(['Mr.', 'Micheal', 'Jordan'])
  const datas = [
    [
      { value: 'Mr.', text: 'Mr.' },
      { value: 'Mrs.', text: 'Mrs.' },
      { value: 'Ms.', text: 'Ms.' },
      { value: 'Dr.', text: 'Dr.' }
    ],
    [
      { value: 'John', text: 'John' },
      { value: 'Micheal', text: 'Micheal' },
      { value: 'Elizabeth', text: 'Elizabeth' }
    ],
    [
      { value: 'Lennon', text: 'Lennon' },
      { value: 'Jackson', text: 'Jackson' },
      { value: 'Jordan', text: 'Jordan' }
    ]
  ]

  const handleChange = (values) => {
    setValues(values)
  }

  return (
    <Picker
      datas={datas}
      values={values}
      onChange={handleChange}
    />
  )
}
```

### ConfirmPicker 命令式调用

```jsx
import { ConfirmPicker } from 'react-mgm'

// 弹出选择器
ConfirmPicker.render({
  datas: [
    [{ value: 'A', text: '选项A' }, { value: 'B', text: '选项B' }]
  ],
  values: ['A']
}).then(values => {
  console.log('选中的值：', values)
}).catch(() => {
  console.log('取消选择')
})

// 手动关闭
ConfirmPicker.hide()
```

### CouplingPicker 联动选择

```jsx
import React, { useState } from 'react'
import { CouplingPicker } from 'react-mgm'

function CouplingPickerDemo() {
  const [values, setValues] = useState(['T7936', 'S11186', '777777'])
  const datas = [
    {
      value: 'T7936',
      text: '喵喵总仓',
      children: [
        {
          value: 'S11186',
          text: '复制报价单',
          children: [
            { value: '2222222', text: '222222' },
            { value: '777777', text: '777777' }
          ]
        }
      ]
    }
  ]

  const handleChange = (values) => {
    setValues(values)
  }

  return (
    <CouplingPicker
      datas={datas}
      values={values}
      onChange={handleChange}
    />
  )
}
```

### ConfirmCouplingPicker 命令式调用

```jsx
import { ConfirmCouplingPicker } from 'react-mgm'

ConfirmCouplingPicker.render({
  datas: [
    {
      value: 'T7936',
      text: '喵喵总仓',
      children: [
        {
          value: 'S11186',
          text: '复制报价单',
          children: [
            { value: '2222222', text: '222222' },
            { value: '777777', text: '777777' }
          ]
        }
      ]
    }
  ],
  values: ['T7936', 'S11186', '777777']
}).then(values => {
  console.log('选中的值：', values)
}).catch(() => {
  console.log('取消选择')
})
```

## 注意事项

- `datas` 中的每个选项必须包含 `value` 和 `text` 字段。
- Picker 默认显示 6 个选项的高度（`itemHeight * 6`）。
- `renderOption` 的第一个参数 `dataIndex` 是列的索引，可用于对不同列进行差异化渲染。
- CouplingPicker 最多支持三级联动，数据结构中通过 `children` 嵌套子级选项。
- ConfirmPicker 和 ConfirmCouplingPicker 使用 `LayoutRoot` + `Popup` 从底部弹出，内部会自行管理弹窗的显示和隐藏。
- `ConfirmPicker.render()` 和 `ConfirmCouplingPicker.render()` 返回 Promise，确认时 resolve，取消或关闭时 reject。
