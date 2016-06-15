import React, {PropTypes} from 'react';
import classnames from 'classnames';

class Dialog extends React.Component {
    constructor(props) {
        super(props);

        this.handleCancel = this.handleCancel.bind(this);
        this.handleConfirm = this.handleConfirm.bind(this);
    }

    handleConfirm(e){
        e.preventDefault();
        this.props.onConfirm();
    }

    handleCancel(e){
        e.preventDefault();
        this.props.onCancel();
    }

    render() {
        const thisProps = this.props;
        const cls = classnames({
            'weui_dialog_confirm': thisProps.confirm,
            'weui_dialog_alert': thisProps.alert
        });

        return (
            <div className={cls} style={{display: thisProps.show ? 'block' : 'none'}}>
                <div className="weui_mask"></div>
                <div className="weui_dialog" style={thisProps.style}>
                    <div className="weui_dialog_hd"><strong className="weui_dialog_title">{thisProps.title}</strong></div>
                    <div className="weui_dialog_bd">
                        {thisProps.children}
                    </div>
                    <div className="weui_dialog_ft">
                        {
                            thisProps.confirm ?
                                <a href="javascript:;" className="weui_btn_dialog default" onClick={::this.handleCancel}>取消</a>
                                :
                                null
                        }
                        <a href="javascript:;" className="weui_btn_dialog primary" onClick={::this.handleConfirm}>确定</a>
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
    confirm: PropTypes.bool
};

export default Dialog;