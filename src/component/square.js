import React from 'react';
import classNames from 'classnames';

let Square = React.createClass({
    render() {
        const cn = classNames('square-inner', this.props.className);

        return (
            <div className="square">
                <div {...this.props} className={cn}>
                    {this.props.children}
                </div>
            </div>
        );
    }
});

export default Square;