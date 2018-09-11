import React from 'react'
import PropTypes from 'prop-types'
import Popup from '../popup'
import Picker from '../picker'
import Flex from '../flex'
import { getLocale } from '../../locales'
import _ from 'lodash'

class PopupPicker extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      optionGroups: props.optionGroups,
      valueGroups: props.valueGroups
    }
  }

  handleChange = (index, value) => {
    const values = this.state.valueGroups.slice()

    values[index] = value

    this.setState({
      valueGroups: values
    })
  }

  handleCancel = () => {
    this.props.onCancel()
  }

  handleConfirm = () => {
    this.props.onConfirm(this.state.valueGroups)
  }

  render () {
    const {optionGroups, valueGroups} = this.state

    return (
      <div>
        <Flex justifyBetween className='border-1px-after'>
          <div
            className='text-link padding-lr-12 padding-tb-8'
            onClick={this.handleCancel}
          >{getLocale('dialog', 'cancelText')}</div>
          <div
            className='text-link padding-lr-12 padding-tb-8'
            onClick={this.handleConfirm}
          >{getLocale('dialog', 'confirmText')}</div>
        </Flex>
        <Picker
          optionGroups={optionGroups}
          valueGroups={valueGroups}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

PopupPicker.render = (props) => {
  Popup.render({
    bottom: true,
    children: <PopupPicker {...props}/>
  })
}

PopupPicker.hide = () => {
  Popup.hide()
}

PopupPicker.propTypes = {
  optionGroups: PropTypes.array.isRequired,
  valueGroups: PropTypes.array.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
}

PopupPicker.defaultProps = {
  onConfirm: _.noop,
  onCancel: _.noop
}

export default PopupPicker
