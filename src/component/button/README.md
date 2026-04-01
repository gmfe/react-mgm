# Button 按钮

## 简介

Button 是对原生按钮的封装，主要增加了 loading 状态支持。当点击事件的回调返回 Promise 时，按钮会自动进入 loading 状态，直到 Promise resolve 或 reject 后恢复。

## 使用

```jsx
import Button from 'react-mgm/button'
```

## API

### Props

| 参数 | 说明 | 类型 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| onClick | 点击事件回调，如果返回 Promise 则自动进入 loading 状态 | function | - | `_.noop` |
| className | 自定义类名 | string | - | - |
| children | 按钮内容 | node | - | - |

> 其他原生 button 标签的属性均可透传使用。

## 示例

### 基本用法

点击按钮后自动 loading，2 秒后恢复：

```jsx
class Demo extends React.Component {
  handleClick () {
    return new Promise(resolve => setTimeout(() => resolve('done'), 2000))
  }

  render () {
    return (
      <Button className='weui-btn weui-btn_default' onClick={this.handleClick}>
        点击加载
      </Button>
    )
  }
}
```

## 注意事项

- onClick 回调如果返回 Promise，按钮会自动展示 loading 图标并禁止重复点击。
- loading 状态下，按钮会自动添加 `weui-btn_loading` 类名。
- loading 状态下，再次点击按钮不会触发 onClick 回调。
