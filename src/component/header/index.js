import React from 'react';
import PropTypes from 'prop-types';
import pureRenderDecorator from '../../pure.render.decorator';

@pureRenderDecorator
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.handleBack = ::this.handleBack;
    }

    render() {
        return (
            <div className="header">
                {this.props.left ? this.props.left : (
                    <a href="javascript:void(0);" className="button button-link pull-left header-left"
                       onClick={this.handleBack}>
                        <i className="ifont ifont-angle-left"></i>返回</a>)}
                {this.props.right ? this.props.right : null}
                <h1 className="header-title">{this.props.title}</h1>
            </div>
        );
    }

    handleBack(event) {
        event.stopPropagation();
        event.preventDefault();
        if (this.props.history) {
            this.props.history.go(-1);
        }
    }
}

Header.propTypes = {
    left: PropTypes.object,
    right: PropTypes.object,
    title: PropTypes.string
};

export default Header;