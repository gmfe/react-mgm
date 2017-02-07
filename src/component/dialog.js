import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import pureRenderDecorator from '../pure.render.decorator';

let dialogsContainerId = '_mgm_dialogs_container' + (Math.random() + '').slice(2);
let dialogsContainer = window.document.getElementById(dialogsContainerId);

if (!dialogsContainer) {
    dialogsContainer = window.document.createElement('div');
    dialogsContainer.className = 'mgm-dialogs';
    dialogsContainer.id = dialogsContainerId;
    window.document.body.appendChild(dialogsContainer);
}

let DialogStatics = {};
DialogStatics = {
    dialog(options){
        return new Promise((resolve, reject) => {
            const div = window.document.createElement('div');
            dialogsContainer.appendChild(div);
            options.title = options.title || '提示';
            options.show = true;
            options.onConfirm = () => {
                dialogsContainer.removeChild(div);
                resolve();
            };
            options.onCancel = () => {
                dialogsContainer.removeChild(div);
                reject();
            };
            ReactDOM.render(<Dialog {...options}></Dialog>, div);
        });
    },
    alert(options){
        if (typeof options === 'string') {
            options = {
                children: options
            };
        }
        options.alert = true;
        return DialogStatics.dialog(options);
    },
    confirm(options){
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
    static alert = DialogStatics.alert;
    static confirm = DialogStatics.confirm;

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
        const thisProps = this.props,
            {btnText = {}} = thisProps;
        const cls = classNames({
            'weui_dialog_confirm': thisProps.confirm,
            'weui_dialog_alert': thisProps.alert
        });

        if (!thisProps.show) {
            return null;
        }

        return (
            <div className={cls} style={{display: 'block'}}>
                <div className="weui_mask"></div>
                <div className="weui_dialog">
                    <div className="weui_dialog_hd"><strong className="weui_dialog_title">{thisProps.title}</strong>
                    </div>
                    <div className="weui_dialog_bd">
                        {thisProps.children}
                    </div>
                    <div className="weui_dialog_ft">
                        {
                            thisProps.confirm ?
                                <a href="javascript:;" className="weui_btn_dialog default"
                                   onClick={this.handleCancel}>{btnText.cancel ? btnText.cancel : '取消'}</a>
                                :
                                null
                        }
                        <a href="javascript:;" className="weui_btn_dialog primary"
                           onClick={this.handleConfirm}>{btnText.confirm ? btnText.confirm : '确定'}</a>
                    </div>
                </div>
            </div>
        );
    }
}

Dialog.propTypes = {
    show: PropTypes.bool,
    onConfirm: PropTypes.func.isRequired,
    onCancel: PropTypes.func,
    title: PropTypes.string.isRequired,
    alert: PropTypes.bool,
    confirm: PropTypes.bool,
    btnText: PropTypes.object
};

export default Dialog;