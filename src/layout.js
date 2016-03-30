import React from 'react';
import classNames from 'classnames';

// 微信还不支持 wrap 注意
var Layout = React.createClass({
    render() {
        let cn = classNames({
            'layout': true,

            'layout-row': this.props.row,
            'layout-column': this.props.column,

            'layout-wrap': this.props.wrap,
            'layout-nowrap': this.props.nowrap,

            'layout-justify-start': this.props.justifyStart,
            'layout-justify-end': this.props.justifyEnd,
            'layout-justify-center': this.props.justifyCenter,
            'layout-justify-between': this.props.justifyBetween,
            'layout-justify-around': this.props.justifyAround,

            'layout-align-start': this.props.alignStart,
            'layout-align-end': this.props.alignEnd,
            'layout-align-center': this.props.alignCenter,
            'layout-align-baseline': this.props.alignBaseline,
            'layout-align-stretch': this.props.alignStretch
        });

        cn += ' ' + (this.props.className || '');

        return <div {...this.props} className={cn}>{this.props.children}</div>;
    }
});

export default Layout;
