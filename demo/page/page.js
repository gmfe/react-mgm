import React from 'react'
import Page from '../../src/component/page'
import _ from 'lodash'

const config = [{
  to: '/home',
  name: '首页',
  icon: <i className='ifont ifont-home-o'/>,
  icon_on: <i className='ifont ifont-home-f'/>
}, {
  to: '/product',
  name: '分类',
  icon: <i className='ifont ifont-category-o'/>,
  icon_on: <i className='ifont ifont-category-f'/>
}, {
  to: '/cart',
  name: '购物车',
  icon: <i className='ifont ifont-cart-o'/>,
  icon_on: <i className='ifont ifont-cart-f'/>
}, {
  to: '/order',
  name: '订单',
  icon: <i className='ifont ifont-order-o'/>,
  icon_on: <i className='ifont ifont-order-f'/>
}, {
  to: '/my',
  name: '我的',
  icon: <i className='ifont ifont-my-o'/>,
  icon_on: <i className='ifont ifont-my-f'/>
}]

class PageWrap extends React.Component {
  render () {
    return (
      <Page
        header={<div>header</div>}
        tabbar={(
          <div className='weui-tabbar' style={{ height: '44px' }}>
            {_.map(config, (value, i) => {
              return (
                <div
                  key={i}
                  className={'weui-tabbar__item'}
                >
                  <div className={'weui-tabbar__icon'}>
                    {value.icon}
                  </div>
                  <p className='weui-tabbar__label'>{value.name}</p>
                </div>
              )
            })}
          </div>
        )}
        bottom={<div>bottom</div>}
      >
        <div>page</div>
      </Page>
    )
  }
}

export default PageWrap
