import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Flex from '../flex'
import Cell from './cell'
import CellBody from './cell_body'
import CellFooter from './cell_footer'

class CellSwipe extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      swiping: false,
      slideStartX: 0,
      slideCurrX: 0
    }

    // 手势
    this.handleTouchMove = ::this.handleTouchMove
    this.handleTouchStart = ::this.handleTouchStart
    this.handleTouchEnd = ::this.handleTouchEnd

    // 渲染按钮
    this.renderButtons = ::this.renderButtons

    // 动态改变 transform 的值
    this.setStyle = ::this.setStyle

    // 获取移动内容的宽度的值，主要是处理边界
    this.getContentEasing = ::this.getContentEasing

    // 按钮展示状态下点击非按钮部分 -- 收起按钮
    this.onCloseSwiped = ::this.onCloseSwiped

    // 收起按钮
    this.close = ::this.close

    // 判断点击的 target 区域
    this.closest = ::this.closest

    // 按钮的宽度，决定能移动的最大值
    this.btnsRightWidth = 0

    // 右边按钮 dom 对象
    this.right = ''

    // 移动的 dom 对象
    this.content = ''

    // page | body
    this.domObj = ''
  }

  componentDidMount () {
    this.btnsRightWidth = this.right ? this.right.offsetWidth : 0

    // 这里的 page 是针对整个库设计的，如果 touchstart 事件绑定到 body 的话，那不在 page 的层，
    // 比如 modal 等，当点击这样的层时，会执行 onCloseSwiped，收起按钮，这不是预期的
    this.domObj = window.document.getElementsByClassName('page')[0] || document.body // eslint-disable-line

    this.domObj.addEventListener('touchstart', this.onCloseSwiped, true)
  }

  componentWillUnmount () {
    this.domObj.removeEventListener('touchstart', this.onCloseSwiped, true)
  }

  onCloseSwiped (ev) {
    // swiped-actions 为展开的按钮的类
    const pNode = this.closest(ev.target, `.swiped-actions`)

    // 点击非按钮区域才收起按钮
    if (!pNode) {
      // 展开状态，禁止默认行为 -- 即 list 不可点击，并且把按钮收起
      if (this.state.swiping) {
        ev.preventDefault()
        this.close()
      }
    }
  }

  closest (el, selector) {
    // http://caniuse.com/#search=match
    const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector

    // 从 target 一直往父元素查找，是否含有 swiped-actions 类，表示点击按钮
    while (el) {
      if (matchesSelector.call(el, selector)) {
        return el
      } else {
        el = el.parentElement
      }
    }

    return null
  }

  handleTouchStart (e) {
    let deltaX = e.changedTouches[0].pageX

    this.setState({
      slideStartX: deltaX,
      swiping: true
    })
  }

  handleTouchMove (e) {
    if (!this.state.swiping) {
      return
    }

    // 见 145行 注释
    if (this.content.classList.contains('swiped-body')) {
      this.content.classList.remove('swiped-body')
    }

    let deltaX = e.changedTouches[0].pageX - this.state.slideStartX

    this.setState({
      slideCurrX: deltaX
    })

    this.setStyle(deltaX)
  }

  handleTouchEnd () {
    if (!this.state.swiping) {
      return
    }

    const deltaX = this.state.slideCurrX
    let needOpenRight = false

    if (deltaX < 0) {
      needOpenRight = Math.abs(deltaX) > this.btnsRightWidth / 2
    }

    if (needOpenRight) {
      this.doOpenRight()
      this.setState({
        slideStartX: 0,
        slideCurrX: 0
      })

      // 当前为打开状态，为关闭时增加动画，0.2s 的时间收起按钮
      // 在打开时添加这个动画的话，会有卡顿，因为有 0.2s 的延迟
      this.content.classList.add('swiped-body')
    } else {
      this.close()
    }
  }

  doOpenRight () {
    this.setStyle(-this.btnsRightWidth)
  }

  close () {
    this.setStyle(0)
    this.setState({
      swiping: false,
      slideStartX: 0,
      slideCurrX: 0
    })
  }

  setStyle (value) {
    const limit = value > 0 ? 0 : -this.btnsRightWidth
    const contentLeft = this.getContentEasing(value, limit)
    const transform = `translate3d(${contentLeft}px, 0px, 0px)`

    this.content.style.transform = transform
  }

  getContentEasing (value, limit) {
    const delta = Math.abs(value) - Math.abs(limit)
    const isOverflow = delta > 0

    return (isOverflow ? limit : value)
  }

  handleBtnClick (onClick) {
    onClick(this.close)
  }

  renderButtons (buttons, ref) {
    return (
      <div className='flex flex-row swiped-actions' ref={(el) => (this[ref] = el)}>
        {
          buttons.map((btn, i) => (
            <Flex
              key={i}
              data-id='rename'
              justifyCenter
              alignCenter
              className='weui-swiped-btn'
              style={btn.style}
              onClick={this.handleBtnClick.bind(this, btn.onClick)}
            >{btn.text || 'click'}</Flex>

          ))
        }
      </div>
    )
  }

  render () {
    const { bodyText, footerText, onClick, right } = this.props

    return (
      <Cell
        className='weui-cell_swiped'
      >
        <CellBody
          ref={el => (this.content = ReactDOM.findDOMNode(el))}
          onTouchMove={this.handleTouchMove}
          onTouchStart={this.handleTouchStart}
          onTouchEnd={this.handleTouchEnd}
          onClick={onClick}
          className='swiped-body'
        >
          <Cell access>
            <CellBody className='text'>{bodyText}</CellBody>
            {footerText && (
              <CellFooter className='text-desc'>
                {footerText}
              </CellFooter>
            )}
          </Cell>
        </CellBody>
        <CellFooter className='padding-right-0'>
          {(right && right.length > 0) && this.renderButtons(right, 'right')}
        </CellFooter>
      </Cell>
    )
  }
}

CellSwipe.propTypes = {
  bodyText: PropTypes.node.isRequired,
  footerText: PropTypes.node,
  right: PropTypes.array,
  onClick: PropTypes.func
}

export default CellSwipe
