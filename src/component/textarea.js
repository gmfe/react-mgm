import React from 'react';
import classNames from 'classnames';
import _ from 'underscore';

var Textarea = React.createClass({
    getDefaultProps(){
        return {
            full: 10,
            score: 0
        };
    },
    render() {
        let cn = classNames({
            'textarea-adapter': true
        });
        return (
            <div className={cn}>
                <pre><span>{this.props.value}</span></pre>
                <textarea className="textarea" {...this.props}></textarea>
            </div>
        );
    }
});

export default Textarea;
