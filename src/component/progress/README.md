# Progress 进度条

## 简介

Progress 进度条组件，支持自定义颜色、宽度、文字位置以及状态展示（成功/异常）。常用于文件上传、任务处理等场景中展示进度。

## 使用

```jsx
import Progress from 'react-mgm'
```

```jsx
<Progress percentage={60} />
```

## API

### Props

| 属性 | 类型 | 必填 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| percentage | number | 是 | - | 进度百分比，取值范围 0 ~ 100 |
| text | string | - | - | 自定义进度文字，不设置时默认显示百分比数值 |
| status | string | - | - | 进度状态，可选值：`success`、`exception`。设置后进度条变色并显示对应图标 |
| strokeWidth | number | - | - | 进度条高度（像素） |
| textInside | boolean | - | `false` | 是否将文字显示在进度条内部 |
| textInsideFix | string | - | - | 文字在进度条内部的对齐方式，可选值：`left`、`right`、`center`。仅在 `textInside` 为 true 时生效 |
| showText | boolean | - | `true` | 是否显示进度文字或状态图标 |
| textColor | string | - | - | 文字颜色 |
| strokeColor | string | - | - | 进度条填充颜色 |
| bgColor | string | - | - | 进度条背景颜色 |

## 示例

### 基本用法

```jsx
<Progress percentage={30} />
<Progress percentage={60} />
<Progress percentage={90} />
```

### 自定义颜色和宽度

```jsx
<Progress
  percentage={50}
  strokeWidth={12}
  strokeColor="#1890ff"
  bgColor="#e6f7ff"
  textColor="#1890ff"
/>
```

### 带状态

```jsx
<Progress percentage={100} status="success" />
<Progress percentage={50} status="exception" />
```

### 文字在进度条内部

```jsx
<Progress percentage={60} textInside />
```

### 文字在进度条内部（固定位置）

```jsx
// 文字始终靠右对齐
<Progress percentage={30} textInside textInsideFix="right" />

// 文字始终居中
<Progress percentage={80} textInside textInsideFix="center" />
```

### 自定义文字

```jsx
<Progress percentage={60} text="60/100" />
```

### 不显示文字

```jsx
<Progress percentage={60} showText={false} />
```

## 注意事项

- `percentage` 为必填属性，取值范围为 0 到 100。
- 当设置 `status="success"` 时，进度条会显示成功图标；当设置 `status="exception"` 时，会显示异常图标。
- `textInsideFix` 属性可以让文字始终固定在进度条的某一侧，不受进度宽度限制（适用于进度较小时文字溢出的场景）。
- 不设置 `text` 属性时，默认显示百分比数值（如 `60%`）。
