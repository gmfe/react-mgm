# Cell 列表单元格

单元格组件，用于构建列表页面。包含多个子组件，支持基本单元格、带箭头访问、带侧滑操作、带开关等样式。

## 使用

```jsx
import { Cells, CellsTitle, CellsTips, Cell, CellHeader, CellBody, CellFooter, CellSwipe, CellSwitch } from 'react-mgm'
```

## API

### Cells

单元格容器。

| 属性 | 类型 | 必填 | 默认值 | 说明 |
|------|------|------|--------|------|
| checkbox | boolean | - | false | 是否为复选框样式 |
| className | string | - | - | 自定义类名 |
| children | node | - | - | 子元素 |

### CellsTitle

单元格组标题。

| 属性 | 类型 | 必填 | 默认值 | 说明 |
|------|------|------|--------|------|
| className | string | - | - | 自定义类名 |
| children | node | - | - | 子元素 |

### CellsTips

单元格组提示文字。

| 属性 | 类型 | 必填 | 默认值 | 说明 |
|------|------|------|--------|------|
| className | string | - | - | 自定义类名 |
| children | node | - | - | 子元素 |

### Cell

单个单元格容器，会根据 `href` 或 `htmlFor` 属性自动渲染为 `a` 或 `label` 标签，否则渲染为 `div`。

| 属性 | 类型 | 必填 | 默认值 | 说明 |
|------|------|------|--------|------|
| access | boolean | - | false | 是否显示右侧箭头（可点击状态） |
| link | boolean | - | false | 是否为链接样式 |
| label | boolean | - | false | 是否为标签样式 |
| href | string | - | - | 链接地址，设置后渲染为 `a` 标签 |
| htmlFor | string | - | - | label 关联的 id，设置后渲染为 `label` 标签 |
| className | string | - | - | 自定义类名 |
| children | node | - | - | 子元素 |

### CellHeader

单元格头部区域（左侧内容）。

| 属性 | 类型 | 必填 | 默认值 | 说明 |
|------|------|------|--------|------|
| primary | boolean | - | false | 是否为主要内容 |
| className | string | - | - | 自定义类名 |
| children | node | - | - | 子元素 |

### CellBody

单元格主体区域（中间内容）。

| 属性 | 类型 | 必填 | 默认值 | 说明 |
|------|------|------|--------|------|
| primary | boolean | - | false | 是否为主要内容 |
| className | string | - | - | 自定义类名 |
| children | node | - | - | 子元素 |

### CellFooter

单元格尾部区域（右侧内容）。

| 属性 | 类型 | 必填 | 默认值 | 说明 |
|------|------|------|--------|------|
| primary | boolean | - | false | 是否为主要内容 |
| className | string | - | - | 自定义类名 |
| children | node | - | - | 子元素 |

### CellSwipe

支持左滑操作的单元格。

| 属性 | 类型 | 必填 | 默认值 | 说明 |
|------|------|------|--------|------|
| bodyText | node | 是 | - | 主体文字内容 |
| footerText | node | - | - | 尾部辅助文字 |
| right | array | - | - | 右侧滑动按钮数组，每项包含 `text`（按钮文字）、`onClick`（点击回调，参数为 close 函数）、`style`（按钮样式） |
| onClick | function | - | - | 点击单元格的回调 |

### CellSwitch

带开关的单元格。

| 属性 | 类型 | 必填 | 默认值 | 说明 |
|------|------|------|--------|------|
| bodyText | string | 是 | - | 主体文字内容 |
| checked | boolean | 是 | - | 开关是否选中 |
| onChange | function | 是 | - | 开关状态改变回调 |
| bodyProps | object | - | {} | 传递给主体内容区域的其他属性 |
| className | string | - | - | 自定义类名 |

## 示例

### 基本单元格

```jsx
import React from 'react'
import { CellsTitle, Cells, Cell, CellBody, CellFooter, CellHeader } from 'react-mgm'

class Demo extends React.Component {
  render () {
    return (
      <div>
        <CellsTitle>列表标题</CellsTitle>
        <Cells>
          <Cell>
            <CellBody>正文</CellBody>
          </Cell>
          <Cell>
            <CellBody>正文</CellBody>
            <CellFooter>辅助文字</CellFooter>
          </Cell>
          <Cell>
            <CellHeader>图标</CellHeader>
            <CellBody>带图标的单元格</CellBody>
            <CellFooter>说明文字</CellFooter>
          </Cell>
          <Cell access onClick={() => alert('clicked')}>
            <CellBody>点击可跳转</CellBody>
            <CellFooter />
          </Cell>
        </Cells>
        <CellsTips>底部提示信息</CellsTips>
      </div>
    )
  }
}
```

### 左滑操作单元格

```jsx
import React from 'react'
import { CellsTitle, Cells, CellSwipe } from 'react-mgm'

class Demo extends React.Component {
  render () {
    return (
      <div>
        <CellsTitle>左滑操作</CellsTitle>
        <Cells>
          <CellSwipe
            bodyText='可左滑的单元格'
            footerText='辅助说明'
            onClick={() => alert('clicked')}
            right={[
              {
                text: '删除',
                onClick: (close) => { alert('删除'); close() },
                style: { background: 'red' }
              },
              {
                text: '编辑',
                onClick: (close) => { alert('编辑'); close() },
                style: { background: 'blue' }
              }
            ]}
          />
        </Cells>
      </div>
    )
  }
}
```

## 注意事项

- `Cell` 组件会根据传入的 `href` 或 `htmlFor` 自动决定渲染为 `a` 或 `label` 标签
- `CellSwipe` 的 `right` 按钮数组中，`onClick` 回调会接收一个 `close` 函数，调用后可关闭已展开的滑动按钮
- `CellSwipe` 内部会监听 `.page` 容器的 `touchstart` 事件，点击非按钮区域时自动收起展开的按钮
- `CellSwitch` 的 `onChange` 事件对应 checkbox 的 `change` 事件
