import React from 'react'
import Page from '../../src/component/page'
import Flex from '../../src/component/flex'

class FlexWrap extends React.Component {
  render () {
    return (
      <Page white>
        <h2>flex
          <small><i>具体见代码容易理解</i></small>
        </h2>
        <hr/>
        <div className='padding-12'>
          横向 默认 Flex
          <Flex>
            <Flex className='border'>
              1
            </Flex>
            <Flex flex className='border'>Flex flex 会占满</Flex>
          </Flex>
          纵向 Flex column
          <Flex column>
            <Flex className='border'>1</Flex>
            <Flex className='border'>2</Flex>
          </Flex>
        </div>
        <div className='padding-12'>
          不换行 默认 宽度会被压缩 FLex
          <Flex>
            <Flex className='border' style={{ width: '100px' }}>100px</Flex>
            <Flex className='border' style={{ width: '100px' }}>100px</Flex>
            <Flex className='border' style={{ width: '100px' }}>100px</Flex>
            <Flex className='border' style={{ width: '100px' }}>100px</Flex>
          </Flex>
          换行 FLex wrap
          <Flex wrap>
            <Flex className='border' style={{ width: '100px' }}>100px</Flex>
            <Flex className='border' style={{ width: '100px' }}>100px</Flex>
            <Flex className='border' style={{ width: '100px' }}>100px</Flex>
            <Flex className='border' style={{ width: '100px' }}>100px</Flex>
          </Flex>
        </div>
        <div className='padding-12'>
          Flex width height 如果定了width|height则不能被压缩
          <Flex>
            <Flex className='border' width={'100px'}>100px</Flex>
            <Flex className='border' width={'100px'}>100px</Flex>
            <Flex className='border' width={'100px'}>100px</Flex>
            <Flex className='border' width={'100px'}>100px</Flex>
          </Flex>
        </div>
        <div className='padding-12'>
          主轴对齐方式 默认 Flex
          <Flex>
            <Flex className='border' style={{ width: '100px' }}>100px</Flex>
            <Flex className='border' style={{ width: '100px' }}>100px</Flex>
          </Flex>
          主轴对齐方式 Flex justifyCenter
          <Flex justifyCenter>
            <Flex className='border' style={{ width: '100px' }}>100px</Flex>
            <Flex className='border' style={{ width: '100px' }}>100px</Flex>
          </Flex>
          主轴对齐方式 Flex justifyEnd
          <Flex justifyEnd>
            <Flex className='border' style={{ width: '100px' }}>100px</Flex>
            <Flex className='border' style={{ width: '100px' }}>100px</Flex>
          </Flex>
          主轴对齐方式 Flex justifyBetween
          <Flex justifyBetween>
            <Flex className='border' style={{ width: '100px' }}>100px</Flex>
            <Flex className='border' style={{ width: '100px' }}>100px</Flex>
          </Flex>
          主轴对齐方式 Flex justifyAround
          <Flex justifyAround>
            <Flex className='border' style={{ width: '100px' }}>100px</Flex>
            <Flex className='border' style={{ width: '100px' }}>100px</Flex>
          </Flex>
        </div>
        <div className='padding-12'>
          交叉轴对齐 默认 Flex
          <Flex>
            <Flex className='border' style={{ width: '50px' }}>50 50</Flex>
            <Flex className='border' style={{ width: '50px', height: '100px' }}>50 100</Flex>
          </Flex>
          交叉轴对齐 Flex alignEnd
          <Flex alignEnd>
            <Flex className='border' style={{ width: '50px' }}>1<br/>2</Flex>
            <Flex className='border' style={{ width: '50px' }}>1<br/>2<br/>3</Flex>
          </Flex>
          交叉轴对齐 Flex alignCenter
          <Flex alignCenter>
            <Flex className='border' style={{ width: '50px' }}>1<br/>2</Flex>
            <Flex className='border' style={{ width: '50px' }}>1<br/>2<br/>3</Flex>
          </Flex>
          交叉轴对齐 Flex alignStretch
          <Flex alignStretch>
            <Flex className='border' style={{ width: '50px' }}>1<br/>2</Flex>
            <Flex className='border' style={{ width: '50px' }}>1<br/>2<br/>3</Flex>
          </Flex>
          交叉轴对齐 Flex alignBaseline
          <Flex alignBaseline>
            <Flex className='border' style={{ width: '50px' }}>1<br/>2</Flex>
            <Flex className='border padding-top-8' style={{ width: '50px' }}>1<br/>2<br/>3</Flex>
          </Flex>
        </div>
      </Page>
    )
  }
}

export default FlexWrap
