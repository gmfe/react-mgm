import React from 'react'
import Page from '../../src/component/page'
import LazyImg from '../../src/component/lazy_img'

class LazyImgWrap extends React.Component {
  render () {
    const gmLogo = 'https://js.guanmai.cn/static_storage/json/common/logo/default/logo2.png'

    return (
      <Page className='lazy-img-wrap'>
        <LazyImg
          placeholder={'https://placeholdit.imgix.net/~text?txtsize=23&bg=f7f7f7&txt=loading&w=250&h=250'}
          src={gmLogo}
        />
        <div style={{ height: '900px' }}>
          滚到下面看图片
        </div>
        <LazyImg
          placeholder={'https://placeholdit.imgix.net/~text?txtsize=23&bg=f7f7f7&txt=loading&w=250&h=250'}
          src={gmLogo}
        />
        <LazyImg
          src={gmLogo}
        />
      </Page>
    )
  }
}

export default LazyImgWrap
