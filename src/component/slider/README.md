# Slider 轮播

## 简介

轮播组件，支持触摸滑动和鼠标拖拽，可配置指示器、自动轮播等功能。通过子元素传递轮播内容。

## 使用

```jsx
import { Slider } from 'react-mgm'
```

## API

### Props

| 属性 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| children | node | 是 | 轮播内容（多个子元素） |
| defaultIndex | number | 否 | 默认显示的轮播索引，默认 `0` |
| onChange | function | 否 | 轮播切换回调，参数为当前索引（number） |
| flag | string | 否 | 指示器显示模式：`'default'` 外部显示、`'inner'` 内嵌显示、`'none'` 不显示，默认 `'default'` |
| flagType | string | 否 | 指示器类型：`'dot'` 圆点、`'line'` 横线，默认 `'dot'` |
| activeFlagStyle | object | 否 | 指示器激活项的自定义样式 |
| enableAutoSlide | boolean | 否 | 是否启用自动轮播，默认 `false` |
| autoSlideTime | number | 否 | 自动轮播间隔时间（毫秒），默认 `5000` |
| slideTimeKey | string | 否 | 自动轮播的唯一标识 key，用于 `timeSync` 定时器管理 |

### 默认值

| 属性 | 默认值 |
| --- | --- |
| defaultIndex | `0` |
| onChange | `_.noop`（空函数） |
| flag | `'default'` |
| flagType | `'dot'` |
| enableAutoSlide | `false` |
| autoSlideTime | `5000` |

## 示例

### 基础轮播

```jsx
import React from 'react'
import { Slider } from 'react-mgm'

const style = {
  background: '#71B5DE',
  height: '5em',
  lineHeight: '5em',
  textAlign: 'center',
  color: 'white'
}

class SliderDemo extends React.Component {
  render() {
    return (
      <Slider>
        <div style={style}>页面 1</div>
        <div style={style}>页面 2</div>
        <div style={style}>页面 3</div>
      </Slider>
    )
  }
}
```

### 带指示器

```jsx
<Slider flag='inner' flagType='line'>
  <div style={style}>页面 1</div>
  <div style={style}>页面 2</div>
</Slider>
```

### 自动轮播

```jsx
<Slider enableAutoSlide slideTimeKey='mySlider'>
  <div style={style}>页面 1</div>
  <div style={style}>页面 2</div>
  <div style={style}>页面 3</div>
  <div style={style}>页面 4</div>
</Slider>
```

### 无指示器

```jsx
<Slider flag='none'>
  <div style={style}>页面 1</div>
  <div style={style}>页面 2</div>
</Slider>
```

## 注意事项

- 轮播内容通过 `children` 传入，每个子元素宽度自动设为 `100%`。
- 滑动距离超过 50px 才会触发切换，否则回弹。
- 开启自动轮播后，触摸开始时暂停，触摸结束后恢复。
- `slideTimeKey` 用于标识定时器实例，多个轮播组件需要使用不同的 key。
- 自动轮播依赖 `gm-util` 中的 `timeSync` 工具。
- 组件会监听 `resize` 事件自动调整宽度，卸载时自动移除监听。
