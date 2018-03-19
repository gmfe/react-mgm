import React from 'react';
import PropTypes from 'prop-types';
import Mask from '../mask/index';
import LayoutRoot from '../layout_root';
import Loading from '../loading';

let timer = null;
let ToastStatics = {
    clear() {
        clearTimeout(timer);
        LayoutRoot.removeComponent(LayoutRoot.TYPE.TIP);
    },
    _tip(options, type) {
        if (typeof options === 'string') {
            options = {
                children: options
            };
        }

        if (type) {
            options[type] = true;
        }

        timer = setTimeout(() => {
            ToastStatics.clear();
        }, options.time || 2000);

        LayoutRoot.setComponent(LayoutRoot.TYPE.TIP, <Toast {...options}/>);
    },
    tip(options) {
        ToastStatics._tip(options);
    },
    success(options) {
        ToastStatics._tip(options, 'success');
    },
    info(options) {
        ToastStatics._tip(options, 'info');
    },
    warning(options) {
        ToastStatics._tip(options, 'warning');
    },
    danger(options) {
        ToastStatics._tip(options, 'danger');
    },
    loading(options) {
        ToastStatics._tip(options, 'loading');
    },
    loading_linear(options) {
        ToastStatics._tip(options, 'loading_linear');
    }
};

class Toast extends React.Component {
    render() {
        let {children, loading, loading_linear, success, info, warning, danger} = this.props;

        let icon = null;
        if (loading) {
            icon = <i className="weui-loading"/>;
            children = children || '加载中...';
        } else if (success) {
            icon = <i className="ifont ifont-success"/>;
        } else if (info) {
            icon = <i className="ifont ifont-info-circle"/>;
        } else if (warning) {
            icon = <i className="ifont ifont-warning"/>;
        } else if (danger) {
            icon = <i className="ifont ifont-close"/>;
        } else if (loading_linear) {
            icon = <Loading/>;
        }

        return (
            <div className="toast-container">
                <Mask show={true} opacity={0.01}/>
                <div className="toast">
                    {icon}
                    <div className="toast-content">{children}</div>
                </div>
            </div>
        );
    }
}

Object.assign(Toast, ToastStatics);

Toast.propTypes = {
    time: PropTypes.any, // 在组件上没意义，单纯给静态方法调用参考
    loading: PropTypes.bool,
    loading_linear: PropTypes.bool,
    success: PropTypes.bool,
    info: PropTypes.bool,
    warning: PropTypes.bool,
    danger: PropTypes.bool
};

Toast.defaultProps = {
    time: 2000,
    loading: false
};

export default Toast;