# Storage 本地存储

基于 localStorage 的本地存储组件，提供 JSON 序列化/反序列化支持，简化数据存取操作。

## 使用

```jsx
import Storage from 'react-mgm/lib/storage'
```

## API

### Props

Storage 也可作为 React 组件使用，在挂载时自动保存数据。

| 属性 | 类型 | 必填 | 默认值 | 说明 |
|------|------|------|--------|------|
| name | string | 是 | - | 存储的键名 |
| value | string / object / array | - | - | 存储的值 |
| autoSave | boolean | - | true | 是否在组件更新时自动保存 |

### 静态方法

| 方法 | 说明 |
|------|------|
| `Storage.set(key, value)` | 存储数据，值会自动序列化为 JSON |
| `Storage.get(key)` | 读取数据，返回值会自动反序列化。不存在时返回 `null` |
| `Storage.remove(key)` | 删除指定键 |
| `Storage.clear()` | 清空所有通过 Storage 存储的数据 |
| `Storage.getAll()` | 获取所有通过 Storage 存储的数据，返回一个对象 |

## 示例

### 静态方法使用

```jsx
import React from 'react'
import Storage from 'react-mgm/lib/storage'

function Demo() {
  const handleSet = () => {
    Storage.set('demo-key', { a: 'hello', b: 'world', c: null })
  }

  const handleGet = () => {
    const value = Storage.get('demo-key')
    console.log(value)
    // 输出: { a: 'hello', b: 'world', c: null }
  }

  const handleRemove = () => {
    Storage.remove('demo-key')
  }

  const handleGetAll = () => {
    const all = Storage.getAll()
    console.log(all)
  }

  return (
    <div>
      <button onClick={handleSet}>存储数据</button>
      <button onClick={handleGet}>读取数据</button>
      <button onClick={handleRemove}>删除数据</button>
      <button onClick={handleGetAll}>获取全部</button>
    </div>
  )
}
```

### 组件形式使用

```jsx
import React from 'react'
import Storage from 'react-mgm/lib/storage'

// 在页面挂载时自动存储配置
function Demo() {
  return (
    <div>
      <Storage name='app-config' value={{ theme: 'dark', lang: 'zh' }} />
      {/* 组件不渲染任何 DOM */}
    </div>
  )
}
```

## 注意事项

- Storage 的所有键名会自动添加 `_react-gmm_` 前缀，避免与应用中其他 localStorage 数据冲突
- `Storage.set` 存储的值会通过 `JSON.stringify` 序列化，`Storage.get` 读取时会通过 `JSON.parse` 反序列化
- `Storage.clear()` 会清空所有通过 Storage 存储的数据（以 `_react-gmm_` 为前缀的键）
- 作为组件使用时，`autoSave` 设为 `true`（默认值），每次组件更新都会重新保存数据
- 作为组件使用时不会渲染任何 DOM 元素
