import React, {PropTypes} from 'react';
import classnames from 'classnames';
import Flex from './flex';

const Page = React.createClass({
    propTypes: {
        children: PropTypes.node,
        className: PropTypes.string,
        white: PropTypes.bool,
        header: PropTypes.node,
        tabbar: PropTypes.node,
    },
    getDefaultProps(){
        return {};
    },
    render() {
        const classes = classnames({
            'page': true,
            'page-white': this.props.white
        }, this.props.className);
        return (
            <Flex column {...this.props} className={classes}>
                {this.props.header && (
                    <Flex column>
                        {this.props.header}
                    </Flex>
                )}
                <Flex flex column className="page-content">
                    {this.props.children}
                </Flex>
            </Flex>
        );
    }
});

export default Page;
