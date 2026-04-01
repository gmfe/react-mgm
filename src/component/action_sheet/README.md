# ActionSheet 操作面板

## 简介

ActionSheet 操作面板组件，从页面底部弹出，展示一组操作选项供用户选择。支持取消按钮和危险操作按钮的高亮显示。仅支持通过静态方法命令式调用。

## 使用

```jsx
import ActionSheet from 'react-mgm'
```

### 基本用法

```jsx
ActionSheet.render(
  {
    message: '请选择操作',
    options: ['拍照', '从相册选择', '取消'],
    cancelIndex: 2
  },
  (index) => {
    console.log('选择了第', index, '项')
  }
)
```

## API

### 静态方法

| 方法 | 参数 | 说明 |
| --- | --- | --- |
| ActionSheet.render | `params: object, callback: function` | 显示操作面板 |
| ActionSheet.hide | - | 隐藏当前操作面板 |

#### render 方法参数

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| params.message | string | - | 顶部描述信息 |
| params.options | array | 是 | 选项列表，数组中每一项为字符串或 node |
| params.cancelIndex | number | - | 取消按钮的索引，点击后直接关闭面板 |
| params.destructiveIndex | number | - | 危险操作按钮的索引，该选项会以红色高亮显示 |
| callback | function | 是 | 选项点击回调，参数为选项索引。回调返回 `false` 时阻止自动关闭 |

## 示例

### 基本操作面板

```jsx
const handleOpen = () => {
  ActionSheet.render(
    {
      message: '请选择操作',
      options: ['拍照', '从相册选择', '取消'],
      cancelIndex: 2
    },
    (index) => {
      console.log('选择了:', index)
    }
  )
}
```

### 带危险操作的操作面板

```jsx
const handleOpen = () => {
  const list = ['直接签开', '等待', '删除', '取消']
  ActionSheet.render(
    {
      message: '这是描述信息',
      options: list,
      cancelIndex: list.length - 1,       // 最后一项为取消按钮
      destructiveIndex: list.length - 2   // 倒数第二项为危险操作
    },
    (index) => {
      if (index === 0) {
        console.log('执行签开操作')
      }
    }
  )
}
```

### 阻止自动关闭

```jsx
ActionSheet.render(
  {
    message: '确认删除？',
    options: ['删除', '取消'],
    cancelIndex: 1
  },
  (index) => {
    if (index === 0) {
      // 返回 false 阻止面板自动关闭
      // 可在此执行异步操作，完成后手动调用 ActionSheet.hide()
      return false
    }
  }
)
```

## 注意事项

- ActionSheet 仅支持静态方法调用，不支持 JSX 声明式使用。
- `cancelIndex` 指定的选项点击后会直接关闭面板，不会触发 `callback`。
- `destructiveIndex` 指定的选项会以红色文字显示，用于标记危险操作（如删除）。
- 回调函数返回 `false` 可以阻止面板自动关闭，适用于需要二次确认或异步操作的场景。
- ActionSheet 底层基于 Popup 组件实现，从底部弹出。
