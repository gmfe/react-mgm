import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import _ from 'lodash'
import PickerColumn from './picker_column'

class Picker extends React.Component {
  handleChange = (index, option) => {
    const { onChange, values } = this.props
    const newValues = values.slice()

    newValues[index] = option.value

    onChange(newValues)
  }

  render () {
    const {
      datas,
      values,
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

    return (
      <div
        {...rest}
        className={classNames('picker', className)}
      >
        <div className='picker-inner' style={{ height: itemHeight * 6 }}>
          {_.map(datas, (v, i) => (
            <PickerColumn
              key={i}
              index={i}
              options={v}
              renderOption={renderOption}
              value={values[i]}
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

Picker.propTyps = {
  datas: PropTypes.array.isRequired, // [ [{value, text}] ]
  values: PropTypes.array.isRequired,
  itemHeight: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  renderOption: PropTypes.func
}

Picker.defaultProps = {
  itemHeight: 36,
  renderOption: (dataIndex, option) => option.text // 此 dataIndex 是 datas 的所以
}

export default Picker
