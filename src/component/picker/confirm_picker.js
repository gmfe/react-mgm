import { getLocale } from '../../locales'
import React from 'react'
import PropTypes from 'prop-types'
import Picker from './picker'
import Flex from '../flex'
import _ from 'lodash'
import PickerStatics from './statics'

class ConfirmPicker extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      values: props.values
    }
  }

  handleChange = (values) => {
    this.setState({
      values
    })
  }

  handleCancel = (e) => {
    e.preventDefault()
    this.props.onCancel()
  }

  handleConfirm = (e) => {
    e.preventDefault()
    this.props.onConfirm(this.state.values)
  }

  render () {
    const { itemHeight, datas, title, renderOption } = this.props
    const { values } = this.state

    return (
      <div>
        <Flex justifyBetween className='border-1px-bottom-after'>
          <div
            className='text-link padding-lr-12 padding-tb-8'
            onClick={this.handleCancel}
          >{getLocale('取消')}</div>
          <div className='padding-tb-8'>{title}</div>
          <div
            className='text-link padding-lr-12 padding-tb-8'
            onClick={this.handleConfirm}
          >{getLocale('确定')}</div>
        </Flex>
        <Picker
          datas={datas}
          values={values}
          renderOption={renderOption}
          itemHeight={itemHeight}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

ConfirmPicker.render = (props) => {
  return new Promise((resolve, reject) => {
    PickerStatics.render({
      bottom: true,
      onHide: () => {
        setTimeout(() => {
          reject(new Error())
        }, 50)
      },
      children: (
        <ConfirmPicker
          {...props}
          onConfirm={values => {
            PickerStatics.hide()
            setTimeout(() => {
              resolve(values)
            }, 50)
          }}
          onCancel={() => {
            PickerStatics.hide()
            setTimeout(() => {
              reject(new Error())
            }, 50)
          }}
        />
      )
    })
  })
}

ConfirmPicker.hide = () => {
  PickerStatics.hide()
}

ConfirmPicker.propTypes = {
  title: PropTypes.string,
  datas: PropTypes.array.isRequired,
  values: PropTypes.array.isRequired,
  renderOption: PropTypes.func,
  itemHeight: PropTypes.number,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
}

ConfirmPicker.defaultProps = {
  itemHeight: 32,
  onConfirm: _.noop,
  onCancel: _.noop
}

export default ConfirmPicker
