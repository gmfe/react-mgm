import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Mask from '../mask/index';
import LayoutRoot from '../layout_root';
import _ from 'lodash';

const PopupStatics = {
    render(options) {
        const popstate = (e) => {
            if (e.state === null || (e.state && e.state.type !== 'popup')) {
                LayoutRoot.removeComponent(LayoutRoot.TYPE.POPUP);

                window.removeEventListener('popstate: ', popstate);
            }
        };

        window.addEventListener('popstate', popstate);

        options.show = true;

        options.onHide = () => {
            PopupStatics.hide();
        };

        window.history.pushState({type: 'popup'}, null);

        LayoutRoot.setComponent(LayoutRoot.TYPE.POPUP, <Popup {...options}/>);
    },

    hide() {
        window.history.go(-1);
    }
};

class Popup extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = ::this.handleChange;
    }

    handleChange(e) {
        e.preventDefault();
        this.props.onHide();
    }

    render() {
        const {
            show,
            left,
            bottom,
            width,
            height,
            opacity,
            className,
            style,
            onHide, // eslint-disable-line
            children,
            ...rest
        } = this.props;

        const cn = classNames('popup', {
            active: show,
            'popup-left': left,
            'popup-bottom': bottom
        }, className);

        let s = Object.assign({}, style);
        if (left && width) {
            s.width = width;
        } else if (bottom) {
            s.height = height;
        }

        if(!show){
            return null;
        }

        return (
            <div className="popup-container">
                <Mask show opacity={opacity || 0.1} onClick={this.handleChange}/>
                <div {...rest} className={cn} style={s}>
                    <div className="popup-content">
                        {children}
                    </div>
                </div>
            </div>
        );
    }
}

Object.assign(Popup, PopupStatics);

// 这里的 onChange 命名不合理，假如子组件中由一个 onChange 事件，当被触发的时候，那这个父组件的 onChange 事件会因为事件冒泡而被执行，与预期不符
Popup.propTypes = {
    show: PropTypes.bool,
    onHide: PropTypes.func,
    left: PropTypes.bool,
    bottom: PropTypes.bool,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    opacity: PropTypes.number
};

Popup.defaultProps = {
    show: false,
    onHide: _.noop
};

export default Popup;
