# Uploader 文件上传

文件上传组件，支持点击选择文件，可自定义上传按钮样式，支持多文件选择。

## 使用

```jsx
import Uploader from 'react-mgm/lib/uploader'
```

## API

### Props

| 属性 | 类型 | 必填 | 默认值 | 说明 |
|------|------|------|--------|------|
| onUpload | function | 是 | - | 文件选择后的回调，参数为 `(files, event)`，`files` 为文件数组，每个文件对象会附加 `preview` 属性（本地预览 URL） |
| multiple | boolean | - | false | 是否支持多文件选择（微信环境下始终为单文件） |
| accept | string | - | - | 文件类型限制，如 `'image/*'`、`'.xlsx'` 等 |
| children | node | - | - | 自定义上传按钮内容，不传则显示默认的加号图标 |

## 示例

### 默认上传按钮

```jsx
import React from 'react'
import Uploader from 'react-mgm/lib/uploader'

class Demo extends React.Component {
  handleUpload = (files) => {
    console.log(files)
    // files[0].preview 为本地预览 URL
    // files[0] 为原始 File 对象
  }

  render () {
    return (
      <Uploader onUpload={this.handleUpload} accept='image/*' />
    )
  }
}
```

### 自定义上传按钮

```jsx
<Uploader onUpload={this.handleUpload} accept='.xlsx'>
  <button>选择 Excel 文件</button>
</Uploader>
```

### 多文件上传

```jsx
<Uploader onUpload={this.handleUpload} accept='image/*' multiple />
```

### 显示图片预览

```jsx
import React from 'react'
import Uploader from 'react-mgm/lib/uploader'

class Demo extends React.Component {
  state = { preview: '' }

  handleUpload = (files) => {
    this.setState({ preview: files[0].preview })
  }

  render () {
    return (
      <div>
        <Uploader onUpload={this.handleUpload} accept='image/*' />
        {this.state.preview && (
          <img style={{ maxWidth: '100%' }} src={this.state.preview} alt='preview' />
        )}
      </div>
    )
  }
}
```

## 注意事项

- 选择的文件对象会自动附加 `preview` 属性，值为通过 `URL.createObjectURL` 生成的本地预览地址
- `multiple` 属性在微信环境下（通过 `gm-util` 的 `is.weixin()` 判断）始终为单文件选择，不受该属性控制
- `onUpload` 回调的第一个参数始终是数组，即使单文件选择模式下也是长度为 1 的数组
- `accept` 属性的值与原生 `<input type="file">` 的 `accept` 属性一致，支持 MIME 类型（如 `image/*`）和文件扩展名（如 `.xlsx`）
- 自定义 `children` 时，组件会将子元素包裹在上传触发区域内
