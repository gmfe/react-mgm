import React from 'react';
import classnames from 'classnames';

var LazyImg = React.createClass({
    render() {
        const cn = classnames('lazy-img', this.props.className);
        return (
            <div clsssName="cn">
                <img ref="img" src={this.props.src} {...this.props}/>
            </div>
        );
    },
    pageDom: null,
    pageDomHeight: 0,
    componentDidMount(){
        this.pageDom = document.getElementsByClassName('page')[0];
        if (this.pageDom) {
            this.pageDomHeight = this.pageDom.offsetHeight;
            this.pageDom.addEventListener('scroll', this.onScroll);
        }
    },
    componentWillUnmount(){
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
            console.log(this.refs.img.offsetTop, this.pageDom.scrollTop + this.pageDomHeight);
        }, 500);
    },
    timer: null
});

export default LazyImg;
