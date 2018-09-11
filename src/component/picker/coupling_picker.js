import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import _ from 'lodash'
import PickerColumn from './picker_column'

class CouplingPicker extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      selected: props.values
    }
  }

  handleChange = (index, option) => {
    const { onChange } = this.props
    let { selected } = this.state
    selected[index] = option ? option.value : ''

    this.setState({ selected })
    onChange(selected)
  }

  render () {
    const { selected } = this.state
    const {
      datas,
      values, // eslint-disable-line
      itemHeight,
      onChange, // eslint-disable-line
      className,
      renderOption,
      ...rest
    } = this.props

    const highlightStyle = {
      height: itemHeight,
      marginTop: -(itemHeight / 2)
    }

    const arr = []
    let subList1 = []
    let subList2 = []
    for (let i = 0; i < selected.length; i++) {
      if (i === 0) {
        arr[0] = _.map(datas, v => {
          if (v.value === selected[i]) {
            subList1 = v.children
          }
          return {
            value: v.value,
            text: v.text
          }
        })
      } else if (i === 1) {
        arr[1] = _.map(subList1, v => {
          if (v.value === selected[i]) {
            subList2 = v.children
          }
          return {
            value: v.value,
            text: v.text
          }
        })
      } else {
        arr[i] = _.map(subList2, v => { return { value: v.value, text: v.text } })
      }
    }

    return (
      <div
        {...rest}
        className={classNames('picker', className)}
      >
        <div className='picker-inner' style={{ height: itemHeight * 6 }}>
          {_.map(arr, (v, i) => (
            <PickerColumn
              key={i}
              index={i}
              options={v}
              renderOption={renderOption}
              value={selected[i]}
              itemHeight={itemHeight}
              columnHeight={itemHeight * 6}
              onChange={this.handleChange}
            />
          ))}
          <div className='picker-highlight border-1px-top-before border-1px-bottom-after' style={highlightStyle}/>
        </div>
      </div>
    )
  }
}

CouplingPicker.propTyps = {
  datas: PropTypes.array.isRequired, // [{value, text, children: [{value, text, children: [{value, text, children: []}]}]}]
  values: PropTypes.array.isRequired,
  itemHeight: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  renderOption: PropTypes.func
}

CouplingPicker.defaultProps = {
  itemHeight: 36,
  renderOption: (dataIndex, option) => option.text // 此 dataIndex 是 datas 的所以
}

export default CouplingPicker
