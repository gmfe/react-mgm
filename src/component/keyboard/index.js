import { getLocale } from '../../locales'
import React from 'react'
import PropTypes from 'prop-types'
import Flex from '../flex'
import _ from 'lodash'

class Btn extends React.Component {
  render () {
    const { disabled, children, onClick, flex } = this.props
    return (
      <Flex
        flex={flex || 1}
        justifyCenter
        alignCenter
        className='border-1px-bottom-after border-1px-right-before text-24'
        style={disabled ? {
          opacity: 0.7
        } : {}}
        onClick={disabled ? null : onClick}
      >
        {children}
      </Flex>
    )
  }
}

class BtnPrimary extends React.Component {
  render () {
    const { disabled, children, onClick, flex } = this.props
    return (
      <Flex
        flex={flex || 1}
        justifyCenter
        alignCenter
        className='border-1px-bottom-after border-1px-right-before text-white b-bg-primary text-24'
        style={disabled ? {
          opacity: 0.7
        } : {}}
        onClick={disabled ? null : onClick}
      >
        {children}
      </Flex>
    )
  }
}

class Keyboard extends React.Component {
  handleClick = (text) => {
    const { value, onChange, onSubmit } = this.props

    if (text === 'submit') {
      onSubmit(text)
      return
    }

    if (text === 'back') {
      onChange(value.slice(0, -1))
      return
    }

    onChange(value + text)
  }

  render () {
    const { value, btnOne, btnTwo, submitText } = this.props
    return (
      <Flex column className='bg-white border-1px-top-before' style={{
        width: '100vw',
        height: '80vw'
      }}>
        <Flex flex>
          <Btn onClick={this.handleClick.bind(this, 1)}>1</Btn>
          <Btn onClick={this.handleClick.bind(this, 2)}>2</Btn>
          <Btn onClick={this.handleClick.bind(this, 3)}>3</Btn>
          <BtnPrimary onClick={this.handleClick.bind(this, 'back')} disabled={!value}>{getLocale('退格')}</BtnPrimary>
        </Flex>
        <Flex flex>
          <Btn onClick={this.handleClick.bind(this, 4)}>4</Btn>
          <Btn onClick={this.handleClick.bind(this, 5)}>5</Btn>
          <Btn onClick={this.handleClick.bind(this, 6)}>6</Btn>
          {btnOne ? <BtnPrimary onClick={btnOne.onClick}>{btnOne.text}</BtnPrimary> : <BtnPrimary/>}
        </Flex>
        <Flex flex>
          <Btn onClick={this.handleClick.bind(this, 7)}>7</Btn>
          <Btn onClick={this.handleClick.bind(this, 8)}>8</Btn>
          <Btn onClick={this.handleClick.bind(this, 9)}>9</Btn>
          {btnTwo ? <BtnPrimary onClick={btnTwo.onClick}>{btnTwo.text}</BtnPrimary> : <BtnPrimary/>}
        </Flex>
        <Flex flex>
          <Btn onClick={this.handleClick.bind(this, 0)} flex={2}>0</Btn>
          <Btn onClick={this.handleClick.bind(this, '.')}>.</Btn>
          <BtnPrimary onClick={this.handleClick.bind(this, 'submit')}>{submitText}</BtnPrimary>
        </Flex>
      </Flex>
    )
  }
}

Keyboard.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func,
  submitText: PropTypes.string,
  btnOne: PropTypes.shape({
    text: PropTypes.string,
    onClick: PropTypes.func
  }),
  btnTwo: PropTypes.shape({
    text: PropTypes.string,
    onClick: PropTypes.func
  })
}

Keyboard.defaultProps = {
  onSubmit: _.noop,
  submitText: getLocale('完成')
}

export default Keyboard
