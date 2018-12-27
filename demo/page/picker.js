import React from 'react'
import ConfirmPicker from '../../src/component/picker/confirm_picker'
import Picker from '../../src/component/picker/picker'
import ConfirmCouplingPicker from '../../src/component/picker/confirm_coupling_picker'
import CouplingPicker from '../../src/component/picker/coupling_picker'

class PickerWrap extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      values: [
        'Mr.',
        'Micheal',
        'Jordan'
      ],
      datas: [
        [{ value: 'Mr.', text: 'Mr.' }, { value: 'Mrs.', text: 'Mrs.' }, { value: 'Ms.', text: 'Ms.' }, {
          value: 'Dr.',
          text: 'Dr.'
        }],
        [{ value: 'John', text: 'John' }, { value: 'Micheal', text: 'Micheal' }, {
          value: 'Elizabeth',
          text: 'Elizabeth'
        }],
        [{ value: 'Lennon', text: 'Lennon' }, { value: 'Jackson', text: 'Jackson' }, {
          value: 'Jordan',
          text: 'Jordan'
        }, { value: 'Legend', text: 'Legend' }, { value: 'Taylor', text: 'Taylor' }]
      ]
    }
  }

  handleChange = (values) => {
    this.setState({
      values
    })
  }

  handleClick = () => {
    const { datas, values } = this.state

    ConfirmPicker.render({
      datas,
      values,
      renderOption: (index, option) => {
        if (index === 0) {
          return <div>{option.value} <span style={{ color: 'red' }}>red</span></div>
        }
        return option.value
      }
    }).then(v => {
      console.log('resolve', v)
      this.setState({
        values: v
      })
    }, () => {
      console.log('reject')
    })
  }

  render () {
    const { datas, values } = this.state

    return (
      <div>
        <Picker
          datas={datas}
          values={values}
          onChange={this.handleChange}
          renderOption={(index, option) => {
            if (index === 1) {
              return <div>{option.value} <span style={{ color: 'red' }}>red</span></div>
            }
            return option.value
          }}
        />

        <button className='weui-btn' onClick={this.handleClick}>picker</button>

        <CouplingPickerWrap/>
      </div>
    )
  }
}

class CouplingPickerWrap extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      values: ['T7936', 'S11186', '777777'],
      datas: [{
        'value': 'T11660',
        'text': '喵喵分仓一',
        'children': [{
          'value': 'S8058',
          'text': '综合商品-喵喵分仓一',
          'children': [{
            'value': '00000',
            'text': '000000'
          }]
        }]
      }, {
        'value': 'T7936',
        'text': '喵喵总仓',
        'children': [{
          'value': 'S8056',
          'text': '综合商品',
          'children': [{
            'value': '11111',
            'text': '111111'
          }]
        }, {
          'value': 'S11186',
          'text': '复制报价单',
          'children': [{
            'value': '2222222',
            'text': '222222'
          }, {
            'value': '777777',
            'text': '777777'
          }]
        }, {
          'value': 'S11226',
          'text': '复制报价单D',
          'children': [{
            'value': '333333',
            'text': '33333333'
          }]
        }, {
          'value': 'S9176',
          'text': '预售报价单',
          'children': [{
            'value': '44444444',
            'text': '4444444'
          }]
        }, {
          'value': 'S11188',
          'text': '复制报价单B',
          'children': [{
            'value': '5555555',
            'text': '5555555'
          }]
        }, {
          'value': 'S11189',
          'text': '复制报价单C',
          'children': [{
            'value': '666666',
            'text': '6666666'
          }]
        }]
      }, {
        'value': 'T12469',
        'text': '喵喵分仓二',
        'children': [{
          'value': 'S8443',
          'text': '蔬菜报价单',
          'children': [{
            'value': '88888',
            'text': '888888'
          }, {
            'value': '99999',
            'text': '99999'
          }]
        }]
      }]
    }
  }

  handleChange = (values) => {
    this.setState({
      values
    })
  }

  handleClick = () => {
    const { datas, values } = this.state

    ConfirmCouplingPicker.render({
      datas,
      values
    }).then(v => {
      console.log('resolve', v)
      this.setState({
        values: v
      })
    }, () => {
      console.log('reject')
    })
  }

  render () {
    const { datas, values } = this.state

    return (
      <div>
        <CouplingPicker
          datas={datas}
          values={values}
          onChange={this.handleChange}
          renderOption={(index, option) => {
            return option.text
          }}
        />

        <button className='weui-btn' onClick={this.handleClick}>couplingPicker</button>
      </div>
    )
  }
}

export default PickerWrap
