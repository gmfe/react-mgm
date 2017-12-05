import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Flex from '../flex/index';

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

        return (
            <Flex column {...rest} className={cn}>
                {header && <Flex column>{header}</Flex>}
                <Flex flex column className="page-content block">
                    {children}
                </Flex>
                {tabbar && <Flex column className="page-tabbar">{tabbar}</Flex>}
                {bottom}
            </Flex>
        );
    }
}

Page.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    white: PropTypes.bool,
    header: PropTypes.node,
    tabbar: PropTypes.node,
    bottom: PropTypes.node
};

export default Page;
