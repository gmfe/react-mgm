import React from 'react';
import classNames from 'classnames';

class Square extends React.Component {
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
}

export default Square;