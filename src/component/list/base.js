import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import classNames from 'classnames'

// 不要轻易改这个文件

class Base extends React.Component {
  refList = React.createRef()
  _isMounted = false

  apiDoScrollToLabel = (label) => {
    // 找第一个即可
    if (!this._isMounted) {
      const $dom = this.refList.current.querySelector(`[data-label="${label}"]`)
      if ($dom) {
        $dom.scrollIntoViewIfNeeded()
      }
    }
  }

  apiDoScrollToValue = (value) => {
    // 找第一个即可
    if (!this._isMounted) {
      const $dom = this.refList.current.querySelector(`[data-value="${value}"]`)
      if ($dom) {
        $dom.scrollIntoViewIfNeeded()
      }
    }
  }

  componentWillUnmount () {
    this._isMounted = true
  }

  handleSelect = (item) => {
    const { multiple, selected, onSelect } = this.props
    if (multiple) {
      onSelect(_.xor(selected, [item.value]))
    } else {
      onSelect([item.value])
    }
  }

  render () {
    const {
      data, isGroupList,
      selected, multiple, onSelect, isScrollTo, // eslint-disable-line
      renderItem,
      ...rest
    } = this.props

    return (
      <div
        {...rest}
        ref={this.refList}
      >
        {_.map(data, group => (
          <div key={group.label} data-label={group.label}>
            <div className='bg-default padding-lr-8 padding-tb-4 text-12'>{group.label}</div>
            {_.map(group.children, item => (
              <div
                key={item.value}
                data-value={item.value}
                className={classNames('bg-white padding-8 border-1px-bottom-after', {
                  'text-primary': selected.includes(item.value),
                  'disabled text-disabled': item.disabled
                })}
                onClick={this.handleSelect.bind(this, item)}
              >
                {renderItem(item)}
              </div>
            ))}
          </div>
        ))}
      </div>
    )
  }
}

Base.propTypes = {
  // 基本属性
  data: PropTypes.array.isRequired, // label, children: [{ value text}]
  selected: PropTypes.array.isRequired,
  onSelect: PropTypes.func, // 返回数组
  multiple: PropTypes.bool,

  // 展示
  renderItem: PropTypes.func,

  isGroupList: PropTypes.bool // 在这里仅仅表示数据的类型，对UI有影响而已
}

Base.defaultProps = {
  multiple: false,
  onSelect: _.noop,
  renderItem: item => item.text
}

export default Base
