import React from 'react';
import { getCurrency } from './../../util/currency';
import classNames from 'classnames';

class Price extends React.Component {
    constructor(props) {
        super(props);
        this.currency = getCurrency();
    }

    render() {
        let {className, ...rest} = this.props;
        const child = this.props.children ? this.props.children : 0;

        return (
            <p className={classNames('inline-block', className)} {...rest}><span className='currency'>{this.currency}</span>{child}</p>
        );
    }
}

export default Price;