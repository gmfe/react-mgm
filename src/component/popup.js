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
        height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    },
    getDefaultProps(){
        return {
            show: false,
            onChange: () => {
            }
        };
    },
    render() {
        const cn = classnames('popup', {
            active: this.props.show,
            'popup-left': this.props.left,
            'popup-bottom': this.props.bottom
        }, this.props.className);

        let style = _.extend({}, this.props.style);
        if (this.props.left && this.props.width) {
            style.width = this.props.width;
        } else if (this.props.bottom && this.props.height) {
            style.height = this.props.height;
        }

        return (
            <div className="popup-wrap">
                <Mask show={this.props.show} opacity={0.1} onClick={this.handleChange}></Mask>
                <div {...this.props} className={cn} style={style}>
                    <div className="popup-content">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    },
    handleChange(){
        this.props.onChange(!this.props.show);
    }
});

export default Popup;
