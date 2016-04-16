import React from 'react';
import _ from 'underscore';
import ReactDOM from 'react-dom';

import 'gm-font/iconfont.css';
import ReactMGM from './src/index';
import './src/index.less';

const {Flex, Textarea, NProgress, Toast, Loading} = ReactMGM;

const FlexWrap = React.createClass({
    render(){
        return (
            <div>
                <i>flex</i>
                <div>
                    <Flex>
                        <Flex className="border">
                            1
                        </Flex>
                        <Flex flex className="border">flex</Flex>
                    </Flex>
                </div>
            </div>
        );
    }
});

const GapWrap = React.createClass({
    render(){
        return (
            <div>
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
            <div>
                <Textarea value={this.state.value} onChange={this.handleChange}></Textarea>
            </div>
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
            <div>
                <button className="weui_btn weui_btn_primary weui_btn_mini" onClick={this.handleToast}>Toast</button>
            </div>
        );
    },
    handleToast(){
        Toast.tip('adf');
        Toast.success({
            children: 'chenggong'
        });
        Toast.info('chenggong');
        Toast.warning('chenggong');
        Toast.danger('chenggong');
        Toast.loading('loading');
    }
});

const LoadingWrap = React.createClass({
    render(){
        return (
            <div>
                <Loading></Loading>
            </div>
        );
    }
});

const App = React.createClass({
    getInitialState(){
        return {
            left: false
        };
    },
    render(){
        return (
            <div>
                <GapWrap></GapWrap>
                <FlexWrap></FlexWrap>
                <TextareaWrap></TextareaWrap>
                <ToastWrap></ToastWrap>
                <LoadingWrap></LoadingWrap>
            </div>
        );
    }
});

ReactDOM.render(
    <App></App>
    , document.getElementById('appContainer'));

NProgress.start();