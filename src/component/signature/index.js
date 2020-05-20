import React, { useState } from 'react'
import PropTypes from 'prop-types'
import View from './view'
import Edit from './edit'

const Signature = (props) => {
  const [isEdit, setEdit] = useState(props.viewOrEdit && false)
  const { image } = props

  if (image && !isEdit) {
    return (
      <View
        canModify={props.canModify}
        image={image}
        onClick={() => {
          setEdit(true)
        }}
      />
    )
  } else {
    return (
      <Edit
        image={image}
        output={props.output}
        onSave={props.onSave}
        viewOrEdit={props.viewOrEdit}
      />
    )
  }
}

Signature.propTypes = {
  /** 输出类型 */
  output: PropTypes.oneOf(['base64', 'blob']),
  image: PropTypes.string,
  onSave: PropTypes.func.isRequired,
  /** 是否有修改权限  */
  canModify: PropTypes.bool,
  /** false直接进入View  true直接进入Edit 场景是首次签名（保存按钮文案为确认签收）还是修改签名（保存按钮文案为保存） */
  viewOrEdit: PropTypes.bool
}

Signature.defaultProps = {
  output: 'base64',
  // 不传默认有修改权限
  canModify: true,
  // 不传默认进入View
  viewOrEdit: false
}

export default Signature
