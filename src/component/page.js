import React, {PropTypes} from 'react';
import classNames from 'classnames';

const Page = React.createClass({
    propTypes: {
        children: PropTypes.node,
        className: PropTypes.string,
        navbar: PropTypes.node,
        toolbar: PropTypes.node,
    },
    getDefaultProps(){
        return {};
    },
    componentWillMount() {
        const {ui} = this.context;
        this.setState({
            tabbar: ui.getTabbar()
        });
    },
    render() {
        const {children, fix, className} = this.props;
        const {tabbar} = this.state;
        const classes = classNames({
            'page': true,
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
