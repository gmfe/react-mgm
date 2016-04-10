import React from 'react';
import classNames from 'classnames';
import _ from 'underscore';

var Infinite = React.createClass({
    getDefaultProps(){
        return {
            onBottom: function () {
            },
            bottomOffset: 50
        };
    },
    render() {
        let cn = classNames({
            'infinite': true
        }, this.props.className);
        return (
            <div ref="infinite" {...this.props} className={cn} onScroll={this.handleScroll}>
                {this.props.children}
            </div>
        );
    },
    handleScroll(event){
        if (event.target.clientHeight + event.target.scrollTop + this.props.bottomOffset >= event.target.scrollHeight) {
            this.props.onBottom();
        }
    }
});

export default Infinite;
