import React from 'react';
import PropTypes from 'prop-types';
import ReactDom from 'react-dom';
import classNames from 'classnames';
import _ from 'lodash';
import Flex from '../flex/index';

class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
            sliderWidth: 0,
            touchObject: null,
            dragging: false,
            transition: false,
            x: 0
        };
    
        this.swipeStart = ::this.swipeStart;
        this.swipeMove = ::this.swipeMove;
        this.swipeEnd = ::this.swipeEnd;
        this.setSliderWidth = ::this.setSliderWidth;
        this.doAutoSlider = ::this.doAutoSlider;
    
        this.timer = null;
        this.refSlider = null;
    }
    
    componentWillReceiveProps(nextProps) {
        this.setState({
            count: toString.call(nextProps.children) === '[object Array]' ? nextProps.children.length : 1
        });
    }
    
    doAutoSlider() {
        const {autoSlideTime} = this.props;
        clearInterval(this.timer);
        this.timer = setInterval(() => {
            console.log('interval');
            let {dragging, x, sliderWidth, count} = this.state;
            if (dragging) {
                return;
            }
            
            x -= this.state.sliderWidth;
            if (x > 0) {
                x = 0;
            }
            if (x < -(sliderWidth * (count - 1))) {
                x = 0;
            }
            this.setState({
                transition: true,
                dragging: false,
                touchObject: null,
                x
            });
        }, autoSlideTime);
    }
    
    componentWillMount() {
        if (this.props.enableAutoSlide) {
            this.doAutoSlider();
        }
    }
    
    componentDidMount() {
        this.setSliderWidth();
        this.setCount();
        window.addEventListener('resize', this.setSliderWidth);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        window.removeEventListener('resize', this.setSliderWidth);
    }
    
    setCount() {
        this.setState({
            count: toString.call(this.props.children) === '[object Array]' ? this.props.children.length : 1
        });
    }


    setSliderWidth() {
        const slider = ReactDom.findDOMNode(this.refSlider);
        this.setState({
            sliderWidth: slider.offsetWidth
        });
    }
    
    getX(event) {
        return event.touches !== undefined ? event.touches[0].pageX : event.clientX;
    }
    
    swipeStart(event) {
        // event.preventDefault();
        this.setState({
            dragging: true,
            transition: false,
            touchObject: {
                startX: this.getX(event),
                x: this.getX(event)
            }
        });
    }
    
    swipeMove(event) {
        // event.preventDefault();
        this.setState({
            dragging: true,
            transition: false,
            touchObject: _.assign({}, this.state.touchObject, {
                x: this.getX(event)
            })
        });
    }
    
    swipeEnd(event) {
        event.preventDefault();
        // if (!this.state.dragging) {
        //     return;
        // }
        this.doAutoSlider();
        
        const to = this.state.touchObject;
        const diff = to.x - to.startX;
        let x = this.state.x;
        if (to && Math.abs(diff) > 50) {
            if (diff > 0) {
                x += this.state.sliderWidth;
            } else {
                x -= this.state.sliderWidth;
            }
            if (x > 0) {
                x = 0;
            }
            if (x < -(this.state.sliderWidth * (this.state.count - 1))) {
                x = -(this.state.sliderWidth * (this.state.count - 1));
            }
            this.setState({
                transition: true,
                dragging: false,
                touchObject: null,
                x
            });
        } else {
            this.setState({
                transition: true,
                dragging: false,
                touchObject: null
            });
        }
        
        if (this.props.onChange) {
            this.props.onChange(Math.abs(x / this.state.sliderWidth));
        }
    }
    
    renderChild() {
        let components = this.props.children;
        
        if (toString.call(this.props.children) !== '[object Array]') {
            components = [this.props.children];
        }
        return _.map(components, (value, i) => {
            return React.cloneElement(value, {
                style: _.assign({}, value.props.style, {width: '100%'}),
                className: classNames('slider-cell flex flex-none', value.props.className),
                key: i
            });
        });
    }
    
    renderFlag() {
        return (
            <Flex justifyCenter className="slider-flag">
                {_.map(_.range(this.state.count), (value, i) => <span
                    className={classNames({active: Math.abs(this.state.x / this.state.sliderWidth) === i})}
                    key={i}/>)}
            </Flex>
        );
    }
    
    render() {
        const to = this.state.touchObject;
        let offset = to ? (to.x - to.startX + this.state.x) : this.state.x;
        
        const {
            className,
            flagInner,
            enableAutoSlide, autoSlideTime, // eslint-disable-line
            ...rest
        } = this.props;
        const cn = classNames({
            'slider-transition': this.state.transition
        }, className);
        
        const style = {
            WebkitTransform: 'translate3d(' + offset + 'px, 0, 0)',
            transform: 'translate3d(' + offset + 'px, 0, 0)'
        };
        
        return (
            <div className={classNames("slider", {
                'slider-flag-inner': flagInner
            })}>
                <Flex
                    {...rest}
                    ref={ref => this.refSlider = ref}
                    className={cn}
                    onMouseDown={this.swipeStart}
                    onMouseMove={this.swipeMove}
                    onMouseUp={this.swipeEnd}
                    onMouseLeave={this.swipeEnd}
                    onTouchStart={this.swipeStart}
                    onTouchMove={this.swipeMove}
                    onTouchEnd={this.swipeEnd}
                    onTouchCancel={this.swipeEnd}
                    style={style}
                >
                    {this.renderChild()}
                </Flex>
                {this.renderFlag()}
            </div>
        );
    }
}

Slider.propTypes = {
    onChange: PropTypes.func,
    flagInner: PropTypes.bool,
    enableAutoSlide: PropTypes.bool,
    autoSlideTime: PropTypes.number
};

Slider.defaultProps = {
    flagInner: false,
    enableAutoSlide: false,
    autoSlideTime: 5000
};

export default Slider;