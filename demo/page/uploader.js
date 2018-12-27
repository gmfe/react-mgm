import React from 'react'
import Uploader from '../../src/component/uploader'
import _ from 'lodash'

class UploaderWrap extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      img: ''
    }
    this.lrz = null
  }

  render () {
    return (
      <div>
        <Uploader onUpload={this.handleUploader} accept='image/*'/>

        <Uploader onUpload={this.handleUploader} accept='.xlsx'>
          <button className='btn'>自定义</button>
        </Uploader>

        <div>
          原图
          <img style={{ maxWidth: '100%' }} src={this.state.img} alt=''/>
        </div>
        <div>压缩
          <img style={{ maxWidth: '100%' }} src={this.state.resizeImg ? this.state.resizeImg.base64 : ''} alt=''/>
        </div>
      </div>
    )
  }

  handleUploader = (files, event) => {
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

export default UploaderWrap
