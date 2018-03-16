import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Flex from '../flex';

class Loading extends React.Component {
    render() {
        let {
            children,
            type,
            className,
            ...rest
        } = this.props;

        return (
            <Flex column alignCenter {...rest} className={classNames(`gm-loading gm-loading-${type}`, className)}>
                <Flex alignEnd className="gm-loading-linear">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </Flex>
                {
                    children && <p className="gm-loading-text">{children}</p>
                }
            </Flex>
        );
    }
}

Loading.propTypes = {
    type: PropTypes.string
};

Loading.defaultProps = {
    type: 'default'
};

export default Loading;