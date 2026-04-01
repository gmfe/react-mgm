# Popup 弹出层

## 简介

Popup 弹出层组件，支持从左侧、右侧、底部三个方向弹出。可以嵌入到页面中作为子组件使用，也可以通过静态方法 `Popup.render()` 命令式调用。

## 使用

```jsx
import Popup from 'react-mgm'
```

### 声明式使用

```jsx
// 从左侧弹出
<Popup left show={visible} onHide={() => setVisible(false)}>
  <div>左侧弹出内容</div>
</Popup>

// 从底部弹出
<Popup bottom height="300px" show={visible} onHide={() => setVisible(false)}>
  <div>底部弹出内容</div>
</Popup>
```

### 命令式调用（静态方法）

```jsx
// 从左侧弹出
Popup.render({
  left: true,
  children: <div>弹出内容</div>
})

// 关闭
Popup.hide()
```

## API

### Props

| 属性 | 类型 | 必填 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| show | boolean | - | `false` | 是否显示 |
| onHide | function | - | - | 隐藏时的回调函数 |
| left | boolean | - | - | 是否从左侧弹出 |
| right | boolean | - | - | 是否从右侧弹出 |
| bottom | boolean | - | - | 是否从底部弹出 |
| width | string | - | - | 弹出层宽度，仅在 left/right 方向时生效 |
| height | string | - | - | 弹出层高度，仅在 bottom 方向时生效 |
| opacity | number | - | - | 遮罩层透明度 |
| useMask | boolean | - | `true` | 是否显示遮罩层 |
| isPickPopup | boolean | - | - | 内部属性，标识是否为 Picker 弹出层 |

### 静态方法

| 方法 | 参数 | 说明 |
| --- | --- | --- |
| Popup.render | `options: object` | 渲染弹出层，参数同 Props（无需传 show，默认为 true）。支持 `onHide` 回调，隐藏时会自动调用 |
| Popup.hide | - | 隐藏当前弹出层 |

## 示例

### 从左侧弹出

```jsx
class Demo extends React.Component {
  state = { show: false }

  render() {
    return (
      <div>
        <button onClick={() => this.setState({ show: true })}>打开左侧弹出层</button>
        <Popup left width="80%" show={this.state.show} onHide={() => this.setState({ show: false })}>
          <div>左侧弹出内容</div>
        </Popup>
      </div>
    )
  }
}
```

### 从底部弹出

```jsx
class Demo extends React.Component {
  state = { show: false }

  render() {
    return (
      <div>
        <button onClick={() => this.setState({ show: true })}>打开底部弹出层</button>
        <Popup bottom height="300px" opacity={0.8} show={this.state.show} onHide={() => this.setState({ show: false })}>
          <div>底部弹出内容</div>
        </Popup>
      </div>
    )
  }
}
```

### 静态方法调用

```jsx
// 打开弹出层
Popup.render({
  left: true,
  children: <div>调用静态方法弹出</div>
})

// 打开右侧弹出层
Popup.render({
  right: true,
  children: <div>右侧弹出内容</div>
})

// 关闭弹出层
Popup.hide()
```

## 注意事项

- `left`、`right`、`bottom` 三个方向属性互斥，同时设置时以第一个为准。
- 使用静态方法 `Popup.render()` 时无需传入 `show` 属性，内部默认为 `true`。
- 静态方法调用时可通过 `onHide` 回调在隐藏时执行自定义逻辑。
- 设置 `useMask={false}` 可以隐藏遮罩层。
- `isPickPopup` 为内部属性，供 Picker 等组件使用，一般不需要手动设置。
