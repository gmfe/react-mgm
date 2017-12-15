import React from 'react';
import PropTypes from 'prop-types';
import pureRenderDecorator from '../../util/pure.render.decorator';
import LayoutRoot from '../layout_root';
import _ from 'lodash';

const DialogStatics = {
    dialog(options) {
        return new Promise((resolve, reject) => {
            const _onConfirm = options.onConfirm || _.noop;
            options.onConfirm = () => {
                Promise.resolve(_onConfirm()).then(() => {
                    window.history.go(-1);

                    setTimeout(()=>{
                        resolve();
                    }, 10);
                });
            };

            const _onCancel = options.onCancel || _.noop;
            options.onCancel = () => {
                _onCancel();
                window.history.go(-1);

                setTimeout(()=>{
                    reject();
                }, 10);
            };

            const popstate = () => {
                LayoutRoot.removeComponent(LayoutRoot.TYPE.MODAL);

                window.removeEventListener('popstate: ', popstate);
            };

            window.addEventListener('popstate', popstate);

            options.show = true;

            window.history.pushState({type: 'dialog'}, null);

            LayoutRoot.setComponent(LayoutRoot.TYPE.MODAL, <Dialog {...options}/>);
        });
    },

    alert(options) {
        if (typeof options === 'string') {
            options = {
                children: options
            };
        }
        options.alert = true;
        return DialogStatics.dialog(options);
    },

    confirm(options) {
        if (typeof options === 'string') {
            options = {
                children: options
            };
        }
        options.confirm = true;
        return DialogStatics.dialog(options);
    }
};

@pureRenderDecorator
class Dialog extends React.Component {
    constructor(props) {
        super(props);

        this.handleCancel = ::this.handleCancel;
        this.handleConfirm = ::this.handleConfirm;
    }

    handleConfirm(e) {
        e.preventDefault();
        this.props.onConfirm();
    }

    handleCancel(e) {
        e.preventDefault();
        this.props.onCancel && this.props.onCancel();
    }

    render() {
        const {
            show,
            title,
            confirm,
            confirmText,
            cancelText,
            children
        } = this.props;

        if (!show) {
            return null;
        }

        return (
            <div>
                {/*有一种情况是在 popup 组件中使用 dialog 组件，popup z-index 为 2000，而 mask 为 1000，就不能在 popup 之上*/}
                {/*因此将这里的 mask z-index 设置成和 dialog 一样*/}
                <div className="weui-mask" style={{zIndex: 5000}}/>
                <div className="weui-dialog">
                    <div className="weui-dialog__hd">
                        <strong className="weui-dialog_title">{title}</strong>
                    </div>
                    <div className="weui-dialog__bd">
                        {children}
                    </div>
                    <div className="weui-dialog__ft">
                        {confirm && <a
                            href="javascript:;"
                            className="weui-dialog__btn weui-dialog__btn_default"
                            onClick={this.handleCancel}
                        >{cancelText}</a>
                        }
                        <a
                            href="javascript:;"
                            className="weui-dialog__btn weui-dialog__btn_primary"
                            onClick={this.handleConfirm}
                        >{confirmText}</a>
                    </div>
                </div>
            </div>
        );
    }
}

Object.assign(Dialog, DialogStatics);

Dialog.propTypes = {
    show: PropTypes.bool,
    title: PropTypes.string,
    alert: PropTypes.bool,
    confirm: PropTypes.bool,
    onConfirm: PropTypes.func.isRequired,
    onCancel: PropTypes.func,
    confirmText: PropTypes.string,
    cancelText: PropTypes.string
};

Dialog.defaultProps = {
    title: '提示',
    confirmText: '确定',
    cancelText: '取消'
};

export default Dialog;