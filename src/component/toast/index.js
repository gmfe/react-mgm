import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Mask from '../mask/index';
import Loading from '../loading/index';
import _ from 'lodash';

let toastsContainerId = '_mgm_toasts_container' + (Math.random() + '').slice(2);
let toastsContainer = window.document.getElementById(toastsContainerId);

if (!toastsContainer) {
    toastsContainer = window.document.createElement('div');
    toastsContainer.className = 'mgm-toasts';
    toastsContainer.id = toastsContainerId;
    window.document.body.appendChild(toastsContainer);
}

let ToastStatics = {};
ToastStatics = {
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

        let div = window.document.createElement('div');
        div.className = 'mgm-toasts-cell';
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
        if (typeof options === 'string') {
            options = {
                children: options
            };
        }
        options = _.assign({show: true}, options);
        ToastStatics._queue.push(options);
        return ToastStatics._render();
    },
    success(options) {
        if (typeof options === 'string') {
            options = {
                children: options
            };
        }
        return ToastStatics.tip(_.assign({success: true}, options));
    },
    info(options) {
        if (typeof options === 'string') {
            options = {
                children: options
            };
        }
        return ToastStatics.tip(_.assign({info: true}, options));
    },
    warning(options) {
        if (typeof options === 'string') {
            options = {
                children: options
            };
        }
        return ToastStatics.tip(_.assign({warning: true}, options));
    },
    danger(options) {
        if (typeof options === 'string') {
            options = {
                children: options
            };
        }
        return ToastStatics.tip(_.assign({danger: true}, options));
    },
    loading(options) {
        if (typeof options === 'string') {
            options = {
                children: options
            };
        }
        return ToastStatics.tip(_.assign({loading: true}, options));
    }
};

class Toast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: props.show
        };

        this.timer = null;
        this.isFinished = false;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.show !== undefined) {
            this.setState({
                show: nextProps.show
            });
        }
    }


    componentDidMount() {
        const {time} = this.props;
        if (time) {
            this.timer = setTimeout(() => {
                this.setState({
                    show: false
                });
                this.handleFinish();
            }, time);
        }
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
        this.setState({
            show: false
        });
        this.handleFinish();
    }

    componentDidUpdate() {
        if (this.state.show === false) {
            this.handleFinish();
        }
    }

    handleClick() {
        this.props.onClick();
    }

    handleFinish() {
        if (!this.isFinished) {
            this.isFinished = true;
            this.props.onFinish();
        }
    }

    render() {
        let {icon, children, loading, success, info, warning, danger} = this.props;
        const {show} = this.state;

        if (loading) {
            icon = <Loading/>;
            children = children || '加载中...';
        } else if (success) {
            icon = <i className="ifont ifont-success"/>;
        } else if (info) {
            icon = <i className="ifont ifont-info-circle"/>;
        } else if (warning) {
            icon = <i className="ifont ifont-warning"/>;
        } else if (danger) {
            icon = <i className="ifont ifont-close"/>;
        }

        return (
            <div style={{display: show ? 'block' : 'none'}}>
                <Mask show={show} opacity={0.1}/>
                <div className="toast-container">
                    <div className="toast" onClick={this.handleClick}>
                        {icon}
                        <div className="toast-content">{children}</div>
                    </div>
                </div>
            </div>
        );
    }
}
_.assign(Toast, ToastStatics);

Toast.propTypes = {
    onClick: PropTypes.func,
    onFinish: PropTypes.func,
    show: PropTypes.bool,
    time: PropTypes.any,
    loading: PropTypes.bool,
    icon: PropTypes.any,
    success: PropTypes.bool,
    info: PropTypes.bool,
    warning: PropTypes.bool,
    danger: PropTypes.bool
};

Toast.defaultProps = {
    show: false,
    time: 2000,
    loading: false,
    icon: null,
    onClick: _.noop,
    onFinish: _.noop
};

export default Toast;