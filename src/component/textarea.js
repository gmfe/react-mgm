import React from 'react';
import classnames from 'classnames';

var Textarea = React.createClass({
    getDefaultProps(){
        return {
            wrapProps: {}
        };
    },
    render() {
        let cn = classnames('textarea-adapter', this.props.wrapProps.className);
        return (
            <div {...this.props.wrapProps} className={cn}>
                <pre>{this.props.value}</pre>
                <textarea {...this.props} className={classnames("weui_textarea", this.props.className)}></textarea>
            </div>
        );
    }
});

export default Textarea;
