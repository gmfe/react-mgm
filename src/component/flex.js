import React, {PropTypes}from 'react';
import classNames from 'classnames';
import _ from 'underscore';
import pureRenderDecorator from '../pure.render.decorator';

@pureRenderDecorator
class Flex extends React.Component {
    render() {
        const cn = classNames({
            'flex': true,

            'flex-auto': this.props.auto,
            'flex-none': this.props.none || this.props.width || this.props.height,

            'flex-row': this.props.row,
            'flex-column': this.props.column,

            'flex-wrap': this.props.wrap,
            'flex-nowrap': this.props.nowrap,

            'flex-justify-start': this.props.justifyStart,
            'flex-justify-end': this.props.justifyEnd,
            'flex-justify-center': this.props.justifyCenter,
            'flex-justify-between': this.props.justifyBetween,
            'flex-justify-around': this.props.justifyAround,

            'flex-align-start': this.props.alignStart,
            'flex-align-end': this.props.alignEnd,
            'flex-align-center': this.props.alignCenter,
            'flex-align-baseline': this.props.alignBaseline,
            'flex-align-stretch': this.props.alignStretch
        }, this.props.className);

        let style = _.extend({}, this.props.style);
        if (this.props.flex) {
            style.flex = (typeof this.props.flex === 'boolean') ? 1 : this.props.flex;
        }
        if (this.props.height) {
            style.height = this.props.height;
        }
        if (this.props.width) {
            style.width = this.props.width;
        }

        return <div {...this.props} className={cn} style={style}>{this.props.children}</div>;
    }
}

Flex.propTypes = {
    flex: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
    auto: PropTypes.bool,
    none: PropTypes.bool,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
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
