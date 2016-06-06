import React from 'react';
import classnames from 'classnames';
import Loading from './loading';
import Flex from './flex';

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
                <Flex justifyCenter alignCenter className="infinite-loading">
                    {
                        this.props.done ?
                            <Flex justifyCenter className="text-desc text-small">没有更多数据</Flex>
                            : this.state.loading && <Loading />
                    }
                </Flex>
            </div>
        );
    },
    timer: null,
    handleBottom(){
        if (this.props.done) return;

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
            // 假设要点时间
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

Infinite.propTypes = {
    onBottom: React.PropTypes.func.isRequired,
    done: React.PropTypes.bool
};

export default Infinite;
