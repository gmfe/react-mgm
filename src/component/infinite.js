import React, {PropTypes} from 'react';
import classNames from 'classnames';
import Loading from './loading';
import Flex from './flex';

// 没有必要scu
class Infinite extends React.Component {
    constructor(props) {
        super(props);
        this.handleScroll = ::this.handleScroll;
        this.state = {
            loading: false
        };
        this.timer = null;
        this.scrollTop = 0;
    }

    static defaultProps = {
        onBottom: function () {
        },
        bottomOffset: 50 + 50
    };

    render() {
        const cn = classNames('infinite', this.props.className);
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
    }

    handleBottom() {
        if (this.props.done) {
            return;
        }

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
    }

    handleScroll(event) {
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
}

Infinite.propTypes = {
    bottomOffset: PropTypes.number,
    onBottom: PropTypes.func.isRequired,
    done: PropTypes.bool
};

export default Infinite;
