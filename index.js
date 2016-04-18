import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory, Link} from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import 'gm-font/iconfont.css';
import ReactMGM from './src/index';
import './src/index.less';

const {Flex, Textarea, NProgress, Toast, Loading, Page, Infinite, Header} = ReactMGM;

const App = React.createClass({
    render(){
        console.log(this.props);
        return (
            <ReactCSSTransitionGroup
                component="div"
                transitionName="page"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}
            >
                {React.cloneElement(this.props.children, {
                    key: this.props.location.pathname
                })}
            </ReactCSSTransitionGroup>
        );
    }
});

const Home = React.createClass({
    getInitialState(){
        return {
            left: false
        };
    },
    render(){
        return (
            <Page header={<Header title="标题"></Header>} tabbar={this.renderTabbar()}>
                <h2>React MGM</h2>
                <div className="weui_cells_title">Component</div>
                <div className="weui_cells weui_cells_access">
                    <Link to="/gap" className="weui_cell">
                        <div className="weui_cell_bd weui_cell_primary">gap</div>
                        <div className="weui_cell_ft"></div>
                    </Link>
                    <Link to="/flex" className="weui_cell">
                        <div className="weui_cell_bd weui_cell_primary">flex</div>
                        <div className="weui_cell_ft"></div>
                    </Link>
                    <Link to="/textarea" className="weui_cell">
                        <div className="weui_cell_bd weui_cell_primary">textarea</div>
                        <div className="weui_cell_ft"></div>
                    </Link>
                    <Link to="/toast" className="weui_cell">
                        <div className="weui_cell_bd weui_cell_primary">toast</div>
                        <div className="weui_cell_ft"></div>
                    </Link>
                    <Link to="/loading" className="weui_cell">
                        <div className="weui_cell_bd weui_cell_primary">loading</div>
                        <div className="weui_cell_ft"></div>
                    </Link>
                    <Link to="/nprogress" className="weui_cell">
                        <div className="weui_cell_bd weui_cell_primary">nprogress</div>
                        <div className="weui_cell_ft"></div>
                    </Link>
                    <Link to="/infinite" className="weui_cell">
                        <div className="weui_cell_bd weui_cell_primary">infinite</div>
                        <div className="weui_cell_ft"></div>
                    </Link>
                </div>
                <div style={{height: 500}}></div>
            </Page>
        );
    },
    renderTabbar(){
        return (
            <div className="weui_tabbar">
                <a href="javascript:;" className="weui_tabbar_item weui_bar_item_on">
                    <div className="weui_tabbar_icon">
                        <img src="https://bshop.guanmai.cn/static/app/img/nav11.png" alt=""/>
                    </div>
                    <p className="weui_tabbar_label">全部菜品</p>
                </a>
                <a href="javascript:;" className="weui_tabbar_item">
                    <div className="weui_tabbar_icon">
                        <img src="https://bshop.guanmai.cn/static/app/img/nav2.png" alt=""/>
                    </div>
                    <p className="weui_tabbar_label">购物车</p>
                </a>
                <a href="javascript:;" className="weui_tabbar_item">
                    <div className="weui_tabbar_icon">
                        <img src="https://bshop.guanmai.cn/static/app/img/nav3.png" alt=""/>
                    </div>
                    <p className="weui_tabbar_label">我的订单</p>
                </a>
                <a href="javascript:;" className="weui_tabbar_item">
                    <div className="weui_tabbar_icon">
                        <img src="https://bshop.guanmai.cn/static/app/img/nav4.png" alt=""/>
                    </div>
                    <p className="weui_tabbar_label">我的</p>
                </a>
            </div>
        );
    }
});

const FlexWrap = React.createClass({
    render(){
        return (
            <Page white>
                <h2>flex</h2>
                <div>
                    <Flex wrap>
                        <Flex className="border">
                            1
                        </Flex>
                        <Flex flex className="border">flex</Flex>
                    </Flex>
                </div>
            </Page>
        );
    }
});

const GapWrap = React.createClass({
    render(){
        return (
            <Page white>
                <div className="padding-10">
                    <i>gap</i>
                    <div>
                        gap-5
                        <div className="gap-5"></div>
                        gap-5
                    </div>
                    <div>
                        <div className="border padding-5 margin-5">padding-5 margin-5</div>
                    </div>
                </div>
            </Page>
        );
    }
});

const TextareaWrap = React.createClass({
    getInitialState(){
        return {
            value: 'a\na\na\na'
        };
    },
    render(){
        return (
            <Page>
                <h2>textarea</h2>
                <Textarea value={this.state.value} onChange={this.handleChange}></Textarea>
            </Page>
        );
    },
    handleChange(event){
        this.setState({
            value: event.target.value
        });
    }
});

const ToastWrap = React.createClass({
    render(){
        return (
            <Page white>
                <h2>toast</h2>
                <button className="weui_btn weui_btn_primary weui_btn_mini" onClick={this.handleToast}>Toast</button>
            </Page>
        );
    },
    handleToast(){
        Toast.tip('tip');
        Toast.success({
            children: 'success'
        });
        Toast.info('info');
        Toast.warning('warning');
        Toast.danger('danger');
        Toast.loading('loading');
    }
});

const LoadingWrap = React.createClass({
    render(){
        return (
            <Page white>
                <h2>loading</h2>
                <Loading></Loading>
            </Page>
        );
    }
});


const NProgressWrap = React.createClass({
    render(){
        return (
            <Page white>
                <h2>nprogress</h2>
                <button className="weui_btn weui_btn_default weui_btn_mini" onClick={this.handleStart}>start</button>
                <button className="weui_btn weui_btn_default weui_btn_mini" onClick={this.handleDone}>done</button>
            </Page>
        );
    },
    handleStart(){
        NProgress.start();
    },
    handleDone(){
        NProgress.done();
    }
});

const InfiniteWrap = React.createClass({
    render(){
        return (
            <Page white>
                <Infinite>
                    <div>aaaaa</div>
                    <div>aaaaa</div>
                    <div>aaaaa</div>
                    <div>aaaaa</div>
                    <div>aaaaa</div>
                    <div>aaaaa</div>
                    <div>aaaaa</div>
                    <div>aaaaa</div>
                    <div>aaaaa</div>
                    <div>aaaaa</div>
                    <div>aaaaa</div>
                    <div>aaaaa</div>
                    <div>aaaaa</div>
                    <div>aaaaa</div>
                </Infinite>
            </Page>
        );
    }
});

const Root = React.createClass({
    render(){
        return (
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={Home}></IndexRoute>
                    <Route path="gap" component={GapWrap}></Route>
                    <Route path="flex" component={FlexWrap}></Route>
                    <Route path="textarea" component={TextareaWrap}></Route>
                    <Route path="toast" component={ToastWrap}></Route>
                    <Route path="loading" component={LoadingWrap}></Route>
                    <Route path="nprogress" component={NProgressWrap}></Route>
                    <Route path="infinite" component={InfiniteWrap}></Route>
                </Route>
            </Router>
        );
    }
});

ReactDOM.render(
    <Root></Root>
    , document.getElementById('appContainer'));