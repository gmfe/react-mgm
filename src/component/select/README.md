# Select 选择器

## 简介

Select 是一个弹窗式选择器组件，支持两种使用方式：

1. **组件方式**：通过 `show` 控制显示/隐藏，展示为带遮罩层的弹窗列表。
2. **静态方法方式**：通过 `Select.render()` 调用，基于 Picker 组件弹出选择。

## 使用

```jsx
import Select from 'react-mgm/select'
```

## API

### Props

| 参数 | 说明 | 类型 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| show | 是否显示 | boolean | 是 | - |
| data | 选项数据，格式为 `[{value, text}]` | array | - | `[]` |
| value | 当前选中值 | any | - | `null` |
| title | 静态方法模式下的标题 | string | - | `'选择'` |
| onChange | 选中项变化回调，参数为选中项的 value | function | 是 | - |
| onCancel | 点击遮罩层/取消回调 | function | - | `_.noop` |
| className | 自定义类名 | string | - | - |

### 静态方法

#### Select.render({ data, value, title })

以 Picker 弹窗方式展示选择器，返回 Promise，resolve 值为选中项的 value。

| 参数 | 说明 | 类型 | 必填 |
| --- | --- | --- | --- |
| data | 选项数据，格式为 `[{value, text}]` | array | 是 |
| value | 当前选中值 | any | 是 |
| title | 弹窗标题 | string | - |

#### Select.hide()

关闭静态方法打开的选择器弹窗。

## 示例

### 组件方式

```jsx
class Demo extends React.Component {
  state = {
    show: false,
    data: [
      { value: 1, text: '深圳' },
      { value: 2, text: '罗湖' },
      { value: 3, text: '南山' },
      { value: 4, text: '宝安' }
    ],
    value: null
  }

  handleChange = (value) => {
    this.setState({ value, show: false })
  }

  render () {
    return (
      <div>
        <button onClick={() => this.setState({ show: true })}>选择</button>
        <Select
          show={this.state.show}
          data={this.state.data}
          value={this.state.value}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}
```

### 静态方法方式

```jsx
const { data, value } = this.state

Select.render({ data, value }).then(v => {
  console.log(v) // 选中项的 value
  this.setState({ value: v })
})
```

## 注意事项

- 组件方式下，data 为空时会显示"没有数据"的提示。
- data 的每一项必须包含 `value` 和 `text` 字段。
- 静态方法内部使用 ConfirmPicker 实现，选中后自动关闭弹窗。
- 静态方法方式的选中值如果不在 data 中，会默认选中第一项。
