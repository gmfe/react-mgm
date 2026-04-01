# Divider 分割线

## 简介

Divider 分割线组件，用于在内容区域之间添加带文字说明的分隔线。文字居中显示，两侧用水平线连接。

## 使用

```jsx
import Divider from 'react-mgm/lib/component/divider'
```

## API

### Props

| 参数 | 说明 | 类型 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| children | 分割线中间显示的文字内容，支持字符串或自定义 React 元素 | node | 否 | - |

## 示例

```jsx
import React from 'react'
import Divider from 'react-mgm/lib/component/divider'

class DividerWrap extends React.Component {
  render() {
    return (
      <div>
        {/* 字符串内容 */}
        <Divider>分隔文字</Divider>

        {/* 自定义元素 */}
        <Divider>
          <span style={{ color: 'red' }}>自定义内容</span>
        </Divider>
      </div>
    )
  }
}

export default DividerWrap
```

## 注意事项

- 当 `children` 为字符串时，会使用 `<h4>` 标签包裹渲染。
- 当 `children` 为 React 元素时，直接渲染该元素。
- Divider 组件无 PropTypes 定义，所有属性均通过 `props.children` 获取。
