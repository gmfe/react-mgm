import React from 'react';
import classNames from 'classnames';

let Mask = React.createClass({
    propTypes: {
        transparent: React.PropTypes.bool,
        show: React.PropTypes.bool,
        opacity: React.PropTypes.number
    },
    getDefaultProps(){
        return {
            transparent: false,
            show: false
        };
    },
    render() {
        let className = classNames({
            'mask': !this.props.transparent,
            'mask-transparent': this.props.transparent
        });

        let style = {
            display: this.props.show ? 'block' : 'none',
            opacity: this.props.opacity
        };

        return (
            <div {...this.props} className={className} style={style}></div>
        );
    }
});

export default Mask;