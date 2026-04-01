# List 列表

## 简介

List 列表选择组件，支持单选和多选模式。数据项包含 `value` 和 `text` 字段，支持分组展示、自定义渲染和禁用项。内置滚动到指定项的功能。

## 使用

```jsx
import List from 'react-mgm/lib/component/list'
```

## API

### Props

| 参数 | 说明 | 类型 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| data | 列表数据，每项包含 `value` 和 `text` 字段；分组模式下为 `[{ label, children: [{ value, text }] }]` | array | 是 | - |
| selected | 当前选中的值，单选时为单个值，多选时为数组 | any | 否 | - |
| onSelect | 选中回调函数，单选时参数为选中项的 value，多选时参数为 value 数组 | function | 否 | `() => {}`（空函数） |
| multiple | 是否为多选模式 | boolean | 否 | `false` |
| renderItem | 自定义列表项渲染函数，接收 `item` 参数，默认渲染 `item.text` | function | 否 | `item => item.text` |
| isGroupList | 是否为分组列表 | boolean | 否 | - |

### 实例方法

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| apiDoScrollToLabel | 滚动到指定分组标签位置 | label（分组标签值） |
| apiDoScrollToValue | 滚动到指定数据项位置 | value（数据项 value 值） |

## 示例

### 单选列表

```jsx
import React, { useState } from 'react'
import List from 'react-mgm/lib/component/list'

const data = [
  { value: '1', text: '选项一' },
  { value: '2', text: '选项二' },
  { value: '3', text: '选项三' }
]

function ListWrap() {
  const [selected, setSelected] = useState('1')

  return (
    <List
      data={data}
      selected={selected}
      onSelect={setSelected}
      style={{ height: '300px', overflow: 'auto' }}
    />
  )
}

export default ListWrap
```

### 多选列表

```jsx
import React, { useState } from 'react'
import List from 'react-mgm/lib/component/list'

const data = [
  { value: '1', text: '选项一' },
  { value: '2', text: '选项二' },
  { value: '3', text: '选项三' }
]

function ListWrap() {
  const [selected, setSelected] = useState(['1'])

  return (
    <List
      data={data}
      selected={selected}
      onSelect={setSelected}
      multiple
    />
  )
}

export default ListWrap
```

### 分组列表

```jsx
import React from 'react'
import List from 'react-mgm/lib/component/list'

const groupData = [
  {
    label: '分组一',
    children: [
      { value: '1', text: '选项一' },
      { value: '2', text: '选项二' }
    ]
  },
  {
    label: '分组二',
    children: [
      { value: '3', text: '选项三' },
      { value: '4', text: '选项四' }
    ]
  }
]

function ListWrap() {
  return (
    <List
      data={groupData}
      isGroupList
      onSelect={(value) => console.log(value)}
    />
  )
}

export default ListWrap
```

## 注意事项

- `data` 中每项必须包含 `value` 和 `text` 字段，`value` 用于选中标识，`text` 用于默认显示。
- 单选模式下，`selected` 为单个值，`onSelect` 回调参数为单个 value；多选模式下，`selected` 为数组，`onSelect` 回调参数为 value 数组。
- 非分组模式下（`isGroupList` 为 `false` 或不传），数据会自动包装为单分组形式。
- 数据项支持 `disabled` 字段，设为 `true` 时该项不可点击且显示为禁用样式。
- 通过 `ref` 调用 `apiDoScrollToLabel` 或 `apiDoScrollToValue` 可实现滚动定位到指定项。
