import React from 'react';
import classNames from 'classnames';
import _ from 'underscore';

var Flex = React.createClass({
    propTypes: {
        flex: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.bool]),
        auto: React.PropTypes.bool,
        none: React.PropTypes.bool,
        width: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
        height: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
        row: React.PropTypes.bool,
        column: React.PropTypes.bool,
        wrap: React.PropTypes.bool,
        nowrap: React.PropTypes.bool,
        justifyStart: React.PropTypes.bool,
        justifyEnd: React.PropTypes.bool,
        justifyCenter: React.PropTypes.bool,
        justifyBetween: React.PropTypes.bool,
        justifyAround: React.PropTypes.bool,
        alignStart: React.PropTypes.bool,
        alignEnd: React.PropTypes.bool,
        alignCenter: React.PropTypes.bool,
        alignBaseline: React.PropTypes.bool,
        alignStretch: React.PropTypes.bool
    },
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
});

export default Flex;
