import React from 'react'
import Slider from '../../src/component/slider'
import SliderLess from '../../src/component/slider_less'

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

export default SliderWrap
