import React from 'react'
import Tooltip from '../../src/component/tooltip'
import Flex from '../../src/component/flex'
import Trigger from '../../src/component/trigger'

class TooltipWrap extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.renderPopup = ::this.renderPopup
  }

  renderPopup () {
    return (
      <Tooltip placement='bottomRight' style={{ width: '250px' }}>
        这是一个tooltip bottomRight (default)
      </Tooltip>
    )
  }

  render () {
    return (
      <Flex column>
        <Flex style={{ margin: '5px 15px' }}>
          Tooltip需要配合Trigger使用，注意Tooltip的'topLeft', 'topRight', 'bottomLeft',
          'bottomRight'合Trigger的'right'、'top'的搭配
        </Flex>
        <Flex justifyEnd style={{ margin: '30px 20px' }}>
          <Trigger component={<div/>} right adjustX={20} popup={this.renderPopup()}>
            <button className='weui-btn weui-btn_primary weui-btn_mini'>bottomRight (default)
            </button>
          </Trigger>
        </Flex>

        <Flex style={{ margin: '30px 20px' }}>
          <Trigger
            component={<div/>}
            timeout={2000}
            popup={
              <Tooltip placement='bottomLeft' style={{ width: '250px' }}>
                这是一个tooltip bottomLeft
              </Tooltip>
            }
          >
            <button className='weui-btn weui-btn_primary weui-btn_mini'>bottomLeft with timeout
            </button>
          </Trigger>
        </Flex>

        <Flex justifyEnd style={{ margin: '30px 20px' }}>
          <Trigger
            component={<div/>}
            top
            right
            adjustX={20}
            mask
            popup={
              <Tooltip placement='topRight' style={{ width: '250px' }}>
                这是一个tooltip topRight
              </Tooltip>
            }
          >
            <button className='weui-btn weui-btn_primary weui-btn_mini'>topRight with mask
            </button>
          </Trigger>
        </Flex>

        <Flex style={{ margin: '30px 20px' }}>
          <Trigger
            component={<div/>}
            top
            adjustX={30}
            mask
            popup={<Tooltip placement='topLeft' style={{ width: '250px' }}
            >
              这是一个tooltip topLeft
            </Tooltip>}
          >
            <button className='weui-btn weui-btn_primary weui-btn_mini'>topLeft with mask
            </button>
          </Trigger>
        </Flex>

        <Flex style={{ margin: '30px 20px' }}>
          <Trigger
            component={<div/>}
            type='hover'
            top
            mask
            popup={<Tooltip placement='topLeft' style={{ width: '250px' }}
            >
              这是一个tooltip topLeft (hover)
            </Tooltip>}
          >
            <button className='weui-btn weui-btn_primary weui-btn_mini'>topLeft (hover)
            </button>
          </Trigger>
        </Flex>
      </Flex>
    )
  }
}

export default TooltipWrap
