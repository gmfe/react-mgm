import React from 'react';
import classNames from 'classnames';

class Textarea extends React.Component {
    static defaultProps = {
        wrapProps: {}
    };

    render() {
        let cn = classNames('textarea-adapter', this.props.wrapProps.className);
        return (
            <div {...this.props.wrapProps} className={cn}>
                <pre>{this.props.value}</pre>
                <textarea {...this.props} className={classNames("weui_textarea", this.props.className)}></textarea>
            </div>
        );
    }
}

export default Textarea;
