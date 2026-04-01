# SliderFlag

## 简介

轮播指示器组件，用于展示轮播图当前位置。支持圆点（dot）和线条（line）两种样式，并支持内部定位（inner）模式。

## 使用

```jsx
import React, { useState } from 'react'
import SliderFlag from 'react-mgm/slider_flag'

const App = () => {
  const [index, setIndex] = useState(0)
  const count = 5

  return (
    <div>
      <SliderFlag count={count} index={index} />

      <button onClick={() => setIndex(i => Math.min(i + 1, count - 1))}>
        下一个
      </button>
    </div>
  )
}
```

## API

### Props

| 参数 | 说明 | 类型 | 必填 | 默认值 |
|------|------|------|------|--------|
| type | 指示器样式类型 | `'dot' \| 'line'` | 否 | `'dot'` |
| flag | 定位模式，`'inner'` 为内部定位 | `'default' \| 'inner'` | 否 | `'default'` |
| count | 指示器总数 | number | 是 | - |
| index | 当前激活的指示器索引（从 0 开始） | number | 是 | - |
| activeStyle | 当前激活指示器的自定义样式 | object | 否 | - |

## 示例

### 圆点样式

```jsx
import React, { useState } from 'react'
import SliderFlag from 'react-mgm/slider_flag'

const Demo = () => {
  const [index, setIndex] = useState(0)

  return <SliderFlag count={5} index={index} />
}
```

### 线条样式 + 自定义激活颜色

```jsx
import React, { useState } from 'react'
import SliderFlag from 'react-mgm/slider_flag'

const Demo = () => {
  const [index, setIndex] = useState(0)

  return (
    <SliderFlag
      type='line'
      count={5}
      index={index}
      activeStyle={{ backgroundColor: '#ff0000' }}
    />
  )
}
```

### 内部定位模式

```jsx
import React, { useState } from 'react'
import SliderFlag from 'react-mgm/slider_flag'

const Demo = () => {
  const [index, setIndex] = useState(0)

  return (
    <SliderFlag
      type='dot'
      flag='inner'
      count={3}
      index={index}
    />
  )
}
```

## 注意事项

- `count` 和 `index` 为必填属性，需要外部控制当前索引。
- `activeStyle` 仅对当前激活状态的指示器生效，非激活状态使用默认样式。
- `flag='inner'` 时会添加 `slider-flag-inner` 类名，用于内部定位场景（如轮播图内部底部）。
- 指示器使用 Flex 布局居中显示。
