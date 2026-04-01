# Calendar 日历

## 简介

日历组件，支持日期范围选择，可选择起始日期和结束日期。支持设置可选日期的最小值和最大值限制，并可选择是否显示备注标签。

## 使用

```jsx
import { Calendar } from 'react-mgm'
```

## API

### Props

| 属性 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| begin | object | 否 | 起始日期（Date 对象） |
| end | object | 否 | 结束日期（Date 对象） |
| onChange | function | 否 | 日期变更回调函数，参数为 `{ begin, end }` |
| min | object | 否 | 可选的最小日期限制（Date 对象） |
| max | object | 否 | 可选的最大日期限制（Date 对象） |
| label | boolean | 否 | 是否显示备注标签（起始/结束/单天），默认 `false` |

### 默认值

| 属性 | 默认值 |
| --- | --- |
| onChange | `_.noop`（空函数） |
| label | `false` |

### 实例方法

| 方法 | 说明 |
| --- | --- |
| apiScrollToBegin() | 滚动到选中日期的起始位置 |

## 示例

### 基础用法

```jsx
import React, { useState, useRef, useEffect } from 'react'
import moment from 'moment'
import { Calendar } from 'react-mgm'

function CalendarDemo() {
  const [begin, setBegin] = useState(moment().add(-4, 'd').toDate())
  const [end, setEnd] = useState(moment().toDate())
  const refCalendar = useRef(null)

  useEffect(() => {
    refCalendar.current.apiScrollToBegin()
  }, [])

  return (
    <div style={{ height: '400px', overflow: 'auto' }}>
      <Calendar
        ref={refCalendar}
        min={moment().add(-1, 'month').toDate()}
        max={moment().toDate()}
        begin={begin}
        end={end}
        label
        onChange={({ begin, end }) => {
          console.log(
            moment(begin).format('YYYY-MM-DD'),
            moment(end).format('YYYY-MM-DD')
          )
          setBegin(begin)
          setEnd(end)
        }}
      />
    </div>
  )
}
```

## 注意事项

- `begin` 和 `end` 类型为 JavaScript `Date` 对象，内部使用 `moment` 进行处理。
- `min` 和 `max` 用于限制可选的日期范围，超出范围的日期将显示为禁用状态。
- 组件需要放在一个有固定高度且可滚动的容器中，以便显示多个月份。
- 首次选择时同时设置开始和结束日期，第二次选择时设置结束日期；若结束日期小于开始日期，则重新设置开始日期。
- `label` 属性开启后，会在选中日期上显示"起始"、"结束"或"单天"的备注文字。
- 可通过 `ref` 调用 `apiScrollToBegin()` 方法滚动到选中起始日期的位置。
