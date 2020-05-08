import React from 'react'
import Flex from '../flex'
import PropTypes from 'prop-types'
import _ from 'lodash'

const Component = (props) => {
  const handleReset = () => {
    props.onReset()
  }

  const handleSubmit = () => {
    props.onSubmit()
  }

  return (
    <Flex id='signature-bottom' className='padding-8 border-1px-top-before'>
      <Flex alignCenter justifyCenter flex className='border-1px-right-before'>
        <a className='text-16' onClick={handleReset}>
          重置
        </a>
      </Flex>
      <Flex alignCenter justifyCenter flex>
        <a className='text-16 text-primary' onClick={handleSubmit}>
          {props.viewOrEdit ? '确定签收' : '保存'}
        </a>
      </Flex>
    </Flex>
  )
}

Component.propTypes = {
  onReset: PropTypes.func,
  onSubmit: PropTypes.func,
  viewOrEdit: PropTypes.bool
}

Component.defaultProps = {
  onReset: _.noop,
  onSubmit: _.noop
}

export default Component
