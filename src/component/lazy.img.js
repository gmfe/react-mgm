import React from 'react';
import classnames from 'classnames';
import Util from 'gm-util';

const LazyImg = React.createClass({
    propType: {
        src: React.PropTypes.string,
        placeholder: React.PropTypes.string,
        targetId: React.PropTypes.string // 指定监听滚动的dom id
    },
    getInitialState(){
        return {
            show: false
        };
    },
    render() {
        const cn = classnames('lazy-img', this.props.className);

        return <img ref="img" className={cn} {...this.props}
                    src={this.state.show && this.props.src ? this.props.src : this.props.placeholder}/>;
    },
    targetDom: null,
    componentDidMount(){
        this.targetDom = this.props.targetId ? document.getElementById(this.props.targetId) : document.getElementsByClassName('page-content')[0];
        if (this.targetDom) {
            this.targetDom.addEventListener('scroll', this.onScroll);
            this.doLazy();
        }
    },
    componentWillUnmount(){
        this.removeListener();
    },
    removeListener(){
        if (this.targetDom) {
            this.targetDom.removeEventListener('scroll', this.onScroll);
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
            this.setState({
                show: true
            });
            this.removeListener();
        }
    }
});

export default LazyImg;
