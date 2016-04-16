import React from 'react';
import classnames from 'classnames';
import _ from 'underscore';

var Textarea = React.createClass({
    render() {
        let cn = classnames({
            'textarea-adapter': true
        });
        return (
            <div className={cn}>
                <pre>{this.props.value}</pre>
                <textarea {...this.props} className={classnames("weui_textarea", this.props.className)}></textarea>
            </div>
        );
    }
});

export default Textarea;
