import React from 'react'
import Flex from '../flex'

class Divider extends React.Component {
  render () {
    const { children } = this.props
    return (
      <Flex className='divider'>
        <Flex flex className='divider-line'/>
        <div className='gm-padding-lr-10'>
          {typeof children === 'string' ? <h4>{children}</h4> : children}
        </div>
        <Flex flex className='divider-line'/>
      </Flex>
    )
  }
}

export default Divider
