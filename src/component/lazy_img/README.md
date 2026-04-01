# LazyImg 图片懒加载

## 简介

LazyImg 图片懒加载组件，当图片滚动到可视区域时才进行加载。支持自定义占位图、滚动监听目标容器和延迟阈值配置，有效减少页面初始加载时的网络请求。

## 使用

```jsx
import LazyImg from 'react-mgm/lib/component/lazy_img'
```

## API

### Props

| 参数 | 说明 | 类型 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| src | 图片真实地址 | string | 否 | - |
| placeholder | 加载前显示的占位图地址 | string | 否 | - |
| targetId | 指定监听滚动事件的 DOM 元素 id，默认监听 `.page-content` 元素 | string | 否 | - |
| delay | 滚动事件防抖延迟时间（ms） | number | 否 | `500` |
| className | 自定义类名 | string | 否 | - |

## 示例

```jsx
import React from 'react'
import Page from 'react-mgm/lib/component/page'
import LazyImg from 'react-mgm/lib/component/lazy_img'

function LazyImgWrap() {
  const gmLogo = 'https://example.com/logo.png'
  const placeholder = 'https://example.com/placeholder.png'

  return (
    <Page>
      {/* 第一张图片，在可视区域内直接加载 */}
      <LazyImg
        placeholder={placeholder}
        src={gmLogo}
      />

      {/* 占位空间，模拟长页面 */}
      <div style={{ height: '900px' }}>滚动到下面看图片</div>

      {/* 第二张图片，滚动到可视区域时加载 */}
      <LazyImg
        placeholder={placeholder}
        src={gmLogo}
      />

      {/* 第三张图片，无占位图 */}
      <LazyImg src={gmLogo} />
    </Page>
  )
}

export default LazyImgWrap
```

## 注意事项

- 默认监听 `.page-content` 元素的滚动事件，如需自定义滚动容器，请通过 `targetId` 指定对应 DOM 元素的 id。
- 图片加载后会自动移除滚动监听，避免不必要的性能开销。
- 滚动事件使用了防抖（debounce）处理，默认延迟 500ms，可通过 `delay` 属性调整。
- 如果未设置 `placeholder`，在图片未加载前会显示空白。
- LazyImg 底层基于 `img` 标签渲染，支持所有原生 `img` 属性（通过 `...rest` 透传）。
