import React from 'react'
import PropTypes from 'prop-types'
import List from '../list'
import Letter from './letter'
import { data2Group } from './util'
import classNames from 'classnames'

class LetterIndex extends React.Component {
  refList = React.createRef()

  handleSelect = (selected) => {
    this.props.onSelect(selected)
  }

  handleLetter = (letter) => {
    this.refList.current.apiDoScrollToLabel(letter)
  }

  render () {
    const { selected, data, renderItem, className, style, getFirstLetter, ...rest } = this.props
    const gData = data2Group(data, getFirstLetter)

    return (
      <div
        {...rest}
        className={classNames('bg-default', className)}
        style={{
          width: '100%',
          height: '100%',
          ...style
        }}
      >
        <List
          ref={this.refList}
          className='overflow-y relative'
          style={{ height: '100%' }}
          data={gData}
          selected={selected}
          onSelect={this.handleSelect}
          renderItem={renderItem}
          isGroupList
        />
        <Letter onChange={this.handleLetter}/>
      </div>
    )
  }
}

LetterIndex.propTypes = {
  data: PropTypes.array.isRequired, // [{value, text}]
  selected: PropTypes.any,
  onSelect: PropTypes.func.isRequired,
  getFirstLetter: PropTypes.func.isRequired, // 传入获取首拼的函数
  renderItem: PropTypes.func
}

LetterIndex.defaultProps = {
  renderItem: item => item.text
}

export default LetterIndex
