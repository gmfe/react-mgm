import React from 'react'
import ReactDOM from 'react-dom'
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import {
  Button,
  Flex,
  Textarea,
  NProgress,
  Toast,
  Page,
  Infinite,
  Header,
  Slider,
  SliderLess,
  Popup,
  SearchBar,
  Square,
  Loading,
  LazyImg,
  Dialog,
  CursorFix,
  Select,
  Dropper,
  Trigger,
  Tooltip,
  PreviewImage,
  LayoutRoot,
  Price,
  Counter,
  Divider,
  Cells, CellsTitle, Cell, CellBody, CellFooter, CellSwipe, CellSwipeDeleteEdit,
  Picker, ConfirmPicker,
  Calendar
} from './../src/index'
import _ from 'lodash'
import moment from 'moment'

import { setCurrency } from '../src/util/currency'

import '../node_modules/gm-mfont/iconfont.css'
import './index.less'

class App extends React.Component {
  render () {
    return (
      <div>
        {React.cloneElement(this.props.children, {
          key: this.props.location.pathname
        })}
        <LayoutRoot/>
      </div>
    )
  }
}

class DemoWrap extends React.Component {
  render () {
    return (
      <Page
        infiniteLoader
        ptrOnRefresh={resolve => setTimeout(() => resolve(), 50000)}
      >
        <div>
          asdfaf
        </div>
      </Page>
    )
  }
}

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      left: false
    }

    this.list = [[{
      title: 'CSS',
      list: [
        {
          to: 'javascript:window.open("https://weui.io/")',
          text: 'WEUI'
        },
        {
          to: 'javascript:window.open("http://www.iconfont.cn/")',
          text: 'icon'
        },
        'theme',
        'border',
        'gap',
        'tabs',
        'badge'
      ]
    }], [{
      title: 'Component',
      list: [
        'button', 'flex', 'textarea', 'loading', 'toast', 'nprogress',
        'infinite', 'page', 'slider', 'popup', 'search',
        'square', 'lazyimg', 'dialog', 'cursorfix', 'select',
        'dropper', 'tooltip', 'previewimage', 'price', 'cell',
        'counter', 'divider', 'picker', 'calendar'
      ]
    }]]
  }

  render () {
    return (
      <Page header={<Header title={
        <div className='inline-block'>
          <Flex alignCenter>
            <img
              height='30px'
              src='https://avatars1.githubusercontent.com/u/14875414?s=200&v=4'
            />
            React MGM
          </Flex>
        </div>
      } left={<div/>}/>} tabbar={this.renderTabbar()}>
        <Flex>
          {_.map(this.list, (l, i) => (
            <Flex column flex key={i} className='margin-8'>
              {_.map(l, eList => (
                <div key={eList.title}>
                  <CellsTitle>{eList.title}</CellsTitle>
                  <Cells>
                    {_.map(eList.list, v => (
                      v.text ? (
                        <Cell key={v.text} href={v.to} access>
                          <CellBody>{v.text}</CellBody>
                          <CellFooter/>
                        </Cell>
                      ) : (
                        <Cell key={v} href={'#/' + v} access>
                          <CellBody>{v}</CellBody>
                          <CellFooter/>
                        </Cell>
                      )
                    ))}
                  </Cells>
                </div>
              ))}
            </Flex>
          ))}
        </Flex>
      </Page>
    )
  }

  renderTabbar () {
    return (
      <div className='weui-tabbar'>
        <a href='javascript:;' className='weui-tabbar__item weui-bar__item_on'>
          <div className='weui-tabbar__icon'>
            <img src='https://bshop.guanmai.cn/static/app/img/nav11.png' alt=''/>
          </div>
          <p className='weui-tabbar__label'>全部菜品</p>
        </a>
        <a href='javascript:;' className='weui-tabbar__item'>
          <div className='weui-tabbar__icon'>
            <img src='https://bshop.guanmai.cn/static/app/img/nav2.png' alt=''/>
          </div>
          <p className='weui-tabbar__label'>购物车</p>
        </a>
        <a href='javascript:;' className='weui-tabbar__item'>
          <div className='weui-tabbar__icon'>
            <img src='https://bshop.guanmai.cn/static/app/img/nav3.png' alt=''/>
          </div>
          <p className='weui-tabbar__label'>我的订单</p>
        </a>
        <a href='javascript:;' className='weui-tabbar__item'>
          <div className='weui-tabbar__icon'>
            <img src='https://bshop.guanmai.cn/static/app/img/nav4.png' alt=''/>
          </div>
          <p className='weui-tabbar__label'>我的</p>
        </a>
      </div>
    )
  }
}

class CellWrap extends React.Component {
  constructor (props) {
    super(props)

    this.handleDelete = ::this.handleDelete
    this.handleEdit = ::this.handleEdit

    this.state = {
      data: [{
        id: 1,
        text: '正文',
        footer: '可删除'
      }, {
        in: 2,
        text: '正文',
        footer: '可删除|可编辑'
      }]
    }
  }

  handleDelete (data) {
    console.log('delete', data)
  }

  handleEdit (data, name) {
    console.log('edit: ', data, name)
  }

  render () {
    const {data} = this.state
    return (
      <Page>
        <CellsTitle>仅正文（可点击）</CellsTitle>
        <Cells>
          <Cell access>
            <CellBody>正文</CellBody>
            <CellFooter/>
          </Cell>
        </Cells>
        <CellsTitle>正文 & 辅助文字，辅助字体颜色为 descColor（可点击）</CellsTitle>
        <Cells>
          <Cell access>
            <CellBody>正文</CellBody>
            <CellFooter className='text-desc'>辅助文字</CellFooter>
          </Cell>
        </Cells>

        <CellsTitle>正文 & 可变辅助文字，辅助字体颜色为 defaultColor（可点击）</CellsTitle>
        <Cells>
          <Cell access>
            <CellBody>正文</CellBody>
            <CellFooter className='text'>可变辅助文字</CellFooter>
          </Cell>
        </Cells>

        <CellsTitle>正文 & 辅助文字，辅助字体颜色为 defaultColor（可点击）</CellsTitle>
        <Cells>
          <Cell>
            <CellBody>正文</CellBody>
            <CellFooter className='text'>辅助文字</CellFooter>
          </Cell>
        </Cells>
        <CellsTitle>可删除</CellsTitle>
        <Cells>
          <CellSwipe
            key='1'
            bodyText={data[0].text}
            footerText={data[0].footer}
            onPress={() => (console.log('hello world'))}
            right={[{
              text: '不想看',
              onPress: this.handleDelete.bind(this, data[0]),
              style: {
                background: 'red'
              }
            }]}
          />
        </Cells>
        <CellsTitle>可删除+重命名</CellsTitle>
        <Cells>
          <CellSwipeDeleteEdit
            key='2'
            onDelete={this.handleDelete}
            list={data[1]}
            bodyText={data[1].text}
            footerText={data[1].footer}
            onPress={() => (console.log('hello world'))}
            onEdit={this.handleEdit}
          />
        </Cells>
      </Page>
    )
  }
}

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

class BadgeWrap extends React.Component {
  render () {
    return (
      <Page className='padding-8'>
        <div className='badge badge-primary'>
          ¥ 10086 / 斤
        </div>
        <br/>
        <div className='badge badge-apricot'>
          ¥ 10086 / 斤
        </div>
      </Page>
    )
  }
}

class FlexWrap extends React.Component {
  render () {
    return (
      <Page white>
        <h2>flex
          <small><i>具体见代码容易理解</i></small>
        </h2>
        <hr/>
        <div className='padding-12'>
          横向 默认 Flex
          <Flex>
            <Flex className='border'>
              1
            </Flex>
            <Flex flex className='border'>Flex flex 会占满</Flex>
          </Flex>
          纵向 Flex column
          <Flex column>
            <Flex className='border'>1</Flex>
            <Flex className='border'>2</Flex>
          </Flex>
        </div>
        <div className='padding-12'>
          不换行 默认 宽度会被压缩 FLex
          <Flex>
            <Flex className='border' style={{width: '100px'}}>100px</Flex>
            <Flex className='border' style={{width: '100px'}}>100px</Flex>
            <Flex className='border' style={{width: '100px'}}>100px</Flex>
            <Flex className='border' style={{width: '100px'}}>100px</Flex>
          </Flex>
          换行 FLex wrap
          <Flex wrap>
            <Flex className='border' style={{width: '100px'}}>100px</Flex>
            <Flex className='border' style={{width: '100px'}}>100px</Flex>
            <Flex className='border' style={{width: '100px'}}>100px</Flex>
            <Flex className='border' style={{width: '100px'}}>100px</Flex>
          </Flex>
        </div>
        <div className='padding-12'>
          Flex width height 如果定了width|height则不能被压缩
          <Flex>
            <Flex className='border' width={'100px'}>100px</Flex>
            <Flex className='border' width={'100px'}>100px</Flex>
            <Flex className='border' width={'100px'}>100px</Flex>
            <Flex className='border' width={'100px'}>100px</Flex>
          </Flex>
        </div>
        <div className='padding-12'>
          主轴对齐方式 默认 Flex
          <Flex>
            <Flex className='border' style={{width: '100px'}}>100px</Flex>
            <Flex className='border' style={{width: '100px'}}>100px</Flex>
          </Flex>
          主轴对齐方式 Flex justifyCenter
          <Flex justifyCenter>
            <Flex className='border' style={{width: '100px'}}>100px</Flex>
            <Flex className='border' style={{width: '100px'}}>100px</Flex>
          </Flex>
          主轴对齐方式 Flex justifyEnd
          <Flex justifyEnd>
            <Flex className='border' style={{width: '100px'}}>100px</Flex>
            <Flex className='border' style={{width: '100px'}}>100px</Flex>
          </Flex>
          主轴对齐方式 Flex justifyBetween
          <Flex justifyBetween>
            <Flex className='border' style={{width: '100px'}}>100px</Flex>
            <Flex className='border' style={{width: '100px'}}>100px</Flex>
          </Flex>
          主轴对齐方式 Flex justifyAround
          <Flex justifyAround>
            <Flex className='border' style={{width: '100px'}}>100px</Flex>
            <Flex className='border' style={{width: '100px'}}>100px</Flex>
          </Flex>
        </div>
        <div className='padding-12'>
          交叉轴对齐 默认 Flex
          <Flex>
            <Flex className='border' style={{width: '50px'}}>50 50</Flex>
            <Flex className='border' style={{width: '50px', height: '100px'}}>50 100</Flex>
          </Flex>
          交叉轴对齐 Flex alignEnd
          <Flex alignEnd>
            <Flex className='border' style={{width: '50px'}}>1<br/>2</Flex>
            <Flex className='border' style={{width: '50px'}}>1<br/>2<br/>3</Flex>
          </Flex>
          交叉轴对齐 Flex alignCenter
          <Flex alignCenter>
            <Flex className='border' style={{width: '50px'}}>1<br/>2</Flex>
            <Flex className='border' style={{width: '50px'}}>1<br/>2<br/>3</Flex>
          </Flex>
          交叉轴对齐 Flex alignStretch
          <Flex alignStretch>
            <Flex className='border' style={{width: '50px'}}>1<br/>2</Flex>
            <Flex className='border' style={{width: '50px'}}>1<br/>2<br/>3</Flex>
          </Flex>
          交叉轴对齐 Flex alignBaseline
          <Flex alignBaseline>
            <Flex className='border' style={{width: '50px'}}>1<br/>2</Flex>
            <Flex className='border padding-top-8' style={{width: '50px'}}>1<br/>2<br/>3</Flex>
          </Flex>
        </div>
      </Page>
    )
  }
}

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

class PriceWrap extends React.Component {
  constructor (props) {
    super(props)
    setCurrency('$')
  }

  render () {
    return (
      <div>
        <h3>用法</h3>
        <div className='margin-bottom-12'>
          在入口调用 './src/util/setCurrency' 文件中的 setCurrency 方法。方法只接收一个参数，即货币符号。
          默认是为 ¥。
        </div>
        <div>&lt;Price&gt;100&lt;/Price&gt;</div>
        <Price style={{'color': 'red'}}>100</Price>
      </div>
    )
  }
}

class CounterWrap extends React.Component {
  constructor (props) {
    super(props)

    this.handleCountMinus = ::this.handleCountMinus
    this.handleCountPlus = ::this.handleCountPlus
    this.handleCountNumEdit = ::this.handleCountNumEdit
    this.handleCountInputBlur = ::this.handleCountInputBlur

    this.state = ({
      amount: 9,
      maxAmount: 999
    })
  }

  handleCountMinus (amount) {
    console.log('minus: ', amount)

    this.setState({
      amount: amount
    })
  }

  handleCountPlus (amount) {
    console.log('add: ', amount)

    this.setState({
      amount: amount
    })
  }

  handleCountNumEdit (amount) {
    console.log('edit: ', amount)
    const {maxAmount} = this.state

    if (amount > maxAmount) {
      amount = maxAmount
    }

    this.setState({
      amount: amount
    })
  }

  handleCountInputBlur (amount) {
    console.log('Blur: ', amount)

    this.setState({
      amount: amount
    })
  }

  render () {
    const {amount, maxAmount} = this.state
    const plusDisabled = amount >= maxAmount

    return (
      <div>
        <Counter
          key='counter'
          onCountMinus={this.handleCountMinus}
          onCountPlus={this.handleCountPlus}
          onCountNumEdit={this.handleCountNumEdit}
          onCountInputBlur={this.handleCountInputBlur}
          amount={amount}
          isPlusDisabled={plusDisabled}
        />
      </div>
    )
  }
}

class ButtonWrap extends React.Component {
  handleClick () {
    console.log('click')
    return new Promise(resolve => setTimeout(() => resolve('12'), 2000))
  }

  render () {
    return (
      <Page white>
        <h2>Button 只封装了loading</h2>
        <hr/>
        loading 2s
        <Button hasLoading className='weui-btn weui-btn_default' onClick={this.handleClick}>asdfa</Button>
      </Page>
    )
  }
}

class TextareaWrap extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: 'a\na'
    }
    this.handleChange = ::this.handleChange
  }

  render () {
    return (
      <Page>
        <h2>textarea</h2>
        <hr/>
        固定高度
        <Textarea
          value={this.state.value}
          onChange={this.handleChange}
          wrapProps={{style: {maxHeight: '6.4em'}}}
        />
        原生textarea不能随内容变高。
        <Textarea value={this.state.value} onChange={this.handleChange}/>
      </Page>
    )
  }

  handleChange (event) {
    this.setState({
      value: event.target.value
    })
  }
}

class LoadingWrap extends React.Component {
  render () {
    return (
      <Page>
        <h2>loading</h2>
        <Loading>loading...</Loading>
        <Loading line>loading...</Loading>
      </Page>
    )
  }
}

class ToastWrap extends React.Component {
  handleToast (type) {
    if (type === 'success') {
      Toast.success({
        time: 10000,
        children: (
          <div>
            <div>保存成功啦</div>
          </div>
        )
      })
    } else if (type === 'loading_linear') {
      Toast.loading_linear({
        time: 10000,
        children: (
          <div>
            <div>录音中...</div>
          </div>
        )
      })
    } else if (type === 'loading') {
      Toast.loading({
        time: 0
      })
    } else {
      Toast[type]({
        children: type,
        time: 0
      })
    }
  }

  render () {
    return (
      <Page white>
        <h2>toast</h2>
        <button
          className='weui-btn weui-btn_primary'
          onClick={this.handleToast.bind(this, 'tip')}>Toast tip
        </button>
        <button
          className='weui-btn weui-btn_primary'
          onClick={this.handleToast.bind(this, 'success')}>Toast success
        </button>
        <button
          className='weui-btn weui-btn_primary'
          onClick={this.handleToast.bind(this, 'info')}>Toast info
        </button>
        <button
          className='weui-btn weui-btn_primary'
          onClick={this.handleToast.bind(this, 'warning')}>Toast warning
        </button>
        <button
          className='weui-btn weui-btn_primary'
          onClick={this.handleToast.bind(this, 'danger')}>Toast danger
        </button>
        <button
          className='weui-btn weui-btn_primary'
          onClick={this.handleToast.bind(this, 'loading')}>Toast loading
        </button>
        <button
          className='weui-btn weui-btn_primary'
          onClick={this.handleToast.bind(this, 'loading_linear')}>Toast loading_linear
        </button>
      </Page>
    )
  }
}

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

class InfiniteWrap extends React.Component {
  constructor (props) {
    super(props)
    this.state = {done: false}
    this.handleBottom = ::this.handleBottom
  }

  componentDidMount () {
    // ReactDOM.findDOMNode(this.refInfinite).scrollTop = 200;
  }

  handleBottom () {
    return new Promise(resolve => {
      setTimeout(() => {
        this.setState({
          done: true
        })
        resolve()
      }, 2000)
    })
  }

  render () {
    return (
      <Page white>
        <Infinite
          ref={ref => (this.refInfinite = ref)}
          done={this.state.done}
          onBottom={this.handleBottom}
          style={{height: '100%'}}
        >
          <div>aaaaa</div>
          <div>aaaaa</div>
          <div>aaaaa</div>
          <div>aaaaa</div>
          <div>aaaaa</div>
          <div>aaaaa</div>
          <div>aaaaa</div>
          <div>aaaaa</div>
          <div>aaaaa</div>
          <div>aaaaa</div>
          <div>aaaaa</div>
          <div>aaaaa</div>
          <div>aaaaa</div>
          <div>aaaaa</div>
          <div>aaaaa</div>
          <div>aaaaa</div>
          <div>aaaaa</div>
          <div>aaaaa</div>
          <div>aaaaa</div>
          <div>aaaaa</div>
          <div>aaaaa</div>
          <div>aaaaa</div>
          <div>aaaaa</div>
          <div>aaaaa</div>
          <div>aaaaa</div>
          <div>aaaaa</div>
          <div>aaaaa</div>
        </Infinite>
      </Page>
    )
  }
}

class PageWrap extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      show: false
    }
    this.handleOtherPage = ::this.handleOtherPage
    this.handleClose = ::this.handleClose
  }

  handleOtherPage () {
    this.setState({
      show: !this.state.show
    })
  }

  handleClose () {
    this.setState({
      show: !this.state.show
    })
  }

  render () {
    return (
      <Page white>
        <h2>page</h2>
        <hr/>
        <div>
          everyway 每个页面都是Page
        </div>

        <button className='weui-btn weui-btn_primary' onClick={this.handleOtherPage}>showOtherPage</button>
        {this.state.show && (
          <Page className='enter'>
            adf
            <button className='weui-btn weui-btn_primary' onClick={this.handleClose}>close</button>
          </Page>
        )}
      </Page>
    )
  }
}

class SliderWrap extends React.Component {
  handleChange (index) {
    console.log(index)
  }

  handleClick () {
    console.log('click')
  }

  render () {
    const style = {
      background: '#71B5DE',
      height: '5em',
      lineHeight: '5em',
      textAlign: 'center',
      display: 'block',
      color: 'white'
    }
    return (
      <div>
        <div>Slider</div>
        <Slider onChange={this.handleChange} flagType='line'>
          <div className='border' style={style}>
            <div onClick={this.handleClick}>12312</div>
          </div>
          <div style={style}>
            <div onClick={this.handleClick}>2</div>
          </div>
        </Slider>

        <Slider>
          <div className='border' style={style}>1</div>
        </Slider>

        <Slider flag='inner' activeFlagStyle={{
          background: 'red'
        }}>
          <div className='border' style={style}>1</div>
          <div style={style}>2</div>
        </Slider>

        <Slider flag='none'>
          <div className='border' style={style}>1</div>
          <div style={style}>2</div>
        </Slider>

        <Slider enableAutoSlide slideTimeKey='lalala'>
          <div className='border' style={style}>1</div>
          <div className='border' style={style}>2</div>
          <div className='border' style={style}>3</div>
          <div className='border' style={style}>4</div>
        </Slider>

        <div>SliderLess</div>

        <SliderLess enableAutoSlide slideTimeKey='aaaa'>
          <div className='border' style={style}>1111111111111111111111111111111111</div>
          <div className='border' style={style}>22222222222222222222222222222222222</div>
        </SliderLess>

        <SliderLess enableAutoSlide slideTimeKey='aaaa'>
          <div className='border' style={style}>1111111111111111111111111111111111</div>
          <div className='border' style={style}>22222222222222222222222222222222222</div>
        </SliderLess>
      </div>
    )
  }
}

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

class PopupWrap extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      show: false,
      show2: false
    }

    this.handleShow = ::this.handleShow
    this.handleShow2 = ::this.handleShow2
    this.handleShow3 = ::this.handleShow3
    this.handleChange = ::this.handleChange
    this.handleChange2 = ::this.handleChange2
  }

  handleShow () {
    this.setState({
      show: !this.state.show
    })
  }

  handleShow2 () {
    this.setState({
      show2: !this.state.show2
    })
  }

  handleShow3 () {
    Popup.render({
      left: true,
      children: <div>
        调用静态方法
      </div>
    })
  }

  handleChange () {
    this.setState({
      show: !this.state.show
    })
  }

  handleChange2 () {
    this.setState({
      show2: !this.state.show2
    })
  }

  render () {
    return (
      <Page>
        <button className='weui-btn weui-btn_primary' onClick={this.handleShow}>open popup left</button>
        <button className='weui-btn weui-btn_primary' onClick={this.handleShow2}>open popup bottom</button>
        <button className='weui-btn weui-btn_primary' onClick={this.handleShow3}>open popup API left</button>
        <Popup left show={this.state.show} onHide={this.handleChange}>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
        </Popup>

        <Popup opacity={0.8} bottom show={this.state.show2} onHide={this.handleChange2}>
          <div style={{height: '100px'}}>height 100px</div>
        </Popup>

        <div>asdf</div>
        <div>asdf</div>
        <div>asdf</div>
        <div>asdf</div>
        <div>asdf</div>
        <div>asdf</div>
        <div>asdf</div>
        <div>asdf</div>
        <div>asdf</div>
        <div>asdf</div>
        <div>asdf</div>
        <div>asdf</div>
        <div>asdf</div>
        <div>asdf</div>
        <div>asdf</div>
        <div>asdf</div>
        <div>asdf</div>
        <div>asdf</div>
        <div>asdf</div>
        <div>asdf</div>
        <div>asdf</div>
        <div>asdf</div>
        <div>asdf</div>
        <div>asdf</div>
        <div>asdf</div>
      </Page>
    )
  }
}

class SearchBarWrap extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      defaultFocus: false,
      value: ''
    }

    this.handleChange = ::this.handleChange
  }

  render () {
    return (
      <Page>
        <SearchBar
          placeholder='搜索商品'
          value={this.state.value}
          onChange={this.handleChange}
          onOK={this.handleOK}
          onCancel={this.handleCancel}
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
        />

        <SearchBar
          placeholder='搜索商品'
          value={this.state.value}
          onChange={this.handleChange}
          onOK={this.handleOK}
          onCancel={this.handleCancel}
          onBlur={this.handleBlur}
          OKBtn
          defaultFocus
        />
      </Page>
    )
  }

  handleFocus () {
    console.log('focus')
  }

  handleBlur () {
    console.log('blur')
  }

  handleChange (value) {
    this.setState({
      value
    })
  }

  handleOK () {
    console.log('ok')
  }

  handleCancel () {
    console.log('cancel')
  }
}

class SquareWrap extends React.Component {
  render () {
    return (
      <Page>
        <div style={{width: '50%'}}>
          <Square className='bg-white'>
            <img src='' style={{width: '100%', height: '100%'}} alt=''/>
          </Square>
        </div>
      </Page>
    )
  }
}

class LazyImgWrap extends React.Component {
  render () {
    const gmLogo = 'https://js.guanmai.cn/static_storage/json/common/logo/default/logo2.png'

    return (
      <Page className='lazy-img-wrap'>
        <LazyImg
          placeholder={'https://placeholdit.imgix.net/~text?txtsize=23&bg=f7f7f7&txt=loading&w=250&h=250'}
          src={gmLogo}
        />
        <div style={{height: '600px'}}>
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

class DialogWrap extends React.Component {
  constructor (props) {
    super(props)

    this.handleA = ::this.handleA
    this.handleA = ::this.handleA

    this.state = {
      confirm: false,
      alert: false,
      btnText: {cancelText: '不合并', confirmText: '合并'}
    }
  }

  handleA () {
    Dialog.alert('yoyoyo').then(() => {
      console.log('ok')
    })
  }

  handleC () {
    Dialog.confirm({
      children: '确定么?',
      confirmText: '去充值'
    }).then(() => {
      console.log('ok')
    }).catch(() => {
      console.log('cancel')
    })
  }

  render () {
    const {alert, confirm, btnText} = this.state
    return (
      <Page>
        <button className='weui-btn weui-btn_primary' onClick={() => this.setState({
          alert: !alert
        })}>Alert Dialog
        </button>
        <button className='weui-btn weui-btn_primary' onClick={() => this.setState({
          confirm: !confirm
        })}>Confirm Dialog
        </button>

        <Dialog
          alert
          show={alert}
          title='Alert Dialog'
          onConfirm={() => this.setState({alert: !alert})}
        >
          这是alert
        </Dialog>

        <Dialog
          confirm
          show={confirm}
          title='Alert Dialog'
          onCancel={() => this.setState({confirm: !confirm})}
          onConfirm={() => this.setState({confirm: !confirm})}
          {...btnText}
        >
          这是confirm内容
        </Dialog>

        <button className='weui-btn weui-btn_warn' onClick={this.handleA}>Alert Dialog（API+Promise）</button>
        <button className='weui-btn weui-btn_warn' onClick={this.handleC}>Confirm Dialog（API+Promise）
        </button>
      </Page>
    )
  }
}

class CursorFixWrap extends React.Component {
  render () {
    return (
      <div>
        <CursorFix
          component='input'
          type='text'
          style={{border: '1px solid black'}}
          name='name'
          onClick={this.handleClick}
        />
        <input type='text' style={{border: '1px solid black'}}/>
      </div>
    )
  }

  handleClick () {
    console.log('click')
  }
}

class SelectWrap extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      show: false,
      data: [
        {value: 1, name: '深圳'},
        {value: 2, name: '罗湖'},
        {value: 3, name: '南山'},
        {value: 4, name: '宝安'},
        {value: 5, name: '福田'},
        {value: 6, name: '龙岗'}
      ],
      value: null
    }
  }

  handleChange (value) {
    console.log(value)
    this.setState({
      value,
      show: false
    })
  }

  handleClick () {
    this.setState({
      show: true
    })
  }

  handleClickStatic = () => {
    const {data, value} = this.state

    Select.render({
      data,
      value
    }).then(v => {
      console.log(v)
      this.setState({
        value: v
      })
    })
  }

  render () {
    const item = _.find(this.state.data, v => v.value === this.state.value)

    return (
      <div>
        <button className='weui-btn weui-btn_primary' onClick={::this.handleClick}>选择</button>
        <button className='weui-btn weui-btn_primary' onClick={::this.handleClickStatic}>选择(静态方法)</button>
        {item && item.name}
        <Select
          show={this.state.show}
          data={this.state.data}
          value={this.state.value}
          onChange={::this.handleChange}/>
      </div>
    )
  }
}

class DropperWrap extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      img: ''
    }
    this.lrz = null

    this.handleDrop = ::this.handleDrop
  }

  render () {
    return (
      <div>
        <Dropper onDrop={this.handleDrop}>
          默认选择图片样式
        </Dropper>

        <Dropper className='border'>
          <button className='weui-btn weui-btn_primary'>自定义选择图片</button>
        </Dropper>

        <div>
          原图
          <img style={{width: '100%'}} src={this.state.img} alt=''/>

        </div>
        <div>压缩
          <img src={this.state.resizeImg ? this.state.resizeImg.base64 : ''} alt=''/>
        </div>
      </div>
    )
  }

  handleDrop (files, event) {
    console.log(files, event)
    this.setState({
      img: files[0].preview,
      resizeImg: null
    })

    const option = {
      width: 300,
      height: 300,
      quality: 1
    }

    this.getLrz().then(lrz => {
      Promise.all(_.map(files, (file) => {
        return lrz(file, option)
      })).then(rsts => {
        console.log(rsts[0])
        this.setState({
          resizeImg: rsts[0]
        })
      })
    })
  }

  getLrz () {
    if (this.lrz) {
      return Promise.resolve(this.lrz)
    } else {
      return new Promise((resolve) => {
        require.ensure(['lrz'], require => {
          this.lrz = require('lrz')
          resolve(this.lrz)
        })
      })
    }
  }
}

class TriggerWrap extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}

    this.renderPopup = ::this.renderPopup
  }

  renderPopup () {
    return (
      <div className='gm-border' style={{width: '200px', height: '200px', background: 'red'}}>
        <div>popup</div>
      </div>
    )
  }

  render () {
    return (
      <Trigger component={<div/>} popup={this.renderPopup()}>
        <button className='btn btn-default'>focus me(default)</button>
      </Trigger>
    )
  }
}

class TooltipWrap extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.renderPopup = ::this.renderPopup
  }

  renderPopup () {
    return (
      <Tooltip placement='bottomRight' style={{width: '250px'}}>
        这是一个tooltip bottomRight (default)
      </Tooltip>
    )
  }

  render () {
    return (
      <Flex column>
        <Flex style={{margin: '5px 15px'}}>
          Tooltip需要配合Trigger使用，注意Tooltip的'topLeft', 'topRight', 'bottomLeft',
          'bottomRight'合Trigger的'right'、'top'的搭配
        </Flex>
        <Flex justifyEnd style={{margin: '30px 20px'}}>
          <Trigger component={<div/>} right adjustX={20} popup={this.renderPopup()}>
            <button className='weui-btn weui-btn_primary weui-btn_mini'>bottomRight (default)
            </button>
          </Trigger>
        </Flex>

        <Flex style={{margin: '30px 20px'}}>
          <Trigger
            component={<div/>}
            timeout={2000}
            popup={
              <Tooltip placement='bottomLeft' style={{width: '250px'}}>
                这是一个tooltip bottomLeft
              </Tooltip>
            }
          >
            <button className='weui-btn weui-btn_primary weui-btn_mini'>bottomLeft with timeout
            </button>
          </Trigger>
        </Flex>

        <Flex justifyEnd style={{margin: '30px 20px'}}>
          <Trigger
            component={<div/>}
            top
            right
            adjustX={20}
            mask
            popup={
              <Tooltip placement='topRight' style={{width: '250px'}}>
                这是一个tooltip topRight
              </Tooltip>
            }
          >
            <button className='weui-btn weui-btn_primary weui-btn_mini'>topRight with mask
            </button>
          </Trigger>
        </Flex>

        <Flex style={{margin: '30px 20px'}}>
          <Trigger
            component={<div/>}
            top
            adjustX={30}
            mask
            popup={<Tooltip placement='topLeft' style={{width: '250px'}}
            >
              这是一个tooltip topLeft
            </Tooltip>}
          >
            <button className='weui-btn weui-btn_primary weui-btn_mini'>topLeft with mask
            </button>
          </Trigger>
        </Flex>

        <Flex style={{margin: '30px 20px'}}>
          <Trigger
            component={<div/>}
            type='hover'
            top
            mask
            popup={<Tooltip placement='topLeft' style={{width: '250px'}}
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

class PreviewImageWrap extends React.Component {
  handleShow () {
    PreviewImage.render({
      images: [{
        url: 'https://bshop.guanmai.cn/static/icon/icon-veg.4fa23256.png',
        name: 'aaaa菜心'
      }, {
        url: 'https://img.guanmai.cn/station_pic/logo_2017.png',
        name: '菠菜aaaaaaa'
      }, {
        url: 'https://img.guanmai.cn/station_pic/logo_2017.png',
        name: '宽宽图'
      }, {
        url: 'http://7xlnio.com1.z0.glb.clouddn.com/17-2-16/53032612-file_1487254642623_73b9.png',
        name: '高高高图'
      }],
      onHide: PreviewImage.hide
    })
  }

  handleShowSingle () {
    PreviewImage.render({
      images: [{
        url: 'https://img.guanmai.cn/station_pic/logo_2017.png',
        name: '菠菜aaaaaaa'
      }],
      onHide: PreviewImage.hide
    })
  }

  render () {
    return (
      <div>
        <button className='weui-btn weui-btn_primary' onClick={this.handleShow}>show images</button>
        <button className='weui-btn weui-btn_primary' onClick={this.handleShowSingle}>show image</button>
      </div>
    )
  }
}

class DividerWrap extends React.Component {
  render () {
    return (
      <div>
        <Divider>lalala</Divider>
      </div>
    )
  }
}

class PickerWrap extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      values: [
        'Mr.',
        'Micheal',
        'Jordan'
      ],
      datas: [
        ['Mr.', 'Mrs.', 'Ms.', 'Dr.'],
        ['John', 'Micheal', 'Elizabeth'],
        ['Lennon', 'Jackson', 'Jordan', 'Legend', 'Taylor']
      ]
    }
  }

  handleChange = (values) => {
    this.setState({
      values
    })
  }

  handleClick = () => {
    const {datas, values} = this.state

    ConfirmPicker.render({
      datas,
      values
    }).then(v => {
      console.log('resolve', v)
      this.setState({
        values: v
      })
    }, () => {
      console.log('reject')
    })
  }

  render () {
    const {datas, values} = this.state

    return (
      <div>
        <button className='weui-btn' onClick={this.handleClick}>picker</button>

        <Picker
          datas={datas}
          values={values}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

class CalendarWrap extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      begin: null,
      end: null
    }
  }

  render () {
    return (
      <div className='padding-8'>
        <Calendar
          min={moment().add(-1, 'month').toDate()}
          max={moment().toDate()}
          begin={this.state.begin}
          end={this.state.end}
          onChange={({begin, end}) => {
            console.log(moment(begin).format('YYYY-MM-DD'), moment(end).format('YYYY-MM-DD'))
            this.setState({begin, end})
          }}
          label
        />
      </div>
    )
  }
}

const routeMap = {
  demo: DemoWrap,
  theme: ThemeWrap,
  border: BorderWrap,
  gap: GapWrap,
  button: ButtonWrap,
  flex: FlexWrap,
  textarea: TextareaWrap,
  loading: LoadingWrap,
  toast: ToastWrap,
  nprogress: NProgressWrap,
  infinite: InfiniteWrap,
  page: PageWrap,
  slider: SliderWrap,
  tabs: TabsWrap,
  popup: PopupWrap,
  search: SearchBarWrap,
  square: SquareWrap,
  lazyimg: LazyImgWrap,
  dialog: DialogWrap,
  cursorfix: CursorFixWrap,
  select: SelectWrap,
  dropper: DropperWrap,
  trigger: TriggerWrap,
  tooltip: TooltipWrap,
  previewimage: PreviewImageWrap,
  badge: BadgeWrap,
  price: PriceWrap,
  cell: CellWrap,
  counter: CounterWrap,
  divider: DividerWrap,
  picker: PickerWrap,
  calendar: CalendarWrap
}

const Root = () => (
  <Router>
    <Route path='/' component={(props) => (
      <App {...props}>
        <Switch>
          <Route exact path='/' render={() => <Redirect from='/' to='/home'/>}/>
          <Route exact path='/home' component={Home}/>
          {_.map(routeMap, (v, k) => (
            <Route key={k} exact path={'/' + k} component={v}/>
          ))}
        </Switch>
      </App>
    )}/>
  </Router>
)

ReactDOM.render(<Root/>, window.document.getElementById('appContainer'))
