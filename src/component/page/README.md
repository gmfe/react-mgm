# Page 页面容器

## 简介

Page 页面容器组件，用于构建移动端标准页面布局。支持顶部 Header、底部 Tabbar 和 Bottom 区域的灵活配置，内容区域自动填充剩余空间并支持滚动。

## 使用

```jsx
import Page from 'react-mgm/lib/component/page'
```

## API

### Props

| 参数 | 说明 | 类型 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| children | 页面主体内容 | node | 否 | - |
| header | 顶部内容区域（如导航栏） | node | 否 | - |
| tabbar | 底部 Tabbar 区域 | node | 否 | - |
| bottom | 底部内容区域（在 Tabbar 上方） | node | 否 | - |
| white | 是否使用白色背景 | boolean | 否 | - |
| className | 容器自定义类名 | string | 否 | - |
| pageClassName | 内容区域自定义类名 | string | 否 | - |

## 示例

```jsx
import React from 'react'
import Page from 'react-mgm/lib/component/page'

function PageWrap() {
  return (
    <Page
      header={<div>Header</div>}
      tabbar={<div>Tabbar</div>}
      bottom={<div>Bottom</div>}
    >
      <div>页面内容</div>
    </Page>
  )
}

export default PageWrap
```

## 注意事项

- Page 基于 Flex 纵向布局（`column`），内容区域自动填充 `flex: 1` 剩余空间。
- 页面布局顺序从上到下依次为：`header` -> 内容区域 -> `bottom` -> `tabbar`。
- 内容区域默认拥有 `page-content` 类名，可直接用于样式覆盖。
- `white` 属性会为容器添加 `page-white` 类名，用于控制白色背景主题。
