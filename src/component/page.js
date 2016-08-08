import React, {PropTypes} from 'react';
import classNames from 'classnames';
import Flex from './flex';

class Page extends React.Component {
    render() {
        const {
            className,
            white,
            header,
            tabbar,
            bottom,
            children,
            ...rest
        } = this.props;
        const cn = classNames({
            'page': true,
            'page-white': white
        }, className);
        // 如果没有header tabbar 就简化html结构
        if (header || tabbar) {
            return (
                <Flex column {...rest} className={cn}>
                    {header ? (
                        <Flex column>{header}</Flex>
                    ) : undefined}
                    <Flex flex column className="page-content block">
                        {children}
                    </Flex>
                    {tabbar ? (
                        <Flex column className="page-tabbar">{tabbar}</Flex>
                    ) : undefined}
                    {bottom ? bottom : undefined}
                </Flex>
            );
        } else {
            return (
                <div {...rest} className={classNames(cn, 'page-content')}>{children}</div>
            );
        }
    }
}

Page.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    white: PropTypes.bool,
    header: PropTypes.node,
    tabbar: PropTypes.node,
    bottom: PropTypes.node,
};

export default Page;
