# PreviewImage 图片预览

图片预览组件，支持单张和多张图片的预览，多张图片可通过滑动切换。推荐使用静态方法 `PreviewImage.render()` 以弹窗形式调用。

## 使用

```jsx
import PreviewImage from 'react-mgm/lib/preview_image'
```

## API

### Props

| 属性 | 类型 | 必填 | 默认值 | 说明 |
|------|------|------|--------|------|
| images | array | - | - | 图片数组，每项包含 `url`（图片地址）和 `name`（图片名称） |
| show | boolean | - | false | 是否显示预览 |
| onHide | function | - | `_.noop` | 关闭预览的回调 |
| defaultIndex | number | - | 0 | 多张图片时默认显示的索引 |

### 静态方法

| 方法 | 说明 |
|------|------|
| `PreviewImage.render(options)` | 以弹窗形式打开图片预览。`options` 支持所有 Props 属性，自动设置 `show: true` 和 `onHide` 回调 |
| `PreviewImage.hide()` | 关闭当前弹窗形式的图片预览 |

## 示例

### 静态方法调用（推荐）

```jsx
import React from 'react'
import PreviewImage from 'react-mgm/lib/preview_image'

function Demo() {
  const handleShowImages = () => {
    PreviewImage.render({
      images: [
        { url: 'https://example.com/image1.png', name: '图片一' },
        { url: 'https://example.com/image2.png', name: '图片二' },
        { url: 'https://example.com/image3.png', name: '图片三' }
      ],
      onHide: PreviewImage.hide
    })
  }

  const handleShowSingle = () => {
    PreviewImage.render({
      images: [
        { url: 'https://example.com/image.png', name: '单张图片' }
      ],
      onHide: PreviewImage.hide
    })
  }

  return (
    <div>
      <button onClick={handleShowImages}>预览多张图片</button>
      <button onClick={handleShowSingle}>预览单张图片</button>
    </div>
  )
}
```

### 组件形式使用

```jsx
import React, { useState } from 'react'
import PreviewImage from 'react-mgm/lib/preview_image'

function Demo() {
  const [show, setShow] = useState(false)

  return (
    <div>
      <button onClick={() => setShow(true)}>打开预览</button>
      <PreviewImage
        show={show}
        images={[
          { url: 'https://example.com/image.png', name: '图片名称' }
        ]}
        defaultIndex={0}
        onHide={() => setShow(false)}
      />
    </div>
  )
}
```

## 注意事项

- 推荐使用 `PreviewImage.render()` 静态方法，以弹窗形式打开预览，无需管理组件的显示/隐藏状态
- `images` 数组中每项必须包含 `url` 字段，`name` 字段可选
- 单张图片时不显示滑动指示器，多张图片可通过左右滑动切换
- 点击预览区域会触发 `onHide` 回调关闭预览
