import React, {PropTypes} from 'react';

class Tooltip extends React.Component {
    render() {
        const {placement, children, style} = this.props;

        return (
            <div className={`gm-tooltip gm-tooltip-${placement}`} style={style}>
                <div className="gm-tooltip-arrow"/>
                <div className="gm-tooltip-inner">{children}</div>
            </div>
        );
    }
}

Tooltip.propTypes = {
    placement: PropTypes.oneOf(['top', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight'])
};

Tooltip.defaultProps = {
    placement: 'bottomRight'
};

export default Tooltip;