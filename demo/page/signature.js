import React from 'react'
import Signature from '../../src/component/signature'

const Component = () => {
  return (
    <Signature
      output='blob'
      image='https://image.document.guanmai.cn/product_img/1588907508246-058712363353500274.png'
      onSave={(blob) => {
        console.log(blob)
      }}
    />
  )
}

export default Component
