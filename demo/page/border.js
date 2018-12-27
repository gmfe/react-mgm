import React from 'react'
import Page from '../../src/component/page'

class BorderWrap extends React.Component {
  render () {
    return (
      <Page white>
        <h3>边框</h3>
        <div className='border margin-4'>
          border
        </div>
        <div className='border-bottom margin-4'>
          border bottom
        </div>
        <div className='border-top margin-4'>
          border top
        </div>

        <h3>1x 边框(用前请了解其原理)</h3>
        <div className='border-1px-before margin-4'>
          border 1x
        </div>
        <div className='border-1px-bottom-after margin-4'>
          border 1x bottom
        </div>
        <div className='border-1px-top-before margin-4'>
          border 1x top
        </div>
      </Page>
    )
  }
}

export default BorderWrap
