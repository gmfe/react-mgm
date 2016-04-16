import React, {PropTypes} from 'react';
import classnames from 'classnames';

const Page = React.createClass({
    propTypes: {
        children: PropTypes.node,
        className: PropTypes.string,
        white: PropTypes.bool,
        navbar: PropTypes.node,
        tabbar: PropTypes.node,
    },
    getDefaultProps(){
        return {};
    },
    render() {
        const {children, className} = this.props;
        const classes = classnames({
            'page': true,
            'page-white': this.props.white
        }, className);
        return (
            <div className={classes} {...this.props}>
                <div className='page-content'>
                    {children}
                </div>
            </div>
        );
    }
});

export default Page;
