# Tooltip 提示气泡

轻量级提示气泡组件，用于显示辅助提示信息。通常与 Trigger 组件配合使用。

## 使用

```jsx
import Tooltip from 'react-mgm/lib/tooltip'
```

## API

### Props

| 属性 | 类型 | 必填 | 默认值 | 说明 |
|------|------|------|--------|------|
| placement | 'top' / 'bottom' / 'topLeft' / 'topRight' / 'bottomLeft' / 'bottomRight' | - | 'bottomRight' | 气泡出现的位置 |
| children | node | - | - | 气泡内容 |
| style | object | - | - | 自定义样式 |

## 示例

### 基本使用

```jsx
import React from 'react'
import Tooltip from 'react-mgm/lib/tooltip'
import Trigger from 'react-mgm/lib/trigger'

class Demo extends React.Component {
  render () {
    return (
      <Trigger
        component={<div />}
        popup={
          <Tooltip>
            这是一个提示信息
          </Tooltip>
        }
      >
        <button>悬浮查看提示</button>
      </Trigger>
    )
  }
}
```

### 不同位置

```jsx
import React from 'react'
import Tooltip from 'react-mgm/lib/tooltip'
import Trigger from 'react-mgm/lib/trigger'

class Demo extends React.Component {
  render () {
    return (
      <div>
        {/* 左下角 */}
        <Trigger component={<div />} popup={
          <Tooltip placement='bottomLeft'>bottomLeft 提示</Tooltip>
        }>
          <button>bottomLeft</button>
        </Trigger>

        {/* 右下角（默认） */}
        <Trigger component={<div />} right adjustX={20} popup={
          <Tooltip placement='bottomRight'>bottomRight 提示</Tooltip>
        }>
          <button>bottomRight</button>
        </Trigger>

        {/* 左上角 */}
        <Trigger component={<div />} top popup={
          <Tooltip placement='topLeft'>topLeft 提示</Tooltip>
        }>
          <button>topLeft</button>
        </Trigger>

        {/* 右上角 */}
        <Trigger component={<div />} top right adjustX={20} popup={
          <Tooltip placement='topRight'>topRight 提示</Tooltip>
        }>
          <button>topRight</button>
        </Trigger>
      </div>
    )
  }
}
```

### 悬停触发

```jsx
<Trigger
  component={<div />}
  type='hover'
  popup={
    <Tooltip placement='topLeft'>悬停显示的提示</Tooltip>
  }
>
  <button>悬停查看</button>
</Trigger>
```

## 注意事项

- Tooltip 通常需要与 Trigger 组件配合使用来控制显示和隐藏
- `placement` 属性需要与 Trigger 的 `right`、`top` 属性搭配使用才能正确定位
- 上方显示（`top`、`topLeft`、`topRight`）时，建议 Trigger 设置 `top` 属性
- 右对齐显示（`topRight`、`bottomRight`）时，建议 Trigger 设置 `right` 属性和 `adjustX` 偏移
- 气泡内容默认无固定宽度，可通过 `style` 设置宽度
