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
        // 如果没有header tabbar 就简化html结构
        if (this.props.header || this.props.tabbar) {
            return (
                <Flex column {...this.props} className={classes}>
                    {this.props.header && (
                        <Flex column>{this.props.header}</Flex>
                    )}
                    <Flex flex column className="page-content block">
                        {this.props.children}
                    </Flex>
                    {this.props.tabbar && (
                        <Flex column className="page-tabbar">{this.props.tabbar}</Flex>
                    )}
                </Flex>
            );
        } else {
            return (
                <div className={classes}>{this.props.children}</div>
            );
        }
    }
});

export default Page;
