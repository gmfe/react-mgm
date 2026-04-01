# Square

## 简介

正方形布局组件，用于在任意宽度的容器内创建一个正方形的可交互区域。内部通过 CSS 实现宽高相等的效果，确保内容始终呈正方形展示。

## 使用

```jsx
import React from 'react'
import Square from 'react-mgm/square'

const App = () => {
  return (
    <div style={{ width: '50%' }}>
      <Square className='bg-white'>
        <img src='https://example.com/photo.jpg' style={{ width: '100%', height: '100%' }} alt=''/>
      </Square>
    </div>
  )
}
```

## API

### Props

| 参数 | 说明 | 类型 | 必填 | 默认值 |
|------|------|------|------|--------|
| className | 自定义类名，作用于内部 `div` 元素 | string | 否 | - |
| children | 子元素内容 | node | 否 | - |

> 组件支持透传所有原生 `div` 属性（如 `style`、`onClick` 等）。

## 示例

```jsx
import React from 'react'
import Square from 'react-mgm/square'

const Demo = () => {
  return (
    <div style={{ width: '50%' }}>
      <Square className='bg-white'>
        <img src='' style={{ width: '100%', height: '100%' }} alt=''/>
      </Square>
    </div>
  )
}
```

## 注意事项

- 组件渲染两层 `div` 结构：外层 `.square` 用于控制正方形比例，内层 `.square-inner` 用于承载内容和自定义样式。
- 正方形的大小由父容器的宽度决定，内层元素需要设置 `width: 100%` 和 `height: 100%` 以填满正方形区域。
- 可以通过 `className` 属性为内部元素添加自定义样式。
