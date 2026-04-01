# Dialog 对话框

## 简介

Dialog 对话框组件，支持 Alert（提示）和 Confirm（确认）两种模式，同时支持三按钮模式和图片展示。可以通过 JSX 声明式使用，也可以通过静态方法以命令式调用。

## 使用

```jsx
import Dialog from 'react-mgm'
```

### 声明式使用

```jsx
// Alert 对话框（仅确认按钮）
<Dialog
  alert
  show={visible}
  title="提示"
  onConfirm={() => setVisible(false)}
>
  这是一条提示信息
</Dialog>

// Confirm 对话框（确认 + 取消按钮）
<Dialog
  confirm
  show={visible}
  title="确认"
  confirmText="合并"
  cancelText="不合并"
  onCancel={() => setVisible(false)}
  onConfirm={() => setVisible(false)}
>
  确定要合并吗？
</Dialog>
```

### 命令式调用（静态方法）

```jsx
// Alert（返回 Promise）
Dialog.alert('提示信息').then(() => {
  console.log('已确认')
})

// Confirm（返回 Promise）
Dialog.confirm({
  children: '确定吗？',
  confirmText: '去充值'
}).then(() => {
  console.log('已确认')
}).catch(() => {
  console.log('已取消')
})
```

## API

### Props

| 属性 | 类型 | 必填 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| show | boolean | - | - | 是否显示 |
| title | string | - | `提示` | 标题 |
| alert | boolean | - | - | 是否为 Alert 模式（仅确认按钮） |
| confirm | boolean | - | - | 是否为 Confirm 模式（确认 + 取消按钮） |
| onConfirm | function | 是 | - | 确认按钮点击回调 |
| onCancel | function | - | - | 取消按钮点击回调 |
| confirmText | string | - | `确定` | 确认按钮文字 |
| cancelText | string | - | `取消` | 取消按钮文字 |
| otherText | string | - | - | 第三个按钮文字，当有三个按钮时使用 |
| onOtherClick | function | - | - | 第三个按钮点击回调 |
| picture | string | - | - | 图片路径，在对话框内容区底部展示图片 |

### 静态方法

| 方法 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| Dialog.alert | `options: string \| object` | `Promise` | 显示 Alert 对话框，参数为字符串时作为提示内容，为对象时等同于 Dialog Props |
| Dialog.confirm | `options: string \| object` | `Promise` | 显示 Confirm 对话框，resolve 表示确认，reject 表示取消 |
| Dialog.dialog | `options: object` | `Promise` | 显示自定义对话框 |
| Dialog.hide | - | - | 隐藏当前对话框 |

## 示例

### 声明式 Alert

```jsx
import React, { useState } from 'react'

function Demo() {
  const [alertVisible, setAlertVisible] = useState(false)

  return (
    <div>
      <button onClick={() => setAlertVisible(true)}>打开 Alert</button>
      <Dialog
        alert
        show={alertVisible}
        title="提示"
        onConfirm={() => setAlertVisible(false)}
      >
        这是一条提示信息
      </Dialog>
    </div>
  )
}
```

### 声明式 Confirm

```jsx
import React, { useState } from 'react'

function Demo() {
  const [confirmVisible, setConfirmVisible] = useState(false)

  return (
    <div>
      <button onClick={() => setConfirmVisible(true)}>打开 Confirm</button>
      <Dialog
        confirm
        show={confirmVisible}
        title="确认"
        confirmText="合并"
        cancelText="不合并"
        onCancel={() => setConfirmVisible(false)}
        onConfirm={() => setConfirmVisible(false)}
      >
        确定要合并吗？
      </Dialog>
    </div>
  )
}
```

### 命令式调用

```jsx
// Alert
Dialog.alert('操作成功').then(() => {
  console.log('已确认')
})

// Confirm
Dialog.confirm({
  children: '确定删除吗？',
  confirmText: '删除'
}).then(() => {
  console.log('已确认删除')
}).catch(() => {
  console.log('已取消')
})
```

## 注意事项

- 使用静态方法调用时，`Dialog.alert` 和 `Dialog.confirm` 参数支持字符串或对象，字符串会自动转换为 `{ children: string }` 对象。
- 静态方法返回 Promise，`confirm` 模式下点击确认触发 `resolve`，点击取消触发 `reject`。
- `otherText` 属性可以在对话框底部显示三个按钮（其他、取消、确认）。
- 对话框的遮罩层 z-index 为 5000，确保在 Popup（z-index 2000）之上也能正常显示。
- 静态方法内部会自动管理显示和隐藏，无需手动调用 `Dialog.hide()`。
