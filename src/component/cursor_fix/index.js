import React from 'react';
import PropTypes from 'prop-types';

class CursorFix extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = ::this.handleClick;
    }

    render() {
        const props = Object.assign({}, this.props, {
            onClick: this.handleClick
        });
        delete props.component;
        return React.createElement(this.props.component, props);
    }

    handleClick(event) {
        // 移动的的光标容易飘。click perventDefault 然后 focus 下可解决。 别问我为什么。
        event.preventDefault();
        event.target.focus();
        this.props.onClick && this.props.onClick(event);
    }
}

CursorFix.propTypes = {
    component: PropTypes.string.isRequired
};

export default CursorFix;
