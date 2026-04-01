# LayoutRoot

## 简介

全局布局根节点组件，用于统一管理各类浮层的挂载和层级关系。内部维护了一个状态树，按照固定层级顺序渲染各类浮层组件（内层浮层、弹出层、模态框、选择器、提示、进度条）。提供静态方法以命令式方式控制浮层的显示和隐藏。

## 使用

将 `LayoutRoot` 放置在应用根节点的最外层：

```jsx
import React from 'react'
import LayoutRoot from 'react-mgm/layout_root'

const App = () => {
  return (
    <div>
      {/* 应用内容 */}
      <LayoutRoot />
    </div>
  )
}
```

## API

### 常量

`LayoutRoot.TYPE` 定义了浮层类型的枚举值：

| 常量 | 值 | 说明 |
|------|------|------|
| TYPE.INNERLAYER | `'innerLayer'` | 内层浮层 |
| TYPE.POPUP | `'popup'` | 弹出层 |
| TYPE.MODAL | `'modal'` | 模态框 |
| TYPE.PICKER | `'picker'` | 选择器 |
| TYPE.TOAST | `'toast'` | 提示信息 |
| TYPE.NPROGRESS | `'nprogress'` | 顶部进度条 |

### 静态方法

| 方法 | 说明 | 参数 |
|------|------|------|
| LayoutRoot.setComponent(type, component) | 设置指定类型的浮层组件。如果该类型已有组件会先移除再设置 | `type`: 浮层类型（`TYPE` 枚举值），`component`: React 元素 |
| LayoutRoot.removeComponent(type) | 移除指定类型的浮层组件 | `type`: 浮层类型（`TYPE` 枚举值） |
| LayoutRoot.renderWith(type, component) | 渲染浮层，同时向浏览器 history 推入状态，并监听 `popstate` 事件（用户按返回键时自动关闭） | `type`: 浮层类型，`component`: React 元素 |
| LayoutRoot.hideWith(type) | 隐藏浮层，移除组件并回退浏览器历史记录（`history.go(-1)`） | `type`: 浮层类型 |

## 示例

### 手动控制浮层

```jsx
import LayoutRoot from 'react-mgm/layout_root'

// 显示弹出层
LayoutRoot.setComponent(LayoutRoot.TYPE.POPUP, <MyPopup />)

// 移除弹出层
LayoutRoot.removeComponent(LayoutRoot.TYPE.POPUP)
```

### 配合 history 管理浮层

```jsx
import LayoutRoot from 'react-mgm/layout_root'

// 显示模态框（支持返回键关闭）
LayoutRoot.renderWith(LayoutRoot.TYPE.MODAL, <MyModal />)

// 隐藏模态框（回退历史记录）
LayoutRoot.hideWith(LayoutRoot.TYPE.MODAL)
```

## 注意事项

- `LayoutRoot` 必须在应用中挂载后，静态方法才能正常工作，否则会在控制台输出警告 "LayoutRoot is uninitialized"。
- 浮层有固定的层级顺序（从底到顶）：innerLayer < popup < modal < picker < toast < nprogress。
- `renderWith` 和 `hideWith` 方法会操作浏览器 `history`，适用于需要支持物理返回键关闭浮层的场景（如移动端）。
- `renderWith` 使用 `pushState` 推入状态，并监听 `popstate` 事件。当用户按返回键时，会检查 history stack 中是否还有更高级别的浮层，如果有则不关闭当前浮层。
- `hideWith` 调用 `history.go(-1)` 来回退历史记录，触发 `popstate` 事件从而自动执行浮层清理逻辑。
