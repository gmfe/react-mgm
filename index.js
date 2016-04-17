import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory, Link} from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import 'gm-font/iconfont.css';
import ReactMGM from './src/index';
import './src/index.less';

const {Flex, Textarea, NProgress, Toast, Loading, Page} = ReactMGM;

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
                <i>gap</i>
                <div>
                    gap-5
                    <div className="gap-5"></div>
                    gap-5
                </div>
                <div>
                    <div className="border padding-5 margin-5">padding-5 margin-5</div>
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

const Home = React.createClass({
    getInitialState(){
        return {
            left: false
        };
    },
    render(){
        return (
            <Page>
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
                </div>
            </Page>
        );
    }
});

const App = React.createClass({
    render(){
        console.log(this.props);
        return (
            <ReactCSSTransitionGroup
                component={Page}
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
                </Route>
            </Router>
        );
    }
});

ReactDOM.render(
    <Root></Root>
    , document.getElementById('appContainer'));