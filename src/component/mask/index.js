import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import pureRenderDecorator from '../../pure.render.decorator';

@pureRenderDecorator
class Mask extends React.Component {
    render() {
        const {
            className, style,
            transparent,
            show,
            opacity,
            ...rest
        } = this.props;
        const cn = classNames({
            'mask': !transparent,
            'mask-transparent': transparent
        }, className);

        const s = Object.assign({
            display: show ? 'block' : 'none',
            opacity: opacity
        }, style);

        return (
            <div {...rest} className={cn} style={s}></div>
        );
    }
}

Mask.defaultProps = {
    transparent: false,
    show: false
};

Mask.propTypes = {
    transparent: PropTypes.bool,
    show: PropTypes.bool,
    opacity: PropTypes.number
};

export default Mask;