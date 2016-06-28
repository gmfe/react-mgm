import React, {PropTypes} from 'react';
import classNames from 'classnames';
import pureRenderDecorator from '../pure.render.decorator';

@pureRenderDecorator
class Mask extends React.Component {
    static defaultProps = {
        transparent: false,
        show: false
    };

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
}

Mask.propTypes = {
    transparent: PropTypes.bool,
    show: PropTypes.bool,
    opacity: PropTypes.number
};

export default Mask;