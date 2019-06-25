import { getLocale } from '../../locales'
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Mask from '../mask/index'
import _ from 'lodash'
import { ConfirmPicker } from '../picker'

class Select extends React.Component {
  handleCancel = (e) => {
    e.preventDefault()

    this.props.onCancel(e)
  }

  handleClick = (e) => {
    e.preventDefault()

    const index = e.currentTarget.dataset.index
    this.props.onChange(this.props.data[index].value)
  }

  render () {
    const {
      show,
      data,
      value,
      className,
      onChange, onCancel, // eslint-disable-line
      ...rest
    } = this.props

    const cn = classNames('select-popup-list', className)

    if (!show) {
      return null
    }

    return (
      <div className='select-popup'>
        <Mask show={show} opacity={0.1} onClick={this.handleCancel}/>
        <div {...rest} className={cn}>
          {(!data || data.length === 0) && <span className='text-desc'>{getLocale('没有数据')}</span>}
          {_.map(data, (v, i) => (
            <div
              key={i}
              data-index={i}
              className={classNames('select-popup-list-item', {
                active: v.value === value
              })}
              onClick={this.handleClick}
            >{v.text}</div>
          ))}
        </div>
      </div>
    )
  }
}

Select.render = ({ data, value, title }) => {
  // 转换下
  const datas = [data]
  const values = []

  // 找不到得有个默认的
  const item = _.find(data, v => v.value === value)
  if (item) {
    values[0] = item.value
  } else {
    values[0] = data[0].value
  }

  console.log(datas)

  return ConfirmPicker.render({
    title: title || getLocale('选择'),
    datas,
    values
  }).then(values => {
    // 转回去
    const item = _.find(data, v => v.value === values[0])
    return item.value
  })
}

Select.hide = () => {
  ConfirmPicker.hide()
}

Select.propTypes = {
  show: PropTypes.bool.isRequired,
  data: PropTypes.array,
  title: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  onCancel: PropTypes.func
}

Select.defaultProps = {
  data: [], // [{value, text}]
  value: null,
  onCancel: _.noop
}

export default Select
