import React from 'react';
import PropTypes from 'prop-types';
import pureRenderDecorator from '../../util/pure.render.decorator';
import _ from 'lodash';

@pureRenderDecorator
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.handleBack = ::this.handleBack;
    }

    handleBack(event) {
        event.stopPropagation();
        event.preventDefault();

        this.props.onBack();
    }

    render() {
        return (
            <div className="header">
                {this.props.left || (
                    <a
                        href="javascript:;"
                        className="button button-link pull-left header-left"
                        onClick={this.handleBack}
                    >
                        <i className="ifont ifont-angle-left"/>
                    </a>)}
                {this.props.right}
                <h1 className="header-title">{this.props.title}</h1>
            </div>
        );
    }
}

Header.propTypes = {
    left: PropTypes.element,
    right: PropTypes.element,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    onBack: PropTypes.func
};

Header.defaultProps = {
    onBack: _.noop
};

export default Header;