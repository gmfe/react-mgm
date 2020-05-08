import React from 'react'
import PropTypes from 'prop-types'
import Page from '../page'
import Flex from '../flex'

const View = (props) => {
  return (
    <Page
      className='m-signature-bottom-auto-wrap'
      white
      tabbar={
        props.canModify ? <Flex
          alignCenter
          justifyCenter
          className='padding-8 border-1px-top-before'
        >
          <a className='text-16 text-primary' onClick={props.onClick}>
            修改签名
          </a>
        </Flex> : null}
    >
      <div style={{ fontSize: 0 }}>
        <img width='100%' src={props.image}/>
      </div>
    </Page>
  )
}

View.propTypes = {
  image: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  canModify: PropTypes.bool
}

export default View
