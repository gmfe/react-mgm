import React from 'react'
import Page from '../../src/component/page'
import Square from '../../src/component/square'

class SquareWrap extends React.Component {
  render () {
    return (
      <Page>
        <div style={{ width: '50%' }}>
          <Square className='bg-white'>
            <img src='' style={{ width: '100%', height: '100%' }} alt=''/>
          </Square>
        </div>
      </Page>
    )
  }
}

export default SquareWrap
