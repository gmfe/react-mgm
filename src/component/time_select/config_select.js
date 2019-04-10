import React from 'react'
import _ from 'lodash'
import Flex from '../flex'
import Select from '../select'
import PropTypes from 'prop-types'

class Component extends React.Component {
  renderSelect = () => {
    const { data, selected, onChange } = this.props
    Select.render({
      data,
      value: selected.value
    }).then(v => {
      const value = _.find(data, item => {
        return v === item.value
      })
      value && onChange(value)
    })
  }

  render () {
    const { selected } = this.props
    const btnStyle = { lineHeight: 2.5, fontSize: '1.05em' }
    return (
      <div
        onClick={this.renderSelect}
        className='padding-bottom-8 padding-lr-16'
      >
        <Flex className='padding-tb-4'>
          <Flex alignCenter flex={1}>运营时间</Flex>
          <Flex justifyEnd alignCenter>
            <i style={{ fontSize: '1em' }} className='xfont xfont-down-small'/>
          </Flex>
        </Flex>
        <Flex column className='padding-tb-4'>
          <button
            style={btnStyle}
            className='weui-btn weui-btn_primary'
          >{selected.name}
          </button>
        </Flex>
      </div>
    )
  }
}

Component.propTypes = {
  onSelect: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  selected: PropTypes.object.isRequired
}

export default Component
