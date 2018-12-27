import React from 'react'
import Select from '../../src/component/select'

class SelectWrap extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      show: false,
      data: [
        { value: 1, text: '深圳' },
        { value: 2, text: '罗湖' },
        { value: 3, text: '南山' },
        { value: 4, text: '宝安' },
        { value: 5, text: '福田' },
        { value: 6, text: '龙岗' }
      ],
      value: null
    }
  }

  handleChange (value) {
    console.log(value)
    this.setState({
      value,
      show: false
    })
  }

  handleClick () {
    this.setState({
      show: true
    })
  }

  handleClickStatic = () => {
    const { data, value } = this.state

    Select.render({
      data,
      value
    }).then(v => {
      console.log(v)
      this.setState({
        value: v
      })
    })
  }

  render () {
    const item = _.find(this.state.data, v => v.value === this.state.value)

    return (
      <div>
        <button className='weui-btn weui-btn_primary' onClick={::this.handleClick}>选择</button>
        <button className='weui-btn weui-btn_primary' onClick={::this.handleClickStatic}>选择(静态方法)</button>
        {item && item.name}
        <Select
          show={this.state.show}
          data={this.state.data}
          value={this.state.value}
          onChange={::this.handleChange}/>
        <div>asdfasf</div>
        <div>asdfasf</div>
        <div>asdfasf</div>
        <div>asdfasf</div>
        <div>asdfasf</div>
        <div>asdfasf</div>
        <div>asdfasf</div>
        <div>asdfasf</div>
        <div>asdfasf</div>
        <div>asdfasf</div>
        <div>asdfasf</div>
        <div>asdfasf</div>
        <div>asdfasf</div>
        <div>asdfasf</div>
        <div>asdfasf</div>
        <div>asdfasf</div>
        <div>asdfasf</div>
        <div>asdfasf</div>
        <div>asdfasf</div>
        <div>asdfasf</div>
        <div>asdfasf</div>
        <div>asdfasf</div>
        <div>asdfasf</div>
        <div>asdfasf</div>
        <div>asdfasf</div>
        <div>asdfasf</div>
        <div>asdfasf</div>

        <div>asdfasf</div>
        <div>asdfasf</div>
        <div>asdfasf</div>
        <div>asdfasf</div>
        <div>asdfasf</div>
        <div>asdfasf</div>
        <div>asdfasf</div>
        <div>asdfasf</div>
        <div>asdfasf</div>
        <div>asdfasf</div>
        <div>asdfasf</div>
        <div>asdfasf</div>
        <div>asdfasf</div>
        <div>asdfasf</div>
        <div>asdfasf</div>
        <div>asdfasf</div>
        <div>asdfasf</div>
        <div>asdfasf</div>
        <div>asdfasf</div>
        <div>asdfasf</div>
        <div>asdfasf</div>
      </div>
    )
  }
}

export default SelectWrap
