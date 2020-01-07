import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import _ from 'lodash'
import Slide from '../slider/index'
import Flex from '../flex/index'
import LayoutRoot from '../layout_root'

let PreviewImageStatics = {
  render (options) {
    options.onHide = () => {
      PreviewImageStatics.hide()
    }

    LayoutRoot.renderWith(LayoutRoot.TYPE.POPUP, <PreviewImage {...options} show/>)
  },

  hide () {
    LayoutRoot.hideWith(LayoutRoot.TYPE.POPUP)
  }
}

class PreviewImage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      index: 0
    }
    this.handleChange = ::this.handleChange
    this.handleClose = ::this.handleClose
  }

  handleChange (index) {
    this.setState({
      index: index
    })
  }

  handleClose (e) {
    e.preventDefault()
    this.props.onHide()
  }

  render () {
    const {
      className,
      images,
      show,
      onHide, // eslint-disable-line
      defaultIndex,
      ...rest
    } = this.props

    if (!show) {
      return null
    }

    return (
      <Flex
        column
        justifyCenter
        {...rest}
        className={classNames('preview-image', className)}
        onClick={this.handleClose}
      >
        <div className='preview-image-close'>X</div>
        <div className='preview-image-inner'>
          {images.length === 1 ? (
            <Flex className='flex-align-center flex-justify-center'>
              <img src={images[0].url}/>
            </Flex>
          ) : (
            <Slide defaultIndex={defaultIndex} onChange={this.handleChange}>
              {_.map(images, (v, i) => (
                <div key={i + v.url} className='flex-align-center flex-justify-center'>
                  <img src={v.url}/>
                </div>
              ))}
            </Slide>
          )}
          <div className='text-center preview-image-name' style={{ color: '#555' }}>
            {images[this.state.index] && images[this.state.index].name}
          </div>
        </div>
      </Flex>
    )
  }
}

Object.assign(PreviewImage, PreviewImageStatics)

PreviewImage.defaultProps = {
  show: false,
  onHide: _.noop,
  defaultIndex: 0
}

PreviewImage.propTypes = {
  images: PropTypes.array,
  show: PropTypes.bool,
  onHide: PropTypes.func,
  defaultIndex: PropTypes.number
}

export default PreviewImage
