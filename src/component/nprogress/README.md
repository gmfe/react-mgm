# NProgress 顶部进度条

## 简介

NProgress 顶部进度条组件，类似于页面顶部的细进度条效果（类似 YouTube/NProgress），用于异步操作（如页面切换、数据加载）时提供进度反馈。仅支持通过静态方法命令式调用。

## 使用

```jsx
import NProgress from 'react-mgm'
```

```jsx
// 开始进度条
NProgress.start()

// 完成进度条
NProgress.done()
```

## API

### 静态方法

| 方法 | 参数 | 说明 |
| --- | --- | --- |
| NProgress.start | - | 开始进度条，进度会从 0% 自动递增到约 90%（通过递增插值算法实现，每次增加剩余进度的 20%） |
| NProgress.done | - | 完成进度条，进度跳到 100%，250ms 后自动移除 |

## 示例

### 基本用法

```jsx
class Demo extends React.Component {
  handleStart = () => {
    NProgress.start()
  }

  handleDone = () => {
    NProgress.done()
  }

  render() {
    return (
      <div>
        <button onClick={this.handleStart}>开始</button>
        <button onClick={this.handleDone}>完成</button>
      </div>
    )
  }
}
```

### 模拟异步加载

```jsx
const fetchData = async () => {
  NProgress.start()

  try {
    await api.getData()
    NProgress.done()
  } catch (error) {
    NProgress.done()
  }
}
```

## 注意事项

- NProgress 仅支持静态方法调用，不支持 JSX 声明式使用。
- 进度条会自动从 0% 递增到约 90%，不会自动完成，需要手动调用 `NProgress.done()` 来完成。
- 多次调用 `NProgress.start()` 会清除之前的定时器并重新开始。
- 进度条完成后会自动移除 DOM 元素，无需手动清理。
