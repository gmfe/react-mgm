import React from 'react'
import CursorFix from '../../src/component/cursor_fix'

class CursorFixWrap extends React.Component {
  render () {
    return (
      <div>
        <CursorFix
          component='input'
          type='text'
          className='weui-input border'
          name='name'
          onClick={() => console.log('click')}
        />
        <input type='text' className='weui-input border'/>
      </div>
    )
  }
}

export default CursorFixWrap
