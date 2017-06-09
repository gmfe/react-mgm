import React from 'react';
import ReactDOM from 'react-dom';

const iPhone = window.navigator.userAgent.indexOf('iPhone') > -1;

class ScrollIntoView extends React.Component {
    constructor(props) {
        super(props);
        this.target = null;
    }

    render() {
        return React.cloneElement(this.props.children, {
            onFocus: ::this.handleFocus
        });
    }

    componentWillMount() {
        if (toString.call(this.props.children) !== '[object Object]') {
            console.error('There must be one and only one component');
        }
    }

    componentDidMount() {
        this.target = ReactDOM.findDOMNode(this);
    }

    componentWillUnmount() {
        this.target = null;
    }

    handleFocus() {
        if (!iPhone) {
            setTimeout(() => {
                if (this.target) {
                    this.target.scrollIntoViewIfNeeded();
                }
            }, 500);
        }
    }
}

export default ScrollIntoView;