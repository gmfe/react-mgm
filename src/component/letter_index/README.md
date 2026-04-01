# LetterIndex 字母索引

字母索引列表组件，支持单选和多选两种模式。数据按照首字母自动分组，右侧提供 A-Z 和 # 的字母索引导航，点击或滑动可快速定位到对应分组。

## 使用

```jsx
import { LetterIndex, LetterIndexMultiple } from 'react-mgm'
```

## API

### LetterIndex

单选字母索引列表。

| 属性 | 类型 | 必填 | 默认值 | 说明 |
|------|------|------|--------|------|
| data | array | 是 | - | 数据数组，每项需包含 `value` 和 `text` 字段 |
| selected | any | - | - | 当前选中的值 |
| onSelect | function | 是 | - | 选中回调，参数为选中项 |
| getFirstLetter | function | 是 | - | 获取文本首拼音字母的函数，参数为文本字符串，返回首字母字符 |
| renderItem | function | - | `item => item.text` | 自定义列表项渲染函数，参数为数据项 |
| className | string | - | - | 自定义类名 |
| style | object | - | - | 自定义样式 |

### LetterIndexMultiple

多选字母索引列表，底部提供取消和确定按钮。

| 属性 | 类型 | 必填 | 默认值 | 说明 |
|------|------|------|--------|------|
| data | array | 是 | - | 数据数组，每项需包含 `value` 和 `text` 字段 |
| selected | array | - | - | 已选中的值数组 |
| onSelect | function | 是 | - | 确认选择回调，参数为选中值数组 |
| onCancel | function | 是 | - | 取消选择回调 |
| getFirstLetter | function | 是 | - | 获取文本首拼音字母的函数，参数为文本字符串，返回首字母字符 |
| renderItem | function | - | `item => item.text` | 自定义列表项渲染函数，参数为数据项 |
| className | string | - | - | 自定义类名 |
| style | object | - | - | 自定义样式 |

## 示例

### 单选模式

```jsx
import React, { useState } from 'react'
import { LetterIndex } from 'react-mgm'

// 获取首字母的工具函数，需自行引入或实现
const getFirstLetter = (text) => {
  // 例如使用 pinyin 库获取首字母
  return pinyin(text)[0][0].toUpperCase()
}

const data = [
  { value: 1, text: '北京' },
  { value: 2, text: '上海' },
  { value: 3, text: '广州' },
  { value: 4, text: '深圳' }
]

function Demo() {
  const [selected, setSelected] = useState(null)

  return (
    <div style={{ height: '500px' }}>
      <LetterIndex
        data={data}
        selected={selected}
        onSelect={(item) => setSelected(item)}
        getFirstLetter={getFirstLetter}
      />
    </div>
  )
}
```

### 多选模式

```jsx
import React from 'react'
import { LetterIndexMultiple } from 'react-mgm'

function Demo() {
  const handleSelect = (selected) => {
    console.log('选中的值:', selected)
  }

  const handleCancel = () => {
    console.log('取消选择')
  }

  return (
    <div style={{ height: '500px' }}>
      <LetterIndexMultiple
        data={data}
        onSelect={handleSelect}
        onCancel={handleCancel}
        getFirstLetter={getFirstLetter}
      />
    </div>
  )
}
```

## 注意事项

- `data` 数组中每项必须包含 `value` 和 `text` 字段，`text` 用于显示和获取首字母
- `getFirstLetter` 函数需要外部提供，组件内部不包含拼音转换逻辑。可使用 `pinyin` 等第三方库实现
- 无法识别为 A-Z 字母的项会自动归类到 `#` 分组下
- 组件需要设置明确的高度，否则字母索引无法正常显示
- `LetterIndexMultiple` 的 `selected` 为受控属性，初始选中状态需通过该属性传入
