import React, {PropTypes} from 'react';
import classNames from 'classnames';
import Flex from './flex';

class Page extends React.Component {
    static defaultProps = {};

    render() {
        const classes = classNames({
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
                <div className={classNames(classes, 'page-content')}>{this.props.children}</div>
            );
        }
    }
}

Page.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    white: PropTypes.bool,
    header: PropTypes.node,
    tabbar: PropTypes.node
};

export default Page;
