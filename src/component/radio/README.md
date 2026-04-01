# Radio 单选框

## 简介

Radio 是一个单选框组件，通过选中/未选中的图标状态来展示选择。支持禁用状态。

## 使用

```jsx
import Radio from 'react-mgm/radio'
```

## API

### Props

| 参数 | 说明 | 类型 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| checked | 是否选中 | boolean | 是 | - |
| onChange | 状态变化时的回调函数，参数为新状态（boolean） | function | - | `_.noop` |
| disabled | 是否禁用 | boolean | - | - |
| children | 单选框右侧的内容 | node | - | - |

> 其他属性会透传到内部的 Flex 容器上。

## 示例

### 基本用法

```jsx
function Demo () {
  const [value, setValue] = useState('a')

  return (
    <div>
      <Radio
        checked={value === 'a'}
        onChange={() => setValue('a')}
      >
        选项 A
      </Radio>
      <Radio
        checked={value === 'b'}
        onChange={() => setValue('b')}
      >
        选项 B
      </Radio>
    </div>
  )
}
```

### 禁用状态

```jsx
<Radio checked disabled>禁用且选中</Radio>
<Radio disabled>禁用且未选中</Radio>
```

## 注意事项

- disabled 状态下，点击不会触发 onChange 回调。
- 禁用状态下组件的透明度会降低（opacity: 0.7）。
- Radio 本身不包含选项组逻辑，需要调用方自行管理 checked 状态。
