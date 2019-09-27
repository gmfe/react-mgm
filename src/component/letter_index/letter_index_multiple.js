import { getLocale } from '../../locales'
import React from 'react'
import PropTypes from 'prop-types'
import List from '../list'
import Letter from './letter'
import Flex from '../flex'
import { data2Group } from './util'
import classNames from 'classnames'

class LetterIndexMultiple extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      selected: props.selected || []
    }
  }

  refList = React.createRef()

  handleSelect = (selected) => {
    this.setState({
      selected
    })
  }

  handleLetter = (letter) => {
    this.refList.current.apiDoScrollToLabel(letter)
  }

  handleCancel = () => {
    this.props.onCancel()
  }

  handleConfirm = () => {
    this.props.onSelect(this.state.selected)
  }

  render () {
    const {
      data, renderItem,
      selected, onSelect, onCancel, // eslint-disable-line
      className, style,
      getFirstLetter,
      ...rest
    } = this.props

    const gData = data2Group(data, getFirstLetter)

    return (
      <Flex
        {...rest}
        column
        className={classNames('bg-default', className)}
        style={{
          width: '100%',
          height: '100%',
          ...style
        }}
      >
        <Flex column flex className='relative' style={{ height: '100%' }}>
          <List
            ref={this.refList}
            className='overflow-y relative'
            style={{ height: '100%' }}
            data={gData}
            selected={this.state.selected}
            onSelect={this.handleSelect}
            renderItem={renderItem}
            multiple
            isGroupList
          />
          <Letter onChange={this.handleLetter}/>
        </Flex>
        <Flex className='bg-white' style={{
          height: '45px'
        }}>
          <Flex
            flex
            justifyCenter
            alignCenter
            onClick={this.handleCancel}
            className='border-1px-top-before border-1px-right-after'
          >
            {getLocale('取消')}
          </Flex>
          <Flex
            flex
            justifyCenter
            alignCenter
            onClick={this.handleConfirm}
            className='border-1px-top-before b-bg-primary text-white'
          >
            {getLocale('确定')}
          </Flex>
        </Flex>
      </Flex>
    )
  }
}

LetterIndexMultiple.propTypes = {
  data: PropTypes.array.isRequired, // [{value, text}]
  selected: PropTypes.array,
  onSelect: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  getFirstLetter: PropTypes.func.isRequired, // 传入获取首拼的函数,
  renderItem: PropTypes.func
}

LetterIndexMultiple.defaultProps = {
  renderItem: item => item.text
}

export default LetterIndexMultiple
