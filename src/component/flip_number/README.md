# FlipNumber 翻转数字

## 简介

数字翻转滚动动画组件，支持从起始数字滚动到目标数字，带有缓动效果。可配置小数位数、千位分隔符、延迟启动、滚动时长等参数。

## 使用

```jsx
import { FlipNumber } from 'react-mgm'
```

## API

### Props

| 属性 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| to | number | 是 | 目标数字（最终显示的数字） |
| from | number | 否 | 起始数字，默认 `0` |
| delay | number | 否 | 延迟启动时间（毫秒） |
| duration | number | 否 | 滚动时长（毫秒），默认 `1500` |
| easeFn | function | 否 | 缓动函数，控制滚动加速度，默认为起末慢、中间快的三次方缓动 |
| individually | boolean | 否 | 是否逐个数字滚动，默认 `true` |
| decimal | number | 否 | 小数点保留位数，默认 `0`（无小数） |
| useGroup | boolean | 否 | 是否启用大数逗号分组（如 `1,234`），默认 `false` |

### 默认值

| 属性 | 默认值 |
| --- | --- |
| from | `0` |
| duration | `1500` |
| individually | `true` |
| decimal | `0` |
| useGroup | `false` |
| easeFn | `pos => (pos /= 0.5) < 1 ? 0.5 * Math.pow(pos, 3) : 0.5 * (Math.pow((pos - 2), 3) + 2)` |

## 示例

### 基础用法

```jsx
import React from 'react'
import { FlipNumber } from 'react-mgm'

function FlipNumberDemo () {
  return (
    <div>
      <FlipNumber from={0} to={1234} />
    </div>
  )
}
```

### 带小数和千位分隔

```jsx
import React from 'react'
import { FlipNumber } from 'react-mgm'

function FlipNumberDemo () {
  return (
    <div>
      <FlipNumber
        useGroup
        decimal={2}
        delay={1000}
        from={0}
        to={123456.789}
      />
    </div>
  )
}
```

### 自定义缓动函数

```jsx
import { FlipNumber } from 'react-mgm'

<FlipNumber
  from={0}
  to={9999}
  duration={2000}
  easeFn={t => t * t} // 自定义二次方缓动
/>
```

## 注意事项

- 当 `to` 属性值发生变化时，会自动重新触发滚动动画。
- `decimal` 控制小数点位数，实际会进行四舍五入处理（由 `toLocaleString` 实现）。
- `individually` 设为 `true` 时，每个数字位会独立滚动，效果更自然；设为 `false` 时所有数字位同步滚动。
- `easeFn` 缓动函数接收一个 `0` 到 `1` 的进度参数，返回值也应为 `0` 到 `1`。
- `delay` 设置延迟启动时间，单位为毫秒。
- 组件内部使用 `requestAnimationFrame` 实现动画，组件卸载时会自动取消动画帧。
