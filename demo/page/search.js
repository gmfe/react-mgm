import React from 'react'
import Search from '../../src/component/search/search'
import SearchPage from '../../src/component/search/page'
import FakeSearch from '../../src/component/search/fake_search'
import Header from '../../src/component/header'

class SearchWrap extends React.Component {
  state = {
    value: ''
  }

  render () {
    return (
      <div>
        <h1>Search</h1>
        <h3>search带取消按钮（点Header的搜索按钮）</h3>
        <h3>search带搜索按钮 （一般一个路由承载的搜索页）</h3>
        <Search
          placeholder='在站内搜索'
          value={this.state.value}
          onChange={value => this.setState({ value })}
          onSearch={() => console.log('搜索拉')}
        />

        <h3>FakeSearch 作为搜索入口</h3>
        <FakeSearch
          placeholder='站内搜索'
          className='text-center'
          onClick={() => {}}
        />
        <FakeSearch center/>
        <FakeSearch light placeholder=''/>
      </div>
    )
  }
}

class Com extends React.Component {
  state = {
    value: '',
    searchValue: '', // 搜索结果用的值
    active: false
  }

  render () {
    return (
      <SearchPage
        header={<Header
          title='demo'
          right={<i className='weui-icon-search text-16 padding-lr-4 text'/>}
          onClick={() => {
            // 同时初始化下搜索数据
            this.setState({
              active: true,
              value: '',
              searchValue: ''
            })

            // 也有可能仅仅 active，搜索数据用之前的
            // this.setState({
            //   active: true,
            // })
          }}
        />}

        active={this.state.active}

        value={this.state.value}
        onChange={value => this.setState({ value })}

        onSearch={() => {
          console.log('搜索拉')
          this.setState({
            searchValue: this.state.value
          })
        }}
        onCancel={() => {
          console.log(this.state.searchValue)
          this.setState({
            active: false,
            value: this.state.searchValue
          })
        }}
      >
        <div>
          输入框值:{this.state.value}
          <br/>
          搜索值:{this.state.searchValue}
          <br/>
          历史搜索:
          <button className='weui-btn weui-btn_mini' onClick={() => {
            this.setState({
              active: true,
              value: '青菜',
              searchValue: '青菜'
            })
          }}>青菜</button>

          <button className='weui-btn weui-btn_mini' onClick={() => {
            this.setState({
              active: true,
              value: '黄瓜',
              searchValue: '黄瓜'
            })
          }}>黄瓜
          </button>
        </div>
        <hr/>
        <SearchWrap/>
      </SearchPage>
    )
  }
}

export default Com
