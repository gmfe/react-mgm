# ScrollIntoView

## 简介

滚动到可视区域组件。包裹表单输入元素（如 `input`、`textarea`），当输入框获得焦点时，自动将输入框滚动到可视区域内，解决移动端键盘弹起遮挡输入框的问题。在 iPhone 上不做处理（iOS 浏览器会自动处理）。

## 使用

```jsx
import React from 'react'
import ScrollIntoView from 'react-mgm/scroll_into_view'

const App = () => {
  return (
    <ScrollIntoView>
      <input type='text' placeholder='聚焦时自动滚动到可视区域' />
    </ScrollIntoView>
  )
}
```

## API

### Props

| 参数 | 说明 | 类型 | 必填 | 默认值 |
|------|------|------|------|--------|
| children | 必须有且仅有一个子元素（通常是 `input` 或 `textarea`） | element | 是 | - |

## 示例

```jsx
import React from 'react'
import ScrollIntoView from 'react-mgm/scroll_into_view'

const Demo = () => {
  return (
    <div>
      {/* 大量内容撑高页面 */}
      <div style={{ height: 1000 }}>内容区域</div>

      <ScrollIntoView>
        <input
          type='text'
          placeholder='点击后页面会自动滚动使输入框可见'
          onFocus={() => console.log('focus')}
        />
      </ScrollIntoView>
    </div>
  )
}
```

## 注意事项

- `children` 必须有且仅有一个子元素组件，否则会在控制台输出错误提示。
- 组件会覆盖子元素的 `onFocus` 事件，如果子元素原本有 `onFocus` 处理函数，仍会被正常调用。
- 在 iPhone 设备上不执行滚动逻辑（iOS 浏览器自带焦点滚动行为）。
- 在非 iPhone 设备上，聚焦后延迟 500ms 执行滚动，以等待键盘弹起动画完成。
- 优先使用 `scrollIntoViewIfNeeded`，不支持时降级为 `scrollIntoView`。
