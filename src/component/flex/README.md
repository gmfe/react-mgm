# Flex 弹性布局

## 简介

Flex 弹性布局组件，基于 CSS Flexbox 封装，通过布尔属性组合即可实现常见的布局方式，无需手写 flex 样式。支持主轴对齐、交叉轴对齐、换行、弹性伸缩等布局能力。

## 使用

```jsx
import Flex from 'react-mgm/lib/component/flex'
```

## API

### Props

| 参数 | 说明 | 类型 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| flex | 设置 flex 属性，传入数字或 `true`（等同 `1`） | number / boolean | 否 | - |
| auto | 设置 `flex: auto` | boolean | 否 | - |
| none | 设置 `flex: none`，不可伸缩 | boolean | 否 | - |
| width | 设置固定宽度（设置后不可被压缩） | string | 否 | - |
| height | 设置固定高度（设置后不可被压缩） | string | 否 | - |
| row | 横向排列（默认方向） | boolean | 否 | - |
| column | 纵向排列 | boolean | 否 | - |
| wrap | 允许换行 | boolean | 否 | - |
| nowrap | 不换行（默认） | boolean | 否 | - |
| justifyStart | 主轴起始对齐 | boolean | 否 | - |
| justifyEnd | 主轴末尾对齐 | boolean | 否 | - |
| justifyCenter | 主轴居中对齐 | boolean | 否 | - |
| justifyBetween | 主轴两端对齐 | boolean | 否 | - |
| justifyAround | 主轴等间距对齐 | boolean | 否 | - |
| alignStart | 交叉轴起始对齐 | boolean | 否 | - |
| alignEnd | 交叉轴末尾对齐 | boolean | 否 | - |
| alignCenter | 交叉轴居中对齐 | boolean | 否 | - |
| alignBaseline | 交叉轴基线对齐 | boolean | 否 | - |
| alignStretch | 交叉轴拉伸对齐 | boolean | 否 | - |
| className | 自定义类名 | string | 否 | - |
| style | 自定义样式 | object | 否 | - |

## 示例

### 基础横向 / 纵向布局

```jsx
import React from 'react'
import Flex from 'react-mgm/lib/component/flex'

class FlexWrap extends React.Component {
  render() {
    return (
      <div>
        {/* 横向布局（默认） */}
        <Flex>
          <Flex className="border">1</Flex>
          <Flex flex className="border">flex 占满</Flex>
        </Flex>

        {/* 纵向布局 */}
        <Flex column>
          <Flex className="border">1</Flex>
          <Flex className="border">2</Flex>
        </Flex>
      </div>
    )
  }
}

export default FlexWrap
```

### 主轴对齐

```jsx
import React from 'react'
import Flex from 'react-mgm/lib/component/flex'

class FlexWrap extends React.Component {
  render() {
    return (
      <div>
        {/* 居中 */}
        <Flex justifyCenter>
          <Flex style={{ width: '100px' }}>1</Flex>
          <Flex style={{ width: '100px' }}>2</Flex>
        </Flex>

        {/* 两端对齐 */}
        <Flex justifyBetween>
          <Flex style={{ width: '100px' }}>1</Flex>
          <Flex style={{ width: '100px' }}>2</Flex>
        </Flex>
      </div>
    )
  }
}

export default FlexWrap
```

### 交叉轴对齐

```jsx
import React from 'react'
import Flex from 'react-mgm/lib/component/flex'

class FlexWrap extends React.Component {
  render() {
    return (
      <div>
        {/* 交叉轴居中 */}
        <Flex alignCenter>
          <Flex style={{ width: '50px' }}>1<br/>2</Flex>
          <Flex style={{ width: '50px' }}>1<br/>2<br/>3</Flex>
        </Flex>

        {/* 交叉轴拉伸 */}
        <Flex alignStretch>
          <Flex style={{ width: '50px' }}>1<br/>2</Flex>
          <Flex style={{ width: '50px' }}>1<br/>2<br/>3</Flex>
        </Flex>
      </div>
    )
  }
}

export default FlexWrap
```

### 固定宽度 / 换行

```jsx
import React from 'react'
import Flex from 'react-mgm/lib/component/flex'

class FlexWrap extends React.Component {
  render() {
    return (
      <div>
        {/* 固定宽度，不会被压缩 */}
        <Flex>
          <Flex width="100px" className="border">100px</Flex>
          <Flex width="100px" className="border">100px</Flex>
          <Flex width="100px" className="border">100px</Flex>
        </Flex>

        {/* 换行 */}
        <Flex wrap>
          <Flex width="100px" className="border">100px</Flex>
          <Flex width="100px" className="border">100px</Flex>
          <Flex width="100px" className="border">100px</Flex>
        </Flex>
      </div>
    )
  }
}

export default FlexWrap
```

## 注意事项

- 默认为横向排列（`row`），不换行（`nowrap`）。
- 设置 `width` 或 `height` 时，会自动添加 `flex: none`，子元素不会被压缩。
- `flex` 属性传入 `true` 时等同于 `flex: 1`，传入数字时作为 `flex` 值。
- 所有对齐方式属性（justify/align 系列）均为布尔值，同一类别中不应同时使用多个。
- Flex 组件会将 `children` 之外的属性透传给底层 `div` 元素。
