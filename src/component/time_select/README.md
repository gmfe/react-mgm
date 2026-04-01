# TimeSelect 时间选择

## 简介

时间选择组件，结合日历和运营周期配置，支持选择运营时间范围。点击触发器后会弹出全屏弹窗，内含日历和运营周期选择器。

## 使用

```jsx
import { TimeSelect } from 'react-mgm'
```

## API

### Props

| 属性 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| title | string | 否 | 弹窗标题，默认 `'选择运营时间'` |
| text | string | 否 | 触发器上显示的文本 |
| className | string | 否 | 触发器的自定义类名 |
| showText | boolean | 否 | 是否显示运营周期选择区域，默认 `true` |
| type | number | 否 | 选择模式：`0` 为选一个周期后自动确认，`1` 为选多个周期后手动点确认，默认 `1` |
| begin | object | 是 | 起始日期（Date 对象或 moment 对象） |
| end | object | 是 | 结束日期（Date 对象或 moment 对象） |
| data | array | 是 | 时间配置列表，每项需包含 `value`、`text`、`name` 等字段 |
| selected | object | 是 | 当前选中的时间配置对象 |
| onChange | function | 是 | 变更回调，参数为 `{ time: { begin, end }, selected }` |
| getRange | function | 是 | 根据当前选中的配置返回可选日期范围，参数为 `selected`，返回 `{ min, max }` |

## 示例

### 基础用法

```jsx
import React from 'react'
import moment from 'moment'
import { TimeSelect } from 'react-mgm'

class TimeSelectDemo extends React.Component {
  constructor(props) {
    super(props)
    this.data = [
      {
        name: '全天售卖',
        value: 'ST2714',
        text: '全天售卖',
        receive_time_limit: { e_span_time: 1 },
        type: 1
      },
      {
        name: '预售运营时间',
        value: 'ST2128',
        text: '预售运营时间',
        receive_time_limit: { e_span_time: 6 },
        type: 2
      }
    ]
    this.state = {
      selected: this.data[0],
      time: {
        begin: moment().toDate(),
        end: moment().toDate()
      }
    }
  }

  handleChange = ({ time, selected }) => {
    if (time) this.setState({ time })
    if (selected) this.setState({ selected })
  }

  getRange = (selected) => {
    const { e_span_time } = selected.receive_time_limit
    return {
      min: moment().add(-(30 - e_span_time), 'day').toDate(),
      max: moment().add(selected.type === 2 ? e_span_time : 0, 'day').toDate()
    }
  }

  render() {
    const { time, selected } = this.state
    return (
      <TimeSelect
        title='选择时间'
        text={this.renderText()}
        type={1}
        begin={time.begin}
        end={time.end}
        data={this.data}
        selected={selected}
        onChange={this.handleChange}
        getRange={this.getRange}
      />
    )
  }
}
```

## 注意事项

- `begin` 和 `end` 支持 JavaScript `Date` 对象或 `moment` 对象。
- `data` 数组中的每一项需包含 `value` 和 `text` 字段，用于运营周期的选择。
- `getRange` 函数根据当前选中的运营周期配置动态计算日历的可选范围（`min` 和 `max`）。
- `type` 设为 `0` 时，选择日期范围后会自动关闭弹窗；设为 `1` 时需手动点击确定按钮。
- 组件内部依赖 `Popup` 弹窗组件，点击触发器后从底部弹出全屏弹窗。
