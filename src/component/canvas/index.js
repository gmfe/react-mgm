import React, {
  useEffect,
  forwardRef,
  useImperativeHandle,
  useRef
} from 'react'
import PropTypes from 'prop-types'

const mapHandle = {
  touchstart: 'mousedown',
  touchmove: 'mousemove',
  touchend: 'mouseup'
}

// 水平居中
const containImg = (sx, sy, box_w, box_h, source_w, source_h) => {
  let dx = sx
  let dy = sy
  let dWidth = box_w
  let dHeight = box_h
  if ((source_h / source_w) < (box_h / box_w)) {
    dHeight = source_h * box_w / source_w
  } else if ((source_h / source_w) > (box_h / box_w)) {
    dWidth = source_w * box_h / source_h
    dx = sx + (box_w - dWidth) / 2
  }
  return {
    dx,
    dy,
    dWidth,
    dHeight
  }
}

const initCanvas = (canvas, image = '') => {
  const ctx = canvas.getContext('2d')
  ctx.lineCap = 'butt'
  ctx.lineJoin = 'miter'
  ctx.shadowBlur = 0
  ctx.shadowColor = 'fully-transparent black'
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  if (image) {
    const img = new window.Image()
    img.setAttribute('crossOrigin', 'Anonymous')
    img.src = image
    img.onload = function () {
      const { width, height } = img
      const { width: cWidth, height: cHeight } = canvas
      const { dx, dy, dWidth, dHeight } = containImg(0, 0, cWidth, cHeight, width, height)
      ctx.drawImage(img, dx, dy, dWidth, dHeight)
    }
  }
}

const Canvas = forwardRef((props, ref) => {
  const canvasRef = useRef(null)
  const { background } = props
  useImperativeHandle(ref, () => ({
    reset: () => {
      const canvas = canvasRef.current
      initCanvas(canvas, props.background)
    },
    toBlob: (callback, type, encoderOptions) => {
      return canvasRef.current.toBlob(callback, type, encoderOptions)
    },
    toDataURL: (type, encoderOptions) => {
      return canvasRef.current.toDataURL(type, encoderOptions)
    }
  }))

  useEffect(() => {
    const handleStart = () => {
      const canvas = canvasRef.current
      const cxt = canvas.getContext('2d')
      cxt.beginPath()
      cxt.lineCap = 'round'
      cxt.lineJoin = 'round'
      cxt.shadowBlur = 1
      cxt.shadowColor = '#000'
      canvas.addEventListener(getEventHandle('touchmove'), handleMove, false)
      canvas.addEventListener(getEventHandle('touchend'), handleEnd, false)
    }

    const handleMove = (event) => {
      event.preventDefault()
      const isSupportTouch = 'ontouchstart' in window
      const evt = isSupportTouch ? event.touches[0] : event
      const canvas = canvasRef.current
      const coverPos = canvas.getBoundingClientRect()
      const cxt = canvas.getContext('2d')
      const mouseX = evt.clientX - coverPos.left
      const mouseY = evt.clientY - coverPos.top
      cxt.lineTo(mouseX, mouseY)
      cxt.stroke()
    }

    const handleEnd = (event) => {
      event.preventDefault()
      const canvas = canvasRef.current
      canvas.removeEventListener(getEventHandle('touchmove'), handleMove, false)
      canvas.removeEventListener(getEventHandle('touchend'), handleEnd, false)
    }

    const canvas = canvasRef.current
    initCanvas(canvas, background)
    canvas.addEventListener(getEventHandle('touchstart'), handleStart, false)
    return () => {
      canvas.removeEventListener(
        getEventHandle('touchstart'),
        handleStart,
        false
      )
    }
  }, [canvasRef, background])

  const getEventHandle = (str) => {
    if (`on${str}` in window) {
      return str
    } else {
      return mapHandle[str]
    }
  }

  const isCanvasSupported = () => {
    const elem = document.createElement('canvas')
    return !!(elem.getContext && elem.getContext('2d'))
  }
  return (
    <div style={{ fontSize: 0 }}>
      {isCanvasSupported ? (
        <canvas ref={canvasRef} width={props.width} height={props.height}/>
      ) : (
        '对不起，当前浏览器暂不支持此功能！'
      )}
    </div>
  )
})

Canvas.propTypes = {
  background: PropTypes.string,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
}

export default React.memo(Canvas)
