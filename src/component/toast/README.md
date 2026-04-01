# Toast 轻提示

## 简介

Toast 轻提示组件，支持多种类型提示（普通提示、成功、信息、警告、危险、加载中等）。主要通过静态方法命令式调用，也可作为 JSX 组件使用。

## 使用

```jsx
import Toast from 'react-mgm'
```

### 静态方法调用

```jsx
// 普通提示（默认 2 秒后消失）
Toast.tip('提示信息')

// 成功提示
Toast.success('操作成功')

// 信息提示
Toast.info('这是一条信息')

// 警告提示
Toast.warning('请注意')

// 危险提示
Toast.danger('操作失败')

// 加载提示（默认 20 秒后消失）
Toast.loading('加载中...')

// 线性加载提示（默认 20 秒后消失）
Toast.loading_linear('录音中...')

// 手动关闭
Toast.clear()
```

### 传入对象参数

```jsx
Toast.success({
  time: 0,           // 设置为 0 时不自动关闭
  children: (
    <div>
      <div>保存成功</div>
    </div>
  )
})
```

## API

### Props

| 属性 | 类型 | 必填 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| time | number | - | `2000` | 自动关闭时间（毫秒），设为 0 时不自动关闭。loading/loading_linear 类型默认为 20000 |
| loading | boolean | - | `false` | 是否为加载类型 |
| loading_linear | boolean | - | - | 是否为线性加载类型 |
| success | boolean | - | - | 是否为成功类型 |
| info | boolean | - | - | 是否为信息类型 |
| warning | boolean | - | - | 是否为警告类型 |
| danger | boolean | - | - | 是否为危险类型 |

> `time` 属性在 JSX 组件使用时无实际意义，仅供静态方法调用时设置。

### 静态方法

| 方法 | 参数 | 说明 |
| --- | --- | --- |
| Toast.tip | `options: string \| object` | 显示普通提示 |
| Toast.success | `options: string \| object` | 显示成功提示 |
| Toast.info | `options: string \| object` | 显示信息提示 |
| Toast.warning | `options: string \| object` | 显示警告提示 |
| Toast.danger | `options: string \| object` | 显示危险提示 |
| Toast.loading | `options: string \| object` | 显示加载提示（带遮罩） |
| Toast.loading_linear | `options: string \| object` | 显示线性加载提示（带遮罩） |
| Toast.clear | - | 手动关闭当前 Toast |

## 示例

### 各类型提示

```jsx
// 普通提示
Toast.tip('这是一条提示')

// 成功提示（自定义内容）
Toast.success({
  time: 3000,
  children: <div>保存成功啦</div>
})

// 警告提示
Toast.warning('请注意')

// 危险提示
Toast.danger('操作失败')
```

### 加载提示

```jsx
// 圆形加载（默认 20 秒后自动关闭）
Toast.loading('加载中...')

// 线性加载（默认 20 秒后自动关闭）
Toast.loading_linear({
  time: 10000,
  children: <div>录音中...</div>
})

// 手动关闭加载
Toast.clear()
```

### 不自动关闭

```jsx
// 设置 time 为 0，需要手动调用 Toast.clear() 关闭
Toast.loading({ time: 0 })
// ... 执行异步操作 ...
Toast.clear()
```

## 注意事项

- 所有静态方法参数支持字符串或对象，字符串会自动转换为 `{ children: string }` 对象。
- `Toast.loading` 和 `Toast.loading_linear` 默认显示遮罩层（防止用户误触），且默认持续时间为 20 秒。
- 其他类型（tip、success、info、warning、danger）默认持续时间为 2 秒。
- 设置 `time: 0` 可以阻止自动关闭，适用于需要在异步操作完成后手动关闭的场景。
- 同时只会显示一个 Toast，多次调用会替换之前的内容。
