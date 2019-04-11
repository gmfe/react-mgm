import React from 'react'
import Popup from '../popup'
import LayoutRoot from '../layout_root'

const PickerStatics = {
  render (options) {
    const _onHide = options.onHide
    options.onHide = () => {
      PickerStatics.hide()
      _onHide && _onHide()
    }
    LayoutRoot.renderWith(LayoutRoot.TYPE.PICKER, (
      <Popup
        {...options}
        show
        isPickPopup
      />
    ))
  },

  hide () {
    LayoutRoot.hideWith(LayoutRoot.TYPE.PICKER)
  }
}

export default PickerStatics
