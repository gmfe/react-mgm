import React from 'react'
import PreviewImage from '../../src/component/preview_image'

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

export default PreviewImageWrap
