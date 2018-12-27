import React from 'react'

class TabsWrap extends React.Component {
  render () {
    return (
      <div>
        <div className='tabs'>
          <div className='tabs-item'>
            <div className='tabs-item-text'>选项一</div>
          </div>
          <div className='tabs-item active'>
            <div className='tabs-item-text'>选项二</div>
          </div>
          <div className='tabs-item'>
            <div className='tabs-item-text'>选项三</div>
          </div>
        </div>
      </div>
    )
  }
}

export default TabsWrap
