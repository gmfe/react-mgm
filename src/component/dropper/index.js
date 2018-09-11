import React from 'react'
import PropTypes from 'prop-types'
import { is } from 'gm-util'

class Dropper extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.onClick = ::this.onClick
    this.onDragEnter = ::this.onDragEnter
    this.onDragLeave = ::this.onDragLeave
    this.onDragOver = ::this.onDragOver
    this.onDrop = ::this.onDrop

    this.state = {
      isDragActive: false,
      isWX: is.weixin()
    }

    this.refInput = null
  }

  componentDidMount () {
    this.enterCounter = 0
  }

  accept (file, acceptedFiles) {
    if (file && acceptedFiles) {
      const acceptedFilesArray = acceptedFiles.split(',')
      const fileName = file.name || ''
      const mimeType = file.type || ''
      const baseMimeType = mimeType.replace(/\/.*$/, '')

      return acceptedFilesArray.some(type => {
        const validType = type.trim()
        if (validType.charAt(0) === '.') {
          return fileName.toLowerCase().endsWith(validType.toLowerCase())
        } else if (/\/\*$/.test(validType)) {
          // This is something like a image/* mime type
          return baseMimeType === validType.replace(/\/.*$/, '')
        }
        return mimeType === validType
      })
    }
    return true
  }

  allFilesAccepted (files) {
    return files.every(file => this.accept(file, this.props.accept))
  }

  onDragEnter (e) {
    e.preventDefault()

    ++this.enterCounter

    // This is tricky. During the drag even the dataTransfer.files is null
    // But Chrome implements some drag store, which is accesible via dataTransfer.items
    const dataTransferItems = e.dataTransfer && e.dataTransfer.items ? e.dataTransfer.items : []

    // Now we need to convert the DataTransferList to Array
    const itemsArray = Array.prototype.slice.call(dataTransferItems)
    const allFilesAccepted = this.allFilesAccepted(itemsArray)

    this.setState({
      isDragActive: allFilesAccepted,
      isDragReject: !allFilesAccepted
    })

    if (this.props.onDragEnter) {
      this.props.onDragEnter(e)
    }
  }

  onDragOver (e) {
    e.preventDefault()
  }

  onDragLeave (e) {
    e.preventDefault()

    if (--this.enterCounter > 0) {
      return
    }

    this.setState({
      isDragActive: false,
      isDragReject: false
    })

    if (this.props.onDragLeave) {
      this.props.onDragLeave(e)
    }
  }

  onDrop (e) {
    e.preventDefault()

    // Reset the counter along with the drag on a drop.
    this.enterCounter = 0

    this.setState({
      isDragActive: false,
      isDragReject: false
    })

    const droppedFiles = e.dataTransfer ? e.dataTransfer.files : e.target.files
    const max = this.props.multiple ? droppedFiles.length : 1
    const files = []

    for (let i = 0; i < max; i++) {
      const file = droppedFiles[i]
      file.preview = window.URL.createObjectURL(file)
      files.push(file)
    }

    if (this.props.onDrop) {
      this.props.onDrop(files, e)
    }

    if (this.allFilesAccepted(files)) {
      if (this.props.onDropAccepted) {
        this.props.onDropAccepted(files, e)
      }
    } else {
      if (this.props.onDropRejected) {
        this.props.onDropRejected(files, e)
      }
    }
  }

  onClick () {
    if (!this.props.disableClick) {
      this.open()
    }
  }

  open () {
    this.refInput.value = null
    this.refInput.click()
  }

  render () {
    const className = 'dropper ' + (this.props.className ? this.props.className : ' dropper-default ')

    return (
      <div>
        <div
          className={className}
          onClick={this.onClick}
          onDragEnter={this.onDragEnter}
          onDragOver={this.onDragOver}
          onDragLeave={this.onDragLeave}
          onDrop={this.onDrop}
        >
          {this.props.children}
        </div>
        {this.state.isWX ? <input
          type='file'
          ref={ref => (this.refInput = ref)}
          className='dropper-input'
          accept={this.props.accept}
          onChange={this.onDrop}
        /> : <input
          type='file'
          ref={ref => (this.refInput = ref)}
          className='dropper-input'
          multiple={this.props.multiple}
          accept={this.props.accept}
          onChange={this.onDrop}
        />}
      </div>
    )
  }
}

Dropper.defaultProps = {
  disableClick: false,
  multiple: true
}

Dropper.propTypes = {
  onDrop: PropTypes.func,

  onDropAccepted: PropTypes.func,
  onDropRejected: PropTypes.func,
  onDragEnter: PropTypes.func,
  onDragLeave: PropTypes.func,

  disableClick: PropTypes.bool,
  multiple: PropTypes.bool,
  accept: PropTypes.string
}

export default Dropper
