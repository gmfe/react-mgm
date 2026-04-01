# Loading 加载

## 简介

Loading 加载组件，提供两种加载样式：圆形加载和线性加载。通常作为 Toast 的内部组件使用，也可以单独在页面中展示加载状态。

## 使用

```jsx
import Loading from 'react-mgm'
```

```jsx
// 圆形加载
<Loading>加载中...</Loading>

// 线性加载
<Loading line>加载中...</Loading>
```

## API

### Props

| 属性 | 类型 | 必填 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| line | boolean | - | - | 是否使用线性加载样式，默认为圆形加载样式 |

## 示例

### 圆形加载

```jsx
<Loading>加载中...</Loading>
```

### 线性加载

```jsx
<Loading line>加载中...</Loading>
```

### 无文字加载

```jsx
<Loading />
```

### 线性无文字加载

```jsx
<Loading line />
```

## 注意事项

- Loading 组件内部使用 Flex 布局，默认水平和垂直居中。
- 圆形加载使用 WeUI 的 `weui-loading` 样式。
- 线性加载由五个竖条组成的跳动动画效果。
- 通常结合 Toast 组件的静态方法使用：`Toast.loading()` 或 `Toast.loading_linear()`。
