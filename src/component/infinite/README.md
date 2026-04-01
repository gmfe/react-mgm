# Infinite 无限滚动

## 简介

Infinite 无限滚动组件，监听容器滚动事件，当滚动到底部时自动触发加载回调。支持 Promise 和普通函数两种模式，加载完成后自动停止，并显示"没有更多数据"提示。

同时提供 `InfiniteBox` 子组件，封装了分页请求逻辑，适用于标准的分页加载场景。

## 使用

```jsx
import Infinite from 'react-mgm/lib/component/infinite'
import InfiniteBox from 'react-mgm/lib/component/infinite/infinite_box'
```

## API

### Infinite Props

| 参数 | 说明 | 类型 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| onBottom | 滚动到底部时的回调函数，支持返回 Promise | function | 是 | - |
| bottomOffset | 触发加载的底部偏移量（px） | number | 否 | `80` |
| done | 数据是否已全部加载完毕 | boolean | 否 | - |
| onScroll | 滚动事件回调 | function | 否 | `() => {}`（空函数） |
| className | 自定义类名 | string | 否 | - |
| children | 列表内容 | node | 否 | - |

### InfiniteBox Props

| 参数 | 说明 | 类型 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| onRequest | 分页请求函数，接收 `{ page_obj }` 参数，需返回 Promise，resolve 的数据格式为 `{ data, pagination: { page_obj, more } }` | function | 是 | - |
| showEmpty | 是否在无数据时显示空状态（"没有数据" + 重新加载按钮） | boolean | 否 | `false` |
| children | 列表内容 | node | 否 | - |

### InfiniteBox 实例方法

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| apiDoFirstRequest | 重置分页状态并发起首次请求 | params（可选，额外的请求参数对象） |

## 示例

### Infinite 基础用法

```jsx
import React, { useState, useCallback } from 'react'
import Infinite from 'react-mgm/lib/component/infinite'

function InfiniteWrap() {
  const [done, setDone] = useState(false)

  const handleBottom = useCallback(() => {
    return new Promise(resolve => {
      setTimeout(() => {
        setDone(true)
        resolve()
      }, 2000)
    })
  }, [])

  return (
    <Infinite
      done={done}
      onBottom={handleBottom}
      style={{ height: '300px' }}
    >
      <div>列表项 1</div>
      <div>列表项 2</div>
      <div>列表项 3</div>
    </Infinite>
  )
}

export default InfiniteWrap
```

### InfiniteBox 分页加载

```jsx
import React, { useRef, useCallback } from 'react'
import InfiniteBox from 'react-mgm/lib/component/infinite/infinite_box'

function InfiniteBoxWrap() {
  const refInfiniteBox = useRef()

  const handleRequest = useCallback(({ page_obj }) => {
    // 调用后端分页接口
    return api.getList({ page_obj }).then(json => {
      // json 格式: { data: [], pagination: { page_obj: 'xxx', more: true } }
      return json
    })
  }, [])

  const handleReload = () => {
    refInfiniteBox.current.apiDoFirstRequest()
  }

  return (
    <InfiniteBox
      ref={refInfiniteBox}
      onRequest={handleRequest}
      showEmpty
      style={{ height: '500px' }}
    >
      {/* 渲染列表数据 */}
    </InfiniteBox>
  )
}

export default InfiniteBoxWrap
```

## 注意事项

- Infinite 组件仅监听向下滚动方向，向上滚动不会触发加载。
- `onBottom` 返回 Promise 时，Promise resolve 或 reject 后自动结束加载状态；返回非 Promise 时，延迟 500ms 结束加载状态。
- 当 `done` 为 `true` 时，底部显示"没有更多数据"提示，不再触发 `onBottom`。
- InfiniteBox 内部维护 `page_obj`、`offset`、`limit` 等分页状态，通过 `apiDoFirstRequest` 方法可重置状态并重新发起请求。
- InfiniteBox 要求 `onRequest` 返回的数据结构包含 `pagination` 字段，其中 `more` 为 `false` 时表示没有更多数据。
- InfiniteBox 的 `showEmpty` 属性用于控制是否在无数据时显示空状态和重新加载按钮。
