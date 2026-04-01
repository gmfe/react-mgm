# SearchBar 搜索栏

## 简介

SearchBar 是一个搜索栏组件，基于 WeUI 样式。支持输入、清除、搜索、取消等操作，可选择显示搜索按钮或取消按钮。

> **已废弃**：该组件已不推荐使用，建议使用 `Search` 或 `SearchPage` 组件替代。

## 使用

```jsx
import SearchBar from 'react-mgm/search_bar'
```

## API

### Props

| 参数 | 说明 | 类型 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| value | 输入框的值 | string | 是 | - |
| onChange | 输入框值变化回调 | function | 是 | - |
| placeholder | 占位文本 | string | - | - |
| defaultFocus | 是否默认聚焦 | boolean | - | `false` |
| id | 输入框 id | string | - | 自动生成 |
| onFocus | 聚焦回调 | function | - | `_.noop` |
| onBlur | 失焦回调 | function | - | `_.noop` |
| onOK | 点击搜索/确认按钮回调 | function | - | `_.noop` |
| onCancel | 点击取消按钮回调 | function | - | `_.noop` |
| onClear | 点击清除按钮回调 | function | - | `_.noop` |
| OKBtn | 是否显示搜索确认按钮，传 `true` 显示"搜索"，传 string 则替换按钮文案 | oneOfType(boolean, string) | - | `false` |

## 示例

### 基本用法（取消按钮模式）

```jsx
import React, { useState } from 'react'

function Demo() {
  const [value, setValue] = useState('')

  const handleChange = (value) => {
    setValue(value)
  }

  return (
    <SearchBar
      placeholder='搜索商品'
      value={value}
      onChange={handleChange}
      onOK={() => console.log('ok')}
      onCancel={() => console.log('cancel')}
    />
  )
}
```

### 搜索按钮模式

```jsx
<SearchBar
  placeholder='搜索商品'
  value={value}
  onChange={handleChange}
  OKBtn
  defaultFocus
/>
```

### 自定义按钮文案

```jsx
<SearchBar
  value={value}
  onChange={handleChange}
  OKBtn='查询'
/>
```

## 注意事项

- 该组件已标记为废弃（Deprecated），控制台会输出警告，建议使用 `Search` 或 `SearchPage` 代替。
- OKBtn 为 `true` 时显示"搜索"按钮（没有取消功能），为 `false` 时显示"取消"按钮。
- OKBtn 传入字符串时，显示为自定义文案的确认按钮。
- blur 事件有 500ms 延迟处理，用于避免 OK 按钮在 blur 后消失导致无法点击。
