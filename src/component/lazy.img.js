import React from 'react';
import classnames from 'classnames';
import Util from 'gm-util';

const LazyImg = React.createClass({
    propType: {
        src: React.PropTypes.string,
        placeholder: React.PropTypes.string
    },
    getInitialState(){
        return {
            show: false
        };
    },
    render() {
        const cn = classnames('lazy-img', this.props.className);

        return <img ref="img" className={cn} {...this.props}
                    src={this.state.show? this.props.src : this.props.placeholder}/>;
    },
    pageDom: null,
    componentDidMount(){
        this.pageDom = document.getElementsByClassName('page-content')[0];
        if (this.pageDom) {
            this.pageDom.addEventListener('scroll', this.onScroll);
            this.doLazy();
        }
    },
    componentWillUnmount(){
        this.removeListener();
    },
    removeListener(){
        if (this.pageDom) {
            this.pageDom.removeEventListener('scroll', this.onScroll);
        }
    },
    timer: null,
    onScroll(){
        if (this.timer) {
            clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
            this.doLazy();
        }, 500);
    },
    doLazy(){
        // 显示了
        if (Util.isElementOverViewport(this.refs.img)) {
            console.log('show');
            this.setState({
                show: true
            });
            this.removeListener();
        }
    }
});

export default LazyImg;
