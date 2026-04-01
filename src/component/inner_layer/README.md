# InnerLayer

## 简介

内层浮层容器组件，用于在页面中渲染全屏内层内容。配合 `LayoutRoot` 实现浮层的挂载和卸载。提供静态方法 `render` 和 `hide`，支持命令式调用，无需在 JSX 中预先放置组件。

## 使用

### 声明式使用

```jsx
import React from 'react'
import InnerLayer from 'react-mgm/inner_layer'

const App = () => {
  return (
    <InnerLayer className='custom-layer'>
      <div>浮层内容</div>
    </InnerLayer>
  )
}
```

### 命令式使用（推荐）

```jsx
import InnerLayer from 'react-mgm/inner_layer'

// 显示浮层
InnerLayer.render({
  children: (
    <div>浮层内容</div>
  )
})

// 隐藏浮层
InnerLayer.hide()
```

## API

### Props

| 参数 | 说明 | 类型 | 必填 | 默认值 |
|------|------|------|------|--------|
| className | 自定义类名，默认包含 `inner-layer-container container-full` | string | 否 | - |
| children | 子元素内容 | node | 否 | - |

### 静态方法

| 方法 | 说明 | 参数 |
|------|------|------|
| InnerLayer.render(props) | 渲染内层浮层，等价于在 LayoutRoot 中挂载组件 | `props`: 传入 InnerLayer 的属性对象（`className`、`children` 等） |
| InnerLayer.hide() | 隐藏内层浮层，同时回退浏览器历史记录 | - |

## 示例

### 显示自定义浮层

```jsx
import InnerLayer from 'react-mgm/inner_layer'

const showLayer = () => {
  InnerLayer.render({
    children: (
      <div style={{ padding: 16 }}>
        <h2>提示</h2>
        <p>这是内层浮层内容</p>
      </div>
    )
  })
}

const hideLayer = () => {
  InnerLayer.hide()
}
```

## 注意事项

- 使用 `InnerLayer.render()` 和 `InnerLayer.hide()` 静态方法时，需要确保页面中已挂载 `LayoutRoot` 组件。
- `InnerLayer.render()` 内部会调用 `LayoutRoot.renderWith`，会向 `history` 推入一个状态，并监听 `popstate` 事件。
- `InnerLayer.hide()` 内部会调用 `LayoutRoot.hideWith`，移除浮层并调用 `history.go(-1)` 回退。
- 浮层的层级由 `LayoutRoot` 管理，层级顺序为：innerLayer < popup < modal < picker < toast < nprogress。
