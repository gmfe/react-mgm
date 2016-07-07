import React, {PropTypes} from 'react';
import classNames from 'classnames';
import Mask from './mask';
import _ from 'underscore';
import pureRenderDecorator from '../pure.render.decorator';

@pureRenderDecorator
class Select extends React.Component {
    constructor(props) {
        super(props);

        this.handleCancel = ::this.handleCancel;
        this.handleClick = ::this.handleClick;
    }

    render() {
        const {
            show,
            data,
            value,
            className,
            onChange, onCancel, // eslint-disable-line
            ...rest
        } = this.props;

        const cn = classNames('select-popup-list', className);

        if (!show) {
            return null;
        }
        return (
            <div className="select-popup">
                <Mask show={show} opacity={0.1} onClick={this.handleCancel}></Mask>
                <div {...rest} className={cn}>
                    {(data || data.length === 0) && <span className="text-desc">没有数据</span>}
                    {_.map(data, (v, i) => (
                        <div
                            key={i}
                            data-index={i}
                            className={classNames("select-popup-list-item", {
                            active: v === value
                            })}
                            onClick={this.handleClick}
                        >{v.name}</div>
                    ))}
                </div>
            </div>
        );
    }

    handleCancel(event) {
        event.preventDefault();
        this.props.onCancel(event);
    }

    handleClick(event) {
        event.preventDefault();
        const index = event.currentTarget.dataset.index;
        this.props.onChange(this.props.data[index]);
    }
}

Select.defaultProps = {
    show: false,
    data: [],
    value: null,
    onChange: () => {
    },
    onCancel: () => {
    }
};

Select.propTypes = {
    show: PropTypes.bool.isRequired,
    data: PropTypes.array,
    value: PropTypes.any,
    onChange: PropTypes.func.isRequired,
    onCancel: PropTypes.func
};

export default Select;