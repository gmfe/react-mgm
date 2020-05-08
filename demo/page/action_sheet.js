import React from 'react'
import { createHashHistory } from 'history'
import Page from '../../src/component/page'
import ActionSheet from '../../src/component/action_sheet'

const history = createHashHistory()
const Demo = () => {
  const handleOpen = () => {
    const list = ['直接签开', '等待', '删除', '取消']
    ActionSheet.render({
      message: '这是描述信息',
      options: list,
      cancelIndex: list.length - 1,
      destructiveIndex: list.length - 2
    }, (index) => {
      console.log(index)
      if (index === 0) {
        history.replace('/demo')
        return false
      }
    })
  }

  return (
    <Page>
      <button className='weui-btn weui-btn_primary' onClick={handleOpen}>
        open action sheet
      </button>
    </Page>
  )
}

export default Demo
