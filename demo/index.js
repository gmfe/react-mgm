import React from 'react'
import ReactDOM from 'react-dom'
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import {
  LayoutRoot
} from './../src/index'
import _ from 'lodash'
import Loadable from 'react-loadable'
import '../node_modules/gm-mfont/iconfont.css'
import './index.less'

class App extends React.Component {
  render () {
    return (
      <div>
        {React.cloneElement(this.props.children, {
          key: this.props.location.pathname
        })}
        <LayoutRoot/>
      </div>
    )
  }
}

const navList = [
  {
    title: 'CSS',
    list: [
      {
        to: 'https://weui.io/',
        text: 'WEUI'
      },
      {
        to: 'http://www.iconfont.cn/',
        text: 'icon'
      },
      'border',
      'gap',
      'theme',
      'tabs'
    ]
  }, {
    title: 'Component',
    list: [
      'button',

      'calendar',
      'cell',
      'counter',
      'cursor_fix',

      'dialog',
      'divider',

      'flex',
      'flip_number',

      'infinite',

      'loading',
      'lazy_img',

      'nprogress',
      'textarea',
      'toast',
      'tooltip',

      'page',
      'picker',
      'preview_image',
      'price',
      'popup',

      'search',
      'select',
      'slider',
      'square',

      'uploader',
      'storage'
    ]
  }
]

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      left: false
    }
  }

  render () {
    return (
      <div>
        {_.map(navList, nav => (
          <div key={nav.title}>
            <h3>{nav.title}</h3>
            {_.map(nav.list, v => (
              v.text ? (
                <button
                  key={v.text}
                  className='weui-btn weui-btn_default weui-btn_mini margin-4'
                  onClick={() => (window.open(v.to))}
                >{v.text}</button>
              ) : (
                <button
                  key={v}
                  className='weui-btn weui-btn_default weui-btn_mini margin-4'
                  onClick={() => (window.location.href = `#/${v}`)}
                >{v}</button>
              )
            ))}
          </div>
        ))}
      </div>
    )
  }
}

const LoadableLoading = ({ isLoading, error }) => {
  if (isLoading) {
    return <div className='text-center'>加载中...</div>
  } else if (error) {
    return <div className='text-center'>发生了错误！</div>
  } else {
    return null
  }
}

const routeList = []

_.each(navList, nav => (
  _.each(nav.list, v => {
    if (typeof v === 'string') {
      routeList.push(
        <Route key={v} exact path={'/' + v} component={(
          Loadable({
            loader: () => import(`./page/${v}`),
            loading: LoadableLoading
          })
        )}/>
      )
    }
  })
))

const Root = () => (
  <React.StrictMode>
    <Router>
      <Route path='/' component={(props) => (
        <App {...props}>
          <Switch>
            <Route exact path='/demo' component={(
              Loadable({
                loader: () => import('./page/demo'),
                loading: LoadableLoading
              })
            )}/>
            <Route exact path='/' render={() => <Redirect from='/' to='/home'/>}/>
            <Route exact path='/home' component={Home}/>
            {routeList}
          </Switch>
        </App>
      )}/>
    </Router>
  </React.StrictMode>
)

ReactDOM.render(<Root/>, window.document.getElementById('appContainer'))
