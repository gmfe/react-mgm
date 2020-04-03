import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import SVGSuccessCircle from '../../../svg/success_circle.svg'
import SVGCloseCircle from '../../../svg/close_circle.svg'

class ProgressBar extends React.Component {
  constructor (props) {
    super(props)
    this.getIcon = ::this.getIcon
  }

  getIcon () {
    const { status } = this.props
    if (status === 'success') {
      return <SVGSuccessCircle className='progress-bar-success-icon'/>
    }
    return <SVGCloseCircle className='progress-bar-exception-icon'/>
  }

  render () {
    const { percentage, status, strokeWidth, text, textInside, textInsideFix, showText, className, textColor, strokeColor, bgColor, ...rest } = this.props
    return (
      <div className={classnames('progress', className)} {...rest}>
        <div className='progress-bar'>
          <div
            className='progress-bar-outer'
            style={{ height: `${strokeWidth}px`, backgroundColor: bgColor }}
          >
            <div
              className={classnames('progress-bar-inner',
                {
                  'progress-bar-success': status === 'success',
                  'progress-bar-exception': status === 'exception'
                })}
              style={{ width: `${percentage}%`, backgroundColor: strokeColor }}
            >
              {
                showText && textInside && !textInsideFix &&
                  <div className='progress-bar-innerText' style={{ color: textColor }}>
                    {text || `${percentage}%`}
                  </div>
              }
            </div>
            {
              showText && textInside && textInsideFix &&
                <div
                  className={classnames('progress-bar-innerTextFix-wrapper')}
                  style={{ textAlign: textInsideFix }}
                >
                  <div className='progress-bar-innerText' style={{ color: textColor }}>
                    {text || `${percentage}%`}
                  </div>
                </div>
            }
          </div>
        </div>
        {
          showText &&
            !textInside &&
            <div
              className='progress-bar-text'
              style={{ fontSize: `12px`, color: textColor }}
            >
              {status ? this.getIcon() : text || `${percentage}%`}
            </div>
        }
      </div>
    )
  }
}

ProgressBar.propTypes = {
  percentage: PropTypes.number.isRequired,
  text: PropTypes.string,
  status: PropTypes.oneOf(['success', 'exception']),
  strokeWidth: PropTypes.number,
  textInside: PropTypes.bool,
  textInsideFix: PropTypes.oneOf(['left', 'right', 'center']),
  showText: PropTypes.bool
}

ProgressBar.defaultProps = {
  textInside: false,
  showText: true
}

export default ProgressBar
