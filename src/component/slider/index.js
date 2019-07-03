import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import _ from 'lodash'
import Flex from '../flex/index'
import SliderFlag from '../slider_flag'
import { timeSync } from 'gm-util'

class Slider extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 1,
      sliderWidth: 0,
      touchObject: null,
      dragging: false,
      transition: false,
      x: 0
    }

    this.swipeStart = ::this.swipeStart
    this.swipeMove = ::this.swipeMove
    this.swipeEnd = ::this.swipeEnd
    this.setSliderWidth = ::this.setSliderWidth
    this.doAutoSlider = ::this.doAutoSlider
    this.doChange = ::this.doChange

    this.slideTimeKey = props.slideTimeKey || (Math.random() + '').slice(2)
    this.refSlider = null
  }

  static getDerivedStateFromProps (props, state) {
    const count = React.Children.count(props.children)
    if (state.count !== count) {
      return {
        count,
        x: 0
      }
    }
    return null
  }

  doAutoSlider () {
    let { dragging, x, sliderWidth, count } = this.state
    if (dragging) {
      return
    }

    x -= this.state.sliderWidth
    if (x > 0) {
      x = 0
    }
    if (x < -(sliderWidth * (count - 1))) {
      x = 0
    }

    this.setState({
      transition: true,
      dragging: false,
      touchObject: null,
      x
    })

    this.doChange(x)
  }

  componentDidMount () {
    const sliderWidth = this.setSliderWidth()
    this.setCount()
    this.setDefaultX(sliderWidth)

    // 要在这里做，非componentWillMount。背景 SliderLess 和 timeSync 的缘故。
    // SliderLess 每次onChange都换key。此时未来组件先 willMount， 前组件后WillUmmount。 结合 timeSync 看就出问题了。
    const { autoSlideTime, enableAutoSlide } = this.props
    if (enableAutoSlide) {
      timeSync.add(this.slideTimeKey, this.doAutoSlider, autoSlideTime)
      timeSync.start(this.slideTimeKey)
    }

    window.addEventListener('resize', this.setSliderWidth)
  }

  componentWillUnmount () {
    timeSync.remove(this.slideTimeKey, this.doAutoSlider)
    window.removeEventListener('resize', this.setSliderWidth)
  }

  setDefaultX (sliderWidth) {
    const { defaultIndex } = this.props
    this.setState({
      x: -defaultIndex * sliderWidth
    })
  }

  setCount () {
    this.setState({
      count: _.isArray(this.props.children) ? this.props.children.length : 1
    })
  }

  setSliderWidth () {
    const slider = ReactDOM.findDOMNode(this.refSlider)
    this.setState({
      sliderWidth: slider.offsetWidth
    })
    return slider.offsetWidth
  }

  getX (event) {
    return event.touches !== undefined ? event.touches[0].pageX : event.clientX
  }

  swipeStart (event) {
    // event.preventDefault();
    this.setState({
      dragging: true,
      transition: false,
      touchObject: {
        startX: this.getX(event),
        x: this.getX(event)
      }
    })

    // 复杂了
    const { enableAutoSlide } = this.props
    if (enableAutoSlide) {
      timeSync.stop(this.slideTimeKey)
    }
  }

  swipeMove (event) {
    // event.preventDefault();
    this.setState({
      dragging: true,
      transition: false,
      touchObject: Object.assign({}, this.state.touchObject, {
        x: this.getX(event)
      })
    })
  }

  swipeEnd () {
    const { enableAutoSlide } = this.props
    let { touchObject, x, sliderWidth, count } = this.state

    if (enableAutoSlide) {
      timeSync.start(this.slideTimeKey)
    }

    const to = touchObject

    if (!to) return

    const diff = to.x - to.startX
    if (to && Math.abs(diff) > 50) {
      if (diff > 0) {
        x += sliderWidth
      } else {
        x -= sliderWidth
      }
      if (x > 0) {
        x = 0
      }
      if (x < -(sliderWidth * (count - 1))) {
        x = -(sliderWidth * (count - 1))
      }

      this.setState({
        transition: true,
        dragging: false,
        touchObject: null,
        x
      })

      this.doChange(x)
    } else {
      this.setState({
        transition: true,
        dragging: false,
        touchObject: null
      })
    }
  }

  doChange (x) {
    const { onChange } = this.props
    const { sliderWidth } = this.state

    onChange(Math.abs(x / sliderWidth))
  }

  renderChild () {
    let { children } = this.props
    const { x, sliderWidth, dragging } = this.state
    const index = Math.abs(x / sliderWidth)

    if (!_.isArray(children)) {
      children = [children]
    }

    return _.map(children, (value, i) => {
      return React.cloneElement(value, {
        style: Object.assign({}, value.props.style, { width: '100%' }),
        className: classNames('slider-cell flex flex-none', value.props.className, { 'slider-cell-show': (index === i || (index === i - 1 && dragging) || (index === i + 1 && dragging)) }),
        key: i
      })
    })
  }

  render () {
    const { count, x, sliderWidth, touchObject } = this.state

    let offset = touchObject ? (touchObject.x - touchObject.startX + x) : x

    const {
      className,
      flag,
      flagType,
      activeFlagStyle
    } = this.props
    const cn = classNames({
      'slider-transition': this.state.transition
    }, className)

    const style = {
      WebkitTransform: 'translate3d(' + offset + 'px, 0, 0)',
      transform: 'translate3d(' + offset + 'px, 0, 0)'
    }

    return (
      <div className={classNames('slider', {
        'slider-flag-inner': flagType === 'inner'
      })}>
        <Flex
          ref={ref => (this.refSlider = ref)}
          className={cn}
          onMouseDown={this.swipeStart}
          onMouseMove={this.swipeMove}
          onMouseUp={this.swipeEnd}
          onMouseLeave={this.swipeEnd}
          onTouchStart={this.swipeStart}
          onTouchMove={this.swipeMove}
          onTouchEnd={this.swipeEnd}
          onTouchCancel={this.swipeEnd}
          style={style}
        >
          {this.renderChild()}
        </Flex>
        {flag !== 'none' && (
          <SliderFlag
            flag={flag}
            type={flagType}
            activeStyle={activeFlagStyle}
            count={count}
            index={Math.abs(x / sliderWidth)}
          />
        )}
      </div>
    )
  }
}

Slider.propTypes = {
  defaultIndex: PropTypes.number,
  onChange: PropTypes.func,
  flag: PropTypes.oneOf(['default', 'inner', 'none']),
  flagType: PropTypes.oneOf(['dot', 'line']),
  activeFlagStyle: PropTypes.object,
  enableAutoSlide: PropTypes.bool,
  autoSlideTime: PropTypes.number,
  slideTimeKey: PropTypes.string
}

Slider.defaultProps = {
  defaultIndex: 0,
  onChange: _.noop,
  flag: 'default',
  flagType: 'dot',
  enableAutoSlide: false,
  autoSlideTime: 5000
}

export default Slider
