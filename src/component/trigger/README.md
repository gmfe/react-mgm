# Trigger 触发器

触发器组件，用于控制弹出内容（popup）的显示与隐藏。支持点击、聚焦、悬停三种触发方式。

## 使用

```jsx
import Trigger from 'react-mgm/lib/trigger'
```

## API

### Props

| 属性 | 类型 | 必填 | 默认值 | 说明 |
|------|------|------|--------|------|
| type | 'focus' / 'click' / 'hover' | - | 'click' | 触发方式 |
| component | element | 是 | - | 触发器外层包裹组件 |
| popup | element | - | - | 弹出内容 |
| children | element | - | - | 触发器内部显示的元素 |
| right | boolean | - | false | 弹出内容是否右对齐 |
| top | boolean | - | false | 弹出内容是否显示在上方 |
| disabled | boolean | - | - | 是否禁用触发器 |
| mask | boolean | - | false | 是否显示遮罩层 |
| opacity | number | - | 0.5 | 遮罩层透明度 |
| timeout | number | - | - | 触发器自动隐藏的时间间隔（毫秒） |
| adjustX | number | - | - | 调整弹出内容 X 方向的偏移量（px） |

## 示例

### 基本点击触发

```jsx
import React from 'react'
import Trigger from 'react-mgm/lib/trigger'

function Demo () {
  const renderPopup = () => (
    <div style={{ width: '200px', padding: '10px', background: '#fff', border: '1px solid #ddd' }}>
      <div>弹出内容</div>
    </div>
  )

  return (
    <Trigger component={<div />} popup={renderPopup()}>
      <button>点击触发（默认）</button>
    </Trigger>
  )
}
```

### 带遮罩和超时自动关闭

```jsx
<Trigger
  component={<div />}
  mask
  timeout={2000}
  popup={<div>2秒后自动关闭</div>}
>
  <button>点击显示</button>
</Trigger>
```

### 右对齐弹出

```jsx
<Trigger
  component={<div />}
  right
  adjustX={20}
  popup={<div>右对齐弹出内容</div>}
>
  <button>右对齐</button>
</Trigger>
```

### 悬停触发

```jsx
<Trigger
  component={<div />}
  type='hover'
  popup={<div>悬停显示内容</div>}
>
  <button>悬停触发</button>
</Trigger>
```

## 注意事项

- `component` 属性为必填项，通常传入一个空的 `<div />` 作为包裹容器
- `type='click'` 模式下，点击触发器切换弹出内容的显示/隐藏，点击弹出内容内部不会关闭
- `type='hover'` 模式下，鼠标移入显示弹出内容，移出 500ms 后自动隐藏
- 点击页面非触发器区域时，弹出内容会自动关闭
- `disabled` 设为 `true` 时完全禁用触发器；设为 `false` 时启用
- `timeout` 设置后，弹出内容会在指定时间后自动隐藏
- `mask` 遮罩层仅在 `type` 为 `'click'` 或 `'focus'` 时生效，`hover` 模式下不显示遮罩
