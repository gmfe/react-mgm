import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import Base from './base'

// 恶心的转换逻辑在这里做
class List extends React.Component {
  refList = React.createRef()

  apiDoScrollToLabel = (label) => {
    this.refList.current.apiDoScrollToLabel(label)
  }

  apiDoScrollToValue = (label) => {
    this.refList.current.apiDoScrollToValue(label)
  }

  handleSelected = (selected) => {
    const { multiple, onSelect } = this.props

    if (multiple) {
      onSelect(selected)
    } else {
      onSelect(selected[0])
    }
  }

  render () {
    const {
      data,
      selected,
      multiple,
      isGroupList,
      ...rest
    } = this.props

    let oData
    if (isGroupList) {
      oData = data
    } else {
      oData = [{
        label: '',
        children: data
      }]
    }

    let oSelected
    if (multiple) {
      oSelected = selected || []
    } else {
      oSelected = selected ? [selected] : []
    }

    return (
      <Base
        {...rest}
        ref={this.refList}
        data={oData}
        selected={oSelected}
        onSelect={this.handleSelected}
        multiple={multiple}
        isGroupList={isGroupList}
      />
    )
  }
}

List.propTypes = {
  // 基本属性
  data: PropTypes.array.isRequired, // value text
  selected: PropTypes.any,
  onSelect: PropTypes.func,
  multiple: PropTypes.bool, // true，则 selected 是数组

  // 展示
  renderItem: PropTypes.func,

  isGroupList: PropTypes.bool
}

List.defaultProps = {
  multiple: false,
  onSelect: _.noop,
  renderItem: item => item.text
}

export default List
