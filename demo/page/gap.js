import React from 'react'
import Page from '../../src/component/page'

class GapWrap extends React.Component {
  render () {
    return (
      <Page white>
        <h2>gap</h2>
        <hr/>
        <div>gap 即间距的，用来快速布局</div>
        <div>有 5 种尺寸，分别是0 4 8 12 16(px)</div>
        <div>有以下形式：</div>
        <div className='border padding-8'>
          padding-8
        </div>
        <div className='border padding-top-8'>
          padding-top-8
        </div>
        <div className='border padding-bottom-8'>
          padding-bottom-8
        </div>
        <div className='border padding-left-8'>
          padding-left-8
        </div>
        <div className='border padding-right-8'>
          padding-right-8
        </div>
        <div className='border padding-lr-8'>
          padding-lr-8 lr表示左右
        </div>
        <div className='border padding-tb-8'>
          padding-tb-8 tb表示上下
        </div>
        <div>
          margin-x margin-top-x margin-bottom-x margin-left-x margin-right-x margin-lr-x margin-tb-x 同理
        </div>

      </Page>
    )
  }
}

export default GapWrap
