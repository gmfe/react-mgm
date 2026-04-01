# Canvas

## 简介

基于 HTML5 Canvas 的手写签名画板组件，使用 `forwardRef` + `memo` 封装，支持在移动端和桌面端进行手写绘制。同时支持背景图片绘制，并可导出为 Blob 或 DataURL。

## 使用

```jsx
import React, { useRef } from 'react'
import Canvas from 'react-mgm/canvas'

const App = () => {
  const canvasRef = useRef(null)

  const handleSave = () => {
    // 导出为 DataURL
    const dataURL = canvasRef.current.toDataURL('image/png')
    console.log(dataURL)

    // 导出为 Blob
    canvasRef.current.toBlob((blob) => {
      console.log(blob)
    }, 'image/png')
  }

  const handleReset = () => {
    canvasRef.current.reset()
  }

  return (
    <div>
      <Canvas
        ref={canvasRef}
        width={375}
        height={300}
        background='https://example.com/bg.png'
      />
      <button onClick={handleSave}>保存</button>
      <button onClick={handleReset}>重置</button>
    </div>
  )
}
```

## API

### Props

| 参数 | 说明 | 类型 | 必填 | 默认值 |
|------|------|------|------|--------|
| width | 画布宽度（像素） | number | 是 | - |
| height | 画布高度（像素） | number | 是 | - |
| background | 背景图片地址，支持网络图片 | string | 否 | - |

### Ref 方法

通过 `ref` 可以调用以下实例方法：

| 方法 | 说明 | 参数 |
|------|------|------|
| reset() | 重置画布，清除绘制内容并重新绘制背景图 | - |
| toDataURL(type?, encoderOptions?) | 导出画布内容为 DataURL | `type`: 图片类型（如 `'image/png'`），`encoderOptions`: 图片质量（0-1） |
| toBlob(callback, type?, encoderOptions?) | 导出画布内容为 Blob | `callback`: 回调函数，`type`: 图片类型，`encoderOptions`: 图片质量 |

## 示例

```jsx
import React, { useRef } from 'react'
import Canvas from 'react-mgm/canvas'

const Demo = () => {
  const canvasRef = useRef(null)

  return (
    <Canvas
      ref={canvasRef}
      width={375}
      height={300}
    />
  )
}
```

## 注意事项

- 组件内部使用 `forwardRef`，需要通过 `useRef` 获取 ref 实例来调用方法。
- 组件使用 `React.memo` 包裹，只有 props 变化时才会重新渲染。
- 自动兼容触屏（`touch`）和鼠标（`mouse`）事件。
- 背景图片使用 `crossOrigin` 属性加载，需要图片服务器支持跨域。
- 如果浏览器不支持 Canvas，会显示提示文字"对不起，当前浏览器暂不支持此功能！"。
- 绘制效果为黑色笔迹，线条末端为圆形（`lineCap: round`），连接处为圆形（`lineJoin: round`）。
