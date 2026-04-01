# SliderLess 轻量轮播

## 简介

轻量级轮播组件，基于 Slider 封装，优化了内存占用。始终只渲染 3 个子元素（当前项、前一项、后一项），适用于内容较多或需要频繁切换的场景。

## 使用

```jsx
import { SliderLess } from 'react-mgm'
```

## API

### Props

| 属性 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| children | node | 是 | 轮播内容（多个子元素） |
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
| onChange | `_.noop`（空函数） |
| flag | `'default'` |
| flagType | `'dot'` |
| enableAutoSlide | `false` |
| autoSlideTime | `5000` |

## 示例

### 基础用法

```jsx
import React from 'react'
import { SliderLess } from 'react-mgm'

const style = {
  background: '#71B5DE',
  height: '5em',
  lineHeight: '5em',
  textAlign: 'center',
  color: 'white'
}

class SliderLessDemo extends React.Component {
  render() {
    return (
      <SliderLess>
        <div style={style}>页面 1</div>
        <div style={style}>页面 2</div>
      </SliderLess>
    )
  }
}
```

### 自动轮播

```jsx
<SliderLess enableAutoSlide slideTimeKey='mySliderLess'>
  <div style={style}>页面 1</div>
  <div style={style}>页面 2</div>
  <div style={style}>页面 3</div>
</SliderLess>
```

### 自定义指示器

```jsx
<SliderLess flag='inner' flagType='line'>
  <div style={style}>页面 1</div>
  <div style={style}>页面 2</div>
</SliderLess>
```

## 注意事项

- SliderLess 内部基于 Slider 组件，始终只渲染最多 3 个子元素（当前、前一个、后一个），因此内存占用更小。
- 轮播到达最后一项后会自动循环到第一项，实现无限轮播效果。
- 与 Slider 不同，SliderLess 不支持 `defaultIndex` 属性，始终从第一项开始。
- `slideTimeKey` 用于标识定时器实例，多个轮播组件需要使用不同的 key。
- 切换时会有 200ms 的延迟（与 Slider 的动画时间一致），在此期间会重新渲染子元素。
- 自动轮播依赖 `gm-util` 中的 `timeSync` 工具。
