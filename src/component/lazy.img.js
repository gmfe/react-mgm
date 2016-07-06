import React, {PropTypes} from 'react';
import classNames from 'classnames';
import Util from 'gm-util';
import pureRenderDecorator from '../pure.render.decorator';

@pureRenderDecorator
class LazyImg extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
        this.targetDom = null;
        this.timer = null;

        this.onScroll = ::this.onScroll;
    }

    render() {
        const {
            className,
            src,
            placeholder,
            ...rest
        } = this.props;
        const cn = classNames('lazy-img', className);

        return <img {...rest} ref="img" className={cn}
                              src={this.state.show && src ? src : placeholder}/>;
    }

    componentDidMount() {
        this.targetDom = this.props.targetId ? document.getElementById(this.props.targetId) : document.getElementsByClassName('page-content')[0];
        if (this.targetDom) {
            this.targetDom.addEventListener('scroll', this.onScroll);
            this.doLazy();
        }
    }

    componentWillUnmount() {
        this.removeListener();
    }

    removeListener() {
        if (this.targetDom) {
            this.targetDom.removeEventListener('scroll', this.onScroll);
        }
    }

    onScroll() {
        if (this.timer) {
            clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
            this.doLazy();
        }, 500);
    }

    doLazy() {
        // 显示了
        if (Util.isElementOverViewport(this.refs.img)) {
            this.setState({
                show: true
            });
            this.removeListener();
        }
    }
}

LazyImg.propType = {
    src: PropTypes.string,
    placeholder: PropTypes.string,
    targetId: PropTypes.string // 指定监听滚动的dom id
};

export default LazyImg;
