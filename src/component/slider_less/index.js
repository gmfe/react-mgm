import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import _ from 'lodash'
import Slider from '../slider'
import SliderFlag from '../slider_flag'

class SliderLess extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 0,
      index: 0
    }
    this.sliderKey = 0

    this.handleChange = ::this.handleChange
  }

  componentDidMount () {
    this.setCount()
  }

  setCount () {
    this.setState({
      count: _.isArray(this.props.children) ? this.props.children.length : 1
    })
  }

  handleChange (sliderIndex) {
    // 只有 0 和 2 了
    const { onChange } = this.props
    let { count, index } = this.state

    this.sliderKey++

    index = index + (sliderIndex === 0 ? -1 : 1)
    if (index < 0) {
      index = count - 1
    } else if (index >= count) {
      index = 0
    }

    onChange(index)

    // 200和slider的动画时间一致
    setTimeout(() => {
      this.setState({ index })
    }, 200)
  }

  renderSliderChild () {
    const { index } = this.state
    let { children } = this.props

    if (!_.isArray(children)) {
      children = [children]
    }

    let treeList = children
    if (children.length >= 2) {
      treeList = [
        children[index === 0 ? (children.length - 1) : (index - 1)],
        children[index],
        children[index === children.length - 1 ? 0 : index + 1]
      ]
    }

    return _.map(treeList, (value, i) => {
      return React.cloneElement(value, {
        style: Object.assign({}, value.props.style, { width: '100%' }),
        className: classNames('slider-cell flex flex-none', value.props.className),
        key: i
      })
    })
  }

  render () {
    const {
      flag,
      flagType,
      activeFlagStyle,
      enableAutoSlide,
      autoSlideTime,
      slideTimeKey
    } = this.props
    const { count, index } = this.state

    return (
      <div className='slider-less'>
        <Slider
          defaultIndex={1}
          flag='none'
          key={'slider_less_' + this.sliderKey}
          onChange={this.handleChange}
          enableAutoSlide={enableAutoSlide}
          autoSlideTime={autoSlideTime}
          slideTimeKey={slideTimeKey}
        >
          {this.renderSliderChild()}
        </Slider>

        {flag !== 'none' && (
          <SliderFlag
            flag={flag}
            type={flagType}
            activeStyle={activeFlagStyle}
            count={count}
            index={index}
          />
        )}
      </div>
    )
  }
}

SliderLess.propTypes = {
  onChange: PropTypes.func,
  flag: PropTypes.oneOf(['default', 'inner', 'none']),
  flagType: PropTypes.oneOf(['dot', 'line']),
  activeFlagStyle: PropTypes.object,
  enableAutoSlide: PropTypes.bool,
  autoSlideTime: PropTypes.number,
  slideTimeKey: PropTypes.string
}

SliderLess.defaultProps = {
  onChange: _.noop,
  flag: 'default',
  flagType: 'dot',
  enableAutoSlide: false,
  autoSlideTime: 5000
}

export default SliderLess
