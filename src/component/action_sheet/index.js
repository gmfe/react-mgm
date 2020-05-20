import React from 'react'
import _ from 'lodash'
import classNames from 'classnames'
import Popup from '../popup'

const hide = () => {
  Popup.hide()
}

export default {
  render: ({
    message,
    options,
    cancelIndex,
    destructiveIndex
  }, cb) => {
    const handleAction = (index) => {
      if (cancelIndex === index) {
        hide()
      } else {
        Promise.resolve(cb(index)).then((res) => {
          res !== false && hide()
        })
      }
    }

    Popup.render({
      bottom: true,
      children: <div className='m-action-sheet-body'>
        <div className='m-action-sheet-message'>{message}</div>
        <div className='m-action-sheet-list'>
          {_.map(options, (o, i) => {
            return <div
              key={i}
              onClick={handleAction.bind(null, i)}
              className={
                classNames('m-action-sheet-list-item border-1px-top-before', {
                  'm-action-sheet-list-destructive-item': destructiveIndex === i,
                  'm-action-sheet-cancel-item': cancelIndex === i
                })}>
              {o}
              {
                cancelIndex === i && <span className='m-action-sheet-cancel-mask'/>
              }
            </div>
          })}
        </div>
      </div>
    })
  },
  hide
}
