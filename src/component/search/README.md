# Search 搜索

## 简介

Search 模块包含三个子组件：

- **Search** - 搜索栏组件，支持带搜索按钮或取消按钮两种模式。
- **SearchPage** - 搜索页面组件，基于 Page 封装，激活时展示搜索栏，未激活时展示自定义 header。
- **FakeSearch** - 假搜索框组件，仅展示搜索框样式，用于作为搜索入口。

## 使用

```jsx
import { Search, SearchPage, FakeSearch } from 'react-mgm/search'
```

---

## Search

搜索栏组件。

### Props

| 参数 | 说明 | 类型 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| type | 按钮类型，`search` 为搜索按钮，`cancel` 为取消按钮 | oneOf('search', 'cancel') | - | `'search'` |
| value | 输入框的值 | string | 是 | - |
| onChange | 输入框值变化回调 | function | 是 | - |
| autoFocus | 是否自动聚焦 | boolean | - | `false` |
| onSearch | 点击搜索按钮回调 | function | - | `_.noop` |
| onCancel | 点击取消按钮回调 | function | - | `_.noop` |
| placeholder | 占位文本 | string | - | `'搜索'` |
| searchText | 自定义按钮文案 | string | - | - |

### 示例

```jsx
class Demo extends React.Component {
  state = { value: '' }

  render () {
    return (
      <Search
        placeholder='在站内搜索'
        value={this.state.value}
        onChange={value => this.setState({ value })}
        onSearch={() => console.log('搜索')}
      />
    )
  }
}
```

---

## SearchPage

搜索页面组件。当 `active` 为 true 时显示搜索栏（带取消按钮），为 false 时显示自定义 header。内部基于 Page 组件。

### Props

| 参数 | 说明 | 类型 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| active | 是否激活搜索状态 | boolean | 是 | - |
| value | 搜索输入框的值 | string | 是 | - |
| onChange | 搜索输入框值变化回调 | function | 是 | - |
| onCancel | 点击取消按钮回调 | function | 是 | - |
| onSearch | 搜索回调 | function | - | `_.noop` |
| header | 非搜索状态下的头部内容 | node | - | - |
| children | 页面内容 | node | - | - |
| className | 自定义类名 | string | - | - |
| pageClassName | 页面内容区域的自定义类名 | string | - | - |
| white | 是否使用白色背景 | boolean | - | - |
| tabbar | 底部标签栏 | node | - | - |
| bottom | 底部内容 | node | - | - |

### 示例

```jsx
class Demo extends React.Component {
  state = {
    active: false,
    value: '',
    searchValue: ''
  }

  render () {
    return (
      <SearchPage
        header={<Header title='首页' right={<i className='weui-icon-search' />} onClick={() => this.setState({ active: true, value: '' })} />}
        active={this.state.active}
        value={this.state.value}
        onChange={value => this.setState({ value })}
        onSearch={() => this.setState({ searchValue: this.state.value })}
        onCancel={() => this.setState({ active: false })}
      >
        {/* 页面内容 */}
      </SearchPage>
    )
  }
}
```

---

## FakeSearch

假搜索框组件，仅展示搜索框样式，通常作为搜索入口使用。

### Props

| 参数 | 说明 | 类型 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| placeholder | 占位文本 | string | - | `'搜索'` |
| center | 内容是否居中 | boolean | - | - |
| light | 是否使用浅色背景 | boolean | - | - |
| onClick | 点击回调 | function | - | - |
| children | 搜索框内部额外内容 | node | - | - |

### 示例

```jsx
<FakeSearch
  placeholder='站内搜索'
  className='text-center'
  onClick={() => {}}
/>

<FakeSearch center />

<FakeSearch light placeholder='' />
```

## 注意事项

- Search 组件的 type 为 `'search'` 时显示搜索按钮，为 `'cancel'` 时显示取消按钮。
- SearchPage 内部自动管理 header 的切换，激活时用 Search 组件替代 header。
- FakeSearch 是纯展示组件，不包含实际的输入功能。
