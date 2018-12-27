import React from 'react'
import Page from '../../src/component/page'

class ThemeWrap extends React.Component {
  render () {
    return (
      <Page white>
        <div className='color padding-12'>
          <h3>色系</h3>
          <div>
            <span className='strip default'/> 默认字体色
          </div>
          <div>
            <span className='strip desc'/> 辅助字体色
          </div>
          <div>
            <span className='strip disabled'/> 不可用字体色
          </div>
          <hr/>
          <div>
            <span className='strip primary'/> 主色(覆盖weui的主色)
          </div>
          <div>
            <span className='strip warn'/> 危险色(删除操作)
          </div>
          <hr/>
          <div>
            <span className='strip border'/> 边框色
          </div>
          <div>
            <span className='strip red'/> 红色(价格 红点)
          </div>
          <hr/>
          <div>
            <span className='strip coral'/> 珊瑚红 Coral
          </div>
          <div>
            <span className='strip apricot'/> 杏 Apricot
          </div>
          <div>
            <span className='strip mint'/> 薄荷蓝 Mint
          </div>
          <div>
            <span className='strip teal'/> 蓝绿 Teal
          </div>
          <div>
            <span className='strip arctic'/> 青蓝 Arctic
          </div>
          <div>
            <span className='strip violet'/> 蓝紫 Violet
          </div>

        </div>
        <div className='bg'>
          <h3>背景</h3>
          两种:
          <div>1 白色背景色</div>
          <div className='default'>2 默认背景色</div>
        </div>
        <div>
          <h3>按钮</h3>
          <button className='weui-btn weui-btn_primary'>primary</button>
          <button className='weui-btn weui-btn_primary weui-btn_disabled' disabled>primary disabled</button>

          <button className='weui-btn weui-btn_warn'>warn</button>
          <button className='weui-btn weui-btn_warn weui-btn_disabled' disabled>warn</button>

          <button className='weui-btn weui-btn_plain-primary'>plain primary</button>
          <button className='weui-btn weui-btn_plain-default weui-btn_disabled' disabled>plain default</button>

          <h4 className='margin-top-12'>通用按钮 size</h4>
          <button className='weui-btn weui-btn_plain-primary btn-default-size-sm'>primary sm</button>
          <button className='weui-btn weui-btn_plain-primary btn-default-size'>primary default</button>
          <button className='weui-btn weui-btn_plain-primary weui-btn_disabled btn-default-size-130' disabled>primary
            130 width
          </button>
        </div>
      </Page>
    )
  }
}

export default ThemeWrap
