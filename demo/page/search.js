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
        <p><b>场景：</b>搜索内容仅限于当前页，搜索用于关键词过滤。</p>
        <p><b>交互：</b>输入搜索文字后，点击键盘搜索按钮搜索信息，点击清空按钮清空当前搜索框内容，点击取消按钮即可回到搜索初始状态。</p>

        <h3>search带搜索按钮</h3>
        <p><b>场景：</b>一般用于点击搜索框时另起一页，从一个假的搜索框跳转到真正的搜索页面。一般带有返回键。补充：微信端这种自带返回键的，左边没有返回键。</p>
        <p><b>交互：</b>输入搜索文字后，点击搜索按钮或键盘搜索按钮搜索信息，点击清空按钮清空当前搜索框内容，点击返回按钮返回上页。</p>
        <Search
          placeholder='在站内搜索'
          value={this.state.value}
          onChange={value => this.setState({ value })}
          onSearch={() => console.log('搜索拉')}
        />

        <h3>假的search框</h3>
        <p><b>场景：</b>一般用于点击搜索框时另起一页，从一个假的搜索框跳转到真正的搜索页面。</p>
        <FakeSearch
          placeholder='站内搜索'
          className='text-center'
          onClick={() => {}}
        />
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
