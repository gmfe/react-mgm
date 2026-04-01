# Mask 遮罩层

## 简介

Mask 遮罩层组件，用于在弹出层、对话框等组件下方显示半透明遮罩，防止用户操作底层内容。通常作为内部组件被 Dialog、Popup、Toast 等组件使用，也可以单独使用。

## 使用

```jsx
import React, { useState } from 'react'
import Mask from 'react-mgm'
```

```jsx
<Mask show={visible} opacity={0.5} onClick={handleClick} />
```

## API

### Props

| 属性 | 类型 | 必填 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| show | boolean | - | `false` | 是否显示遮罩层 |
| opacity | number | - | `0.5` | 遮罩层透明度，取值范围 0 ~ 1 |

## 示例

### 基本用法

```jsx
function Demo() {
  const [show, setShow] = useState(false)

  return (
    <div>
      <button onClick={() => setShow(true)}>显示遮罩</button>
      <Mask
        show={show}
        onClick={() => setShow(false)}
      />
    </div>
  )
}
```

### 自定义透明度

```jsx
<Mask show={visible} opacity={0.3} />
```

### 低透明度遮罩（几乎不可见）

```jsx
// 常用于 Toast loading 场景，防止用户误触但不完全遮挡
<Mask show={visible} opacity={0.01} />
```

## 注意事项

- 遮罩层默认不会显示，需要通过 `show` 属性控制。
- 当 `show` 为 `false` 时，组件返回 `null`，不会渲染任何 DOM。
- 遮罩层可以通过 `onClick` 事件处理点击关闭逻辑。
- 支持通过 `className` 和 `style` 属性自定义样式。
