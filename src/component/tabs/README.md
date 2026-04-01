# Tabs 选项卡

## 简介

Tabs 选项卡组件，用于在不同内容区域之间进行切换。传入一个字符串数组和当前激活的索引，点击即可触发切换回调。

## 使用

```jsx
import Tabs from 'react-mgm/lib/component/tabs'
```

## API

### Props

| 参数 | 说明 | 类型 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| tabIndex | 当前激活的选项卡索引 | number | 是 | - |
| list | 选项卡标题列表 | array | 是 | - |
| onChange | 选项卡切换回调函数，参数为当前点击的索引 | function | 否 | - |

## 示例

```jsx
import React, { useState } from 'react'
import Tabs from 'react-mgm/lib/component/tabs'

function TabsWrap() {
  const [tabIndex, setTabIndex] = useState(1)

  return (
    <Tabs
      tabIndex={tabIndex}
      list={['选项一', '选项二', '选项三']}
      onChange={setTabIndex}
    />
  )
}

export default TabsWrap
```

## 注意事项

- `list` 中的每一项为字符串，渲染为选项卡的标题文字。
- 需要通过外部控制 `tabIndex` 状态来管理当前选中的选项卡。
- `onChange` 回调参数为被点击的选项卡索引（从 0 开始）。
