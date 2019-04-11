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
    return (
      <div
        onClick={this.renderSelect}
        className='padding-tb-8'
      >
        <Flex
          className='padding-lr-16'
          alignCenter
          flex
        >
          <Flex flex>{selected.name}</Flex>
          <Flex justifyEnd><i className='xfont xfont-down-small'/></Flex>
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
