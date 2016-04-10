import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import Mask from './mask';

let toastsContainerId = '_gmm_toasts_container' + (Math.random() + '').slice(2);
let toastsContainer = document.getElementById(toastsContainerId);

if (!toastsContainer) {
    toastsContainer = document.createElement('div');
    toastsContainer.className = 'gmm-toasts';
    toastsContainer.id = toastsContainerId;
    document.body.appendChild(toastsContainer);
}

let ToastStatics = {
    _queue: [],
    _ing: false,
    _render(){
        if (ToastStatics._ing) {
            return;
        }

        let options = ToastStatics._queue.shift();
        if (options === undefined) {
            return;
        }

        ToastStatics._ing = true;
        let _b_onFinish = options.onFinish;

        let div = document.createElement('div');
        div.className = 'gmm-toasts-cell';
        toastsContainer.appendChild(div);

        options.onFinish = function () {
            if (_b_onFinish) {
                _b_onFinish();
            }
            toastsContainer.removeChild(div);
            ToastStatics._ing = false;
            if (ToastStatics._queue.length > 0) {
                setTimeout(function () {
                    ToastStatics._render();
                }, 500);
            }
        };

        ReactDOM.render(<Toast {...options}>{options.children}</Toast>, div);
        return div;
    },
    clear(div){
        ReactDOM.unmountComponentAtNode(div);
        // 上一步就会把div给移除. 估不需要了
        //toastsContainer.removeChild(div);
    },
    tip(options) {
        options = Object.assign({show: true}, options);
        ToastStatics._queue.push(options);
        return ToastStatics._render();
    },
    success(options) {
        return ToastStatics.tip(Object.assign({success: true}, options));
    },
    info(options) {
        return ToastStatics.tip(Object.assign({info: true}, options));
    },
    warn(options) {
        return ToastStatics.tip(Object.assign({warn: true}, options));
    },
    danger(options) {
        return ToastStatics.tip(Object.assign({danger: true}, options));
    },
    loading(options) {
        return ToastStatics.tip(Object.assign({loading: true}, options));
    }
};


// 请记得要在文档的末尾增加Toast
let Toast = React.createClass({
    statics: ToastStatics,
    propTypes: {
        onClick: React.PropTypes.func,
        onFinish: React.PropTypes.func,
        show: React.PropTypes.bool,
        time: React.PropTypes.any,
        loading: React.PropTypes.bool,
        icon: React.PropTypes.any,
        success: React.PropTypes.bool,
        info: React.PropTypes.bool,
        warn: React.PropTypes.bool,
        danger: React.PropTypes.bool
    },
    getDefaultProps(){
        return {
            show: false,
            time: 2000,
            loading: false,
            icon: null,
            onClick: function () {
            },
            onFinish: function () {
            }
        };
    },
    getInitialState(){
        return {
            show: this.props.show
        };
    },
    componentWillReceiveProps(nextProps){
        if (nextProps.show !== undefined) {
            this.setState({
                show: nextProps.show
            });
        }
    },
    render() {
        let icon = this.props.icon;
        let children = this.props.children;


        if (this.props.loading) {
            icon = undefined;
            children = children || '加载中...';
        } else if (this.props.success) {
            icon = <i className="ifont ifont-success"></i>;
        } else if (this.props.info) {
            icon = <i className="ifont ifont-info-circle"></i>;
        } else if (this.props.warn) {
            icon = <i className="ifont ifont-warning"></i>;
        } else if (this.props.danger) {
            icon = <i className="ifont ifont-close"></i>;
        }

        return (
            <div style={{display: this.state.show ? 'block' : 'none'}}>
                <Mask show={this.state.show} opacity={0.1}/>
                <div className="toast-container">
                    <div className="toast" onClick={this.handleClick}>
                        {icon}
                        <div className="toast-content">{children}</div>
                    </div>
                </div>
            </div>
        );
    },
    timer: null,
    componentDidMount(){
        let t = this;
        if (t.props.time) {
            t.timer = setTimeout(()=> {
                t.setState({
                    show: false
                });
                t.handleFinish();
            }, t.props.time);
        }
    },
    componentWillUnmount(){
        let t = this;
        clearTimeout(t.timer);
        t.setState({
            show: false
        });
        t.handleFinish();
    },
    componentDidUpdate(){
        if (this.state.show === false) {
            this.handleFinish();
        }
    },
    handleClick(){
        this.props.onClick();
    },
    isFinished: false,
    handleFinish(){
        if (!this.isFinished) {
            this.isFinished = true;
            this.props.onFinish();
        }
    }
});


export default Toast;
