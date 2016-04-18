import React from 'react';
import classnames from 'classnames';
import Loading from './loading';

var Infinite = React.createClass({
    getInitialState(){
        return {
            loading: false
        };
    },
    getDefaultProps(){
        return {
            onBottom: function () {
            },
            bottomOffset: 50 + 50
        };
    },
    render() {
        let cn = classnames('infinite', this.props.className);
        return (
            <div ref="infinite" {...this.props} className={cn} onScroll={this.handleScroll}>
                {this.props.children}
                <div className="infinite-loading">
                    {this.state.loading && <Loading></Loading>}
                </div>
            </div>
        );
    },
    timer: null,
    handleBottom(){
        clearTimeout(this.timer);
        this.setState({
            loading: true
        });

        const result = this.props.onBottom();
        // 简单判断是否promise
        if (result && result.then) {
            result.then(() => {
                this.setState({
                    loading: false
                });
            }, () => {
                this.setState({
                    loading: false
                });
            });
        } else {
            this.timer = setTimeout(() => {
                this.setState({
                    loading: false
                });
            }, 500);
        }
    },
    scrollTop: 0,
    handleScroll(event){
        // 向下滚动才触发
        if (event.target.scrollTop > this.scrollTop) {
            if (!this.state.loading) {
                // 一定阈值才触发
                if (event.target.clientHeight + event.target.scrollTop + this.props.bottomOffset >= event.target.scrollHeight) {
                    this.handleBottom();
                }
            }
        }
        this.scrollTop = event.target.scrollTop;
    }
});

export default Infinite;
