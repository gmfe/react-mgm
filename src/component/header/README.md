# Header 头部导航栏

## 简介

Header 头部导航栏组件，包含返回按钮、标题和右侧操作区域。适用于移动端页面的顶部导航场景。

## 使用

```jsx
import Header from 'react-mgm/lib/component/header'
```

## API

### Props

| 参数 | 说明 | 类型 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| title | 标题文字 | string | 否 | - |
| hideBack | 是否隐藏返回按钮 | boolean | 否 | - |
| onBack | 返回按钮点击回调 | function | 否 | `() => {}`（空函数） |
| right | 右侧自定义内容 | element | 否 | - |
| style | 自定义样式 | object | 否 | - |

## 示例

```jsx
import React, { useCallback } from 'react'
import Header from 'react-mgm/lib/component/header'

function HeaderWrap() {
  const handleBack = useCallback(() => {
    window.history.back()
  }, [])

  return (
    <div>
      <Header
        title="页面标题"
        onBack={handleBack}
        right={<span className="text-14">更多</span>}
      />
    </div>
  )
}

export default HeaderWrap
```

## 注意事项

- 默认高度为 45px，可通过 `style` 属性自定义高度。
- `hideBack` 设为 `true` 时隐藏左侧返回按钮，标题左侧会增加左内边距。
- `onBack` 默认为空函数（`_.noop`），使用时建议自行实现返回逻辑（如 `window.history.back()`）。
- `right` 接收 React 元素，用于放置右侧操作按钮等内容。
