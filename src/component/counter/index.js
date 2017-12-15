import React from 'react';
import PropTypes from 'prop-types';
import Flex from '../flex';
import classNames from 'classnames';
import ScrollIntoView from '../scroll_into_view';
import Big from 'big.js';

class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.handleCountNumEdit = ::this.handleCountNumEdit;
        this.handleCountMinus = ::this.handleCountMinus;
        this.handleCountPlus = ::this.handleCountPlus;
        this.handleCountInputBlur = ::this.handleCountInputBlur;
    }

    // 编辑时触发
    handleCountNumEdit(e) {
        let amount = e.target.value;
        const { onCountNumEdit } = this.props;
        const isPrice = /^\d{0,8}\.{0,1}(\d{1,2})?$/.test(amount + '');

        if(!isPrice) {
            return;
        }

        const amount_new = Number((amount + '').replace(/^[0]/, ''));
        onCountNumEdit(amount_new);
    }

    // 点减号时触发
    handleCountMinus() {
        const { onCountMinus } = this.props;
        const { amount } = this.props;

        if (amount === 0) {
            return;
        }

        const amount_new =  Number(Big(amount || 1).minus(1).toString());
        onCountMinus(amount_new);
    }

    // 点加号时触发
    handleCountPlus() {
        const { onCountPlus } = this.props;
        const { amount } = this.props;

        let amount_new = Number(Big(amount || 0).plus(1).toString());

        onCountPlus(amount_new);
    }


    // 失焦后触发
    handleCountInputBlur(e) {
        const { onCountInputBlur } = this.props;
        const amount = e.target.value;

        onCountInputBlur(amount);
    }

    render() {
        const { amount, isPlusDisabled } = this.props;
        const minusIconClass = classNames('counter-del-btn ifont ifont-minus-cycle-o', {
            'disable none': amount === 0
        });
        const plusIconClass = classNames('counter-add-btn ifont ifont-add-circle', {
            'disable': isPlusDisabled
        });

        return (
            <Flex alignCenter className="counter-container-option">
                <span
                    className={minusIconClass}
                    onClick={this.handleCountMinus}
                >
                </span>
                {
                    <ScrollIntoView>
                    <input className="counter-num" type="number"
                           onChange={this.handleCountNumEdit}
                           onBlur={this.handleCountInputBlur}
                           value={amount || ''}
                    />
                    </ScrollIntoView>
                }
                <span
                    className={plusIconClass}
                    onClick={this.handleCountPlus}
                >
                </span>
            </Flex>
        );
    }
}

Counter.propTypes = {
    onCountMinus: PropTypes.func.isRequired,
    onCountPlus: PropTypes.func.isRequired,
    onCountNumEdit: PropTypes.func.isRequired,
    onCountInputBlur: PropTypes.func.isRequired,
    isPlusDisabled: PropTypes.bool,
    amount: PropTypes.any.isRequired
};

export  default Counter;