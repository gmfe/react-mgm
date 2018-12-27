import React from 'react'
import Page from '../../src/component/page'
import NProgress from '../../src/component/nprogress'

class NProgressWrap extends React.Component {
  render () {
    return (
      <Page white>
        <h2>nprogress</h2>
        <button className='weui-btn weui-btn_default weui-btn_mini' onClick={() => NProgress.start()}>start
        </button>
        <button className='weui-btn weui-btn_default weui-btn_mini' onClick={() => NProgress.done()}>done
        </button>
      </Page>
    )
  }
}

export default NProgressWrap
