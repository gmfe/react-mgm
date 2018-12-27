import React from 'react'
import Page from '../../src/component/page'
import {
  CellsTitle,
  Cells,
  CellsTips,
  Cell,
  CellHeader,
  CellBody,
  CellFooter,
  CellSwipe
} from '../../src'

class CellWrap extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      data: [{
        id: 1,
        text: '正文',
        footer: '可删除'
      }, {
        in: 2,
        text: '正文',
        footer: '可删除|可编辑'
      }]
    }
  }

  render () {
    const { data } = this.state
    return (
      <Page>
        <CellsTitle>Title</CellsTitle>
        <Cells>
          <Cell>
            <CellBody>正文</CellBody>
          </Cell>
          <Cell>
            <CellBody>正文</CellBody>
            <CellFooter>辅助文字</CellFooter>
          </Cell>
          <Cell>
            <CellHeader>头部</CellHeader>
            <CellBody>正文</CellBody>
            <CellFooter>辅助文字</CellFooter>
          </Cell>
          <Cell access onClick={() => window.alert('hello')}>
            <CellBody>正文</CellBody>
            <CellFooter/>
          </Cell>
          <Cell access onClick={() => window.alert('hello')}>
            <CellBody>正文</CellBody>
            <CellFooter>辅助文字</CellFooter>
          </Cell>
          <Cell access onClick={() => window.alert('hello')}>
            <CellBody>正文</CellBody>
            <CellFooter className='text'>辅助文字其他颜色</CellFooter>
          </Cell>
        </Cells>
        <CellsTips>Tips</CellsTips>
        <div className='padding-8'/>
        <CellsTitle>左滑</CellsTitle>
        <Cells>
          <CellSwipe
            bodyText={data[0].text}
            footerText={data[0].footer}
            onClick={() => (window.alert('hello'))}
            right={[{
              text: 'something',
              onClick: () => window.alert('something'),
              style: {
                background: 'red'
              }
            }, {
              text: 'haha',
              onClick: () => window.alert('haha'),
              style: {
                background: 'blue'
              }
            }]}
          />
        </Cells>
      </Page>
    )
  }
}

export default CellWrap
