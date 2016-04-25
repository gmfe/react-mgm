import React, {PropTypes} from 'react';
import classnames from 'classnames';
import Mask from './mask';

const Panel = React.createClass({
    propTypes: {
        show: PropTypes.bool,
        onChange: PropTypes.func
    },
    getDefaultProps(){
        return {
            show: false,
            onChange: () => {
            }
        };
    },
    render() {
        const cn = classnames('panel', {
            active: this.props.show
        });
        return (
            <div className={cn}>
                <Mask show={this.props.show} opacity={0.1} onClick={this.handleChange}></Mask>
                <div className="panel-content">
                    {this.props.children}
                </div>
            </div>
        );
    },
    handleChange(){
        this.props.onChange(!this.props.show);
    }
});

export default Panel;
