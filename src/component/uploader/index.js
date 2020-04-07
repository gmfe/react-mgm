import React from 'react'
import PropTypes from 'prop-types'
import { is } from 'gm-util'
import classNames from 'classnames'

import SVGPlus from '../../../svg/plus.svg'

class Uploader extends React.Component {
  handleUpload = (e) => {
    e.preventDefault()

    const { multiple, onUpload } = this.props
    const uploadedFiles = e.dataTransfer ? e.dataTransfer.files : e.target.files
    const max = multiple ? uploadedFiles.length : 1
    let files = []

    for (let i = 0; i < max; i++) {
      const file = uploadedFiles[i]
      file.preview = window.URL.createObjectURL(file)
      files.push(file)
    }
    onUpload(files, e)
  }

  handleClick = () => {
    this.refInput.value = null
    this.refInput.click()
  }

  render () {
    const {
      children,
      accept,
      multiple
    } = this.props

    const cn = classNames({ 'uploader-warp': !!children, 'uploader-default': !children })
    return (
      <div className='uploader'>
        <div
          className={cn}
          onClick={this.handleClick}
        >
          {children || <div className='uploader-icon-wrap'>
            <SVGPlus className='uploader-icon'/>
          </div>}
        </div>
        <input
          type='file'
          ref={ref => (this.refInput = ref)}
          className='uploader-input'
          multiple={!is.weixin() && multiple}
          accept={accept}
          onChange={this.handleUpload}
        />
      </div>
    )
  }
}

Uploader.defaultProps = {
  multiple: false
}

Uploader.propTypes = {
  multiple: PropTypes.bool,
  onUpload: PropTypes.func.isRequired,
  accept: PropTypes.string
}

export default Uploader
