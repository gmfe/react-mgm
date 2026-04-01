# Textarea 多行文本框

## 简介

Textarea 是对原生 textarea 的封装，解决了原生 textarea 不能随内容自动变高的问题。通过使用 `pre` 元素作为高度参考，实现文本框高度随内容自适应。

## 使用

```jsx
import Textarea from 'react-mgm/textarea'
```

## API

### Props

| 参数 | 说明 | 类型 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| wrapProps | 包裹层 div 的属性 | object | - | `{}` |
| value | 文本框的值 | string | - | - |
| className | 自定义 textarea 类名 | string | - | - |

> 其他原生 textarea 标签的属性均可透传使用。

## 示例

### 自适应高度

```jsx
class Demo extends React.Component {
  state = { value: '第一行\n第二行' }

  handleChange = (event) => {
    this.setState({ value: event.target.value })
  }

  render () {
    return (
      <Textarea
        value={this.state.value}
        onChange={this.handleChange}
      />
    )
  }
}
```

### 固定最大高度

```jsx
<Textarea
  value={this.state.value}
  onChange={this.handleChange}
  wrapProps={{ style: { maxHeight: '6.4em' } }}
/>
```

## 注意事项

- 组件默认会随内容自动撑高，如需限制高度可通过 `wrapProps` 设置 `maxHeight`。
- 内部通过 `pre` 元素和 `textarea` 叠加实现高度自适应，`pre` 仅用于撑开容器高度。
