import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import Flex from '../flex'
import PropTypes from 'prop-types'

const letterList = _.map(_.range(65, 91), v => String.fromCharCode(v))

class Letter extends React.Component {
  constructor (props) {
    super(props)

    this.refLetter = React.createRef()

    this.top = 0
    this.itemHeight = 0

    this.state = {
      letter: null,
      showLetter: false
    }
  }

  componentDidMount () {
    const rect = ReactDOM.findDOMNode(this.refLetter.current).getBoundingClientRect()
    this.top = rect.top
    this.itemHeight = rect.height / 26
  }

  getY (event) {
    return event.touches !== undefined ? event.touches[0].pageY : event.clientY
  }

  handleTouch = (e) => {
    const top = this.getY(e)
    const letter = String.fromCharCode(parseInt((top - this.top) / this.itemHeight, 10) + 65)

    this.setState({
      letter
    })

    this.doChange(letter)
  }

  handleTouchStart = (e) => {
    this.handleTouch(e)

    this.setState({
      showLetter: true
    })
  }

  handleTouchEnd = () => {
    this.setState({
      showLetter: false
    })
  }

  doChange = _.throttle((letter) => {
    this.props.onChange(letter)
  }, 100)

  render () {
    const { letter, showLetter } = this.state

    return (
      <div className='absolute' style={{
        height: '100%',
        top: '0px',
        bottom: '0px',
        right: '0px',
        width: '2em'
      }}>
        <Flex
          ref={this.refLetter}
          column
          onTouchStart={this.handleTouchStart}
          onTouchMove={this.handleTouch}
          onTouchEnd={this.handleTouchEnd}
          style={{ height: '100%' }}
        >
          {_.map(letterList, v => (
            <Flex
              key={v}
              flex
              justifyCenter
              alignCenter
            >{v}</Flex>
          ))}
        </Flex>
        {showLetter && (
          <Flex
            alignCenter
            justifyCenter
            className='absolute'
            style={{
              top: '50%',
              right: '50vw',
              margin: '-40px -40px 0 0',
              width: '80px',
              height: '80px',
              fontSize: '50px',
              borderRadius: '4px',
              backgroundColor: 'rgba(0,0,0, 0.4)',
              color: 'white'
            }}
          >{letter}</Flex>
        )}
      </div>
    )
  }
}

Letter.propTypes = {
  onChange: PropTypes.func.isRequired
}

export default Letter
