import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import pureRenderDecorator from '../../util/pure.render.decorator';

@pureRenderDecorator
class Flex extends React.Component {
    render() {
        const {
            flex,

            auto, none,

            width, height,

            row, column,

            wrap, nowrap,

            justifyStart, justifyEnd, justifyCenter, justifyBetween, justifyAround,

            alignStart, alignEnd, alignCenter, alignBaseline, alignStretch,

            className, style,

            ...rest
        } = this.props;

        const cn = classNames({
            'flex': true,

            'flex-flex': flex,
            'flex-auto': auto,
            'flex-none': none || width || height,

            'flex-row': row,
            'flex-column': column,

            'flex-wrap': wrap,
            'flex-nowrap': nowrap,

            'flex-justify-start': justifyStart,
            'flex-justify-end': justifyEnd,
            'flex-justify-center': justifyCenter,
            'flex-justify-between': justifyBetween,
            'flex-justify-around': justifyAround,

            'flex-align-start': alignStart,
            'flex-align-end': alignEnd,
            'flex-align-center': alignCenter,
            'flex-align-baseline': alignBaseline,
            'flex-align-stretch': alignStretch
        }, className);

        let s = Object.assign({}, style);
        if (flex) {
            s.flex = (typeof flex === 'boolean') ? 1 : flex;
            s.WebkitFlex = (typeof flex === 'boolean') ? 1 : flex;
        }
        if (height) {
            s.height = height;
        }
        if (width) {
            s.width = width;
        }

        return <div {...rest} className={cn} style={s}>{this.props.children}</div>;
    }
}

Flex.propTypes = {
    flex: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
    auto: PropTypes.bool,
    none: PropTypes.bool,
    width: PropTypes.string,
    height: PropTypes.string,
    row: PropTypes.bool,
    column: PropTypes.bool,
    wrap: PropTypes.bool,
    nowrap: PropTypes.bool,
    justifyStart: PropTypes.bool,
    justifyEnd: PropTypes.bool,
    justifyCenter: PropTypes.bool,
    justifyBetween: PropTypes.bool,
    justifyAround: PropTypes.bool,
    alignStart: PropTypes.bool,
    alignEnd: PropTypes.bool,
    alignCenter: PropTypes.bool,
    alignBaseline: PropTypes.bool,
    alignStretch: PropTypes.bool
};

export default Flex;
