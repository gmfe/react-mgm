# CursorFix

## 简介

光标偏移修复组件。在移动端浏览器中，某些元素点击时光标会偏移飘动。该组件通过在点击时先调用 `preventDefault` 并重新 `focus` 来修复此问题。

## 使用

```jsx
import React from 'react'
import CursorFix from 'react-mgm/cursor_fix'

const App = () => {
  return (
    <div>
      <CursorFix
        component='input'
        type='text'
        className='weui-input border'
        name='name'
        onClick={() => console.log('click')}
      />
    </div>
  )
}
```

## API

### Props

| 参数 | 说明 | 类型 | 必填 | 默认值 |
|------|------|------|------|--------|
| component | 要渲染的 HTML 标签名或 React 组件 | string | 是 | - |

> 组件支持透传所有其他属性（如 `type`、`className`、`name`、`onClick`、`placeholder` 等）到目标元素。

## 示例

```jsx
import React from 'react'
import CursorFix from 'react-mgm/cursor_fix'

const Demo = () => {
  return (
    <div>
      <CursorFix
        component='input'
        type='text'
        className='weui-input border'
        name='name'
        onClick={() => console.log('click')}
      />
    </div>
  )
}
```

## 注意事项

- `component` 属性为必填项，用于指定要渲染的 HTML 标签（如 `'input'`、`'textarea'`）或 React 组件。
- 组件内部会拦截 `onClick` 事件：先调用 `preventDefault()` 阻止默认行为，再调用 `focus()` 使目标元素获取焦点，最后执行用户传入的 `onClick` 回调。
- 所有其他 props 会直接透传到目标组件上。
