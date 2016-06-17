import React, {PropTypes} from 'react';
import classnames from 'classnames';
import Mask from './mask';
import _ from 'underscore';

const Popup = React.createClass({
    propTypes: {
        show: PropTypes.bool,
        onChange: PropTypes.func,
        left: PropTypes.bool,
        bottom: PropTypes.bool,
        width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        opacity: PropTypes.number,
        autoHeight: PropTypes.bool // 只bottom:true 有效
    },
    getDefaultProps(){
        return {
            show: false,
            onChange: () => {
            }
        };
    },
    render() {
        const thisProps = this.props;

        const cn = classnames('popup', {
            active: thisProps.show,
            'popup-left': thisProps.left,
            'popup-bottom': thisProps.bottom,
            'popup-bottom-auto-height': thisProps.autoHeight
        }, thisProps.className);

        let style = _.extend({}, thisProps.style);
        if (thisProps.left && thisProps.width) {
            style.width = thisProps.width;
        } else if (thisProps.bottom) {
            style.height = thisProps.height;
        }

        const {opacity, ...props} = thisProps;

        return (
            <div className="popup-wrap">
                <Mask show={thisProps.show} opacity={opacity || 0.1} onClick={this.handleChange}/>
                <div {...props} className={cn} style={style}>
                    <div className="popup-content">
                        {thisProps.children}
                    </div>
                </div>
            </div>
        );
    },
    handleChange(e){
        e.preventDefault();
        this.props.onChange(!this.props.show);
    }
});

export default Popup;
