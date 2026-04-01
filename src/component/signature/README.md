# Signature

## 简介

电子签名组件，支持签名查看、编辑和导出功能。内部集成了 Canvas 画板，提供完整的签名编辑页面，支持查看已有签名图片和修改签名。

组件包含两种模式：
- **查看模式（View）**：展示已有签名图片，可通过底部按钮进入编辑模式。
- **编辑模式（Edit）**：提供 Canvas 画板进行手写签名，支持重置和保存。

## 使用

```jsx
import React from 'react'
import Signature from 'react-mgm/signature'

const App = () => {
  const handleSave = (blob) => {
    console.log('签名数据：', blob)
  }

  return (
    <Signature
      output='blob'
      image='https://example.com/signature.png'
      onSave={handleSave}
    />
  )
}
```

## API

### Props

| 参数 | 说明 | 类型 | 必填 | 默认值 |
|------|------|------|------|--------|
| output | 输出类型 | `'base16' \| 'blob'` | 否 | `'base64'` |
| image | 已有签名图片地址，传入时进入查看模式 | string | 否 | - |
| onSave | 保存回调，参数为签名数据（base16 字符串或 Blob 对象）和是否已签名的布尔值 | function | 是 | - |
| canModify | 是否有修改权限，为 `false` 时查看模式下不显示"修改签名"按钮 | boolean | 否 | `true` |
| viewOrEdit | 为 `true` 直接进入编辑模式，为 `false` 直接进入查看模式 | boolean | 否 | `false` |

## 示例

### 查看并修改签名

```jsx
import React from 'react'
import Signature from 'react-mgm/signature'

const Demo = () => {
  return (
    <Signature
      output='blob'
      image='https://example.com/signature.png'
      onSave={(blob) => {
        console.log(blob)
      }}
    />
  )
}
```

### 首次签名（直接进入编辑模式）

```jsx
import React from 'react'
import Signature from 'react-mgm/signature'

const Demo = () => {
  return (
    <Signature
      viewOrEdit={true}
      onSave={(data) => {
        console.log(data)
      }}
    />
  )
}
```

## 注意事项

- `viewOrEdit` 为 `false` 时，首次签名需点击"修改签名"按钮进入编辑模式；为 `true` 时直接进入编辑模式。
- 编辑模式下底部按钮文案根据 `viewOrEdit` 显示不同文字：`true` 显示"确定签收"，`false` 显示"保存"。
- `output` 为 `'blob'` 时，`onSave` 回调参数为 Blob 对象；为 `'base64'` 时，回调参数为 base16 编码的图片字符串。
- 不传 `image` 时直接进入编辑模式。
- 编辑模式会阻止 iOS 的橡皮筋滚动效果。
