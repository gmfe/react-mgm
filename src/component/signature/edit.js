import React, { useRef, useState, useEffect, memo } from 'react'
import PropTypes from 'prop-types'
import Bottom from './bottom'
import Page from '../page'
import Canvas from '../canvas'

const getDefaultImage = (width, height) => {
  return `https://image.document.guanmai.cn/product_img/1587956803853-3681999445086317.png?imageView2/1/w/${
    width
  }/h/${height}|watermark/4/text/562-5ZCN5Yy65Z-f/font/5a6L5L2T/fontsize/360/fill/I0I4QjZCNg==/rotate/-20/uw/${parseInt(
    width / 2
  )}/uh/${parseInt(height / 3)}`
}

const Edit = (props) => {
  const canvasRef = useRef(null)
  const [area, setArea] = useState({
    width: 0,
    height: 0
  })
  // 是否签名了 默认没签名
  const [ isSignature, setIsSignature ] = useState(false)

  useEffect(() => {
    const page = document.getElementById('signature-edit')
    page.addEventListener('touchmove', function (e) {
      // 阻止IOS的橡皮筋滚动
      e.preventDefault()
      setIsSignature(true)
    }, { passive: false })

    const bottom = document.getElementById('signature-bottom')
    setArea({
      width: document.body.clientWidth,
      height: document.body.clientHeight - bottom.clientHeight
    })
  }, [setArea])

  const handleReset = () => {
    setIsSignature(false)
    canvasRef.current.reset()
  }

  const handleSubmit = () => {
    if (props.output === 'base64') {
      props.onSave(canvasRef.current.toDataURL('image/png'), isSignature)
    } else {
      canvasRef.current.toBlob((blob) => {
        props.onSave(blob, isSignature)
      }, 'image/png')
    }
  }

  const getImage = (image, width, height) => {
    if (!width || !height) return ''
    return image || getDefaultImage(width, height)
  }

  const { width, height } = area
  return (
    <Page
      className='m-signature-bottom-auto-wrap'
      white
      id='signature-edit'
      tabbar={
        <Bottom
          viewOrEdit={!!props.viewOrEdit}
          onReset={handleReset}
          onSubmit={handleSubmit}
        />
      }
    >
      <Canvas
        ref={canvasRef}
        background={getImage(props.image, width, height)}
        width={width}
        height={height}
      />
    </Page>
  )
}

Edit.propTypes = {
  onSave: PropTypes.func,
  image: PropTypes.string,
  viewOrEdit: PropTypes.bool,
  output: PropTypes.oneOf(['base64', 'blob'])
}

Edit.defaultProps = {
  output: 'base64'
}

export default memo(Edit)
