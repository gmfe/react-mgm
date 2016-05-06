import React from 'react';
import ReactDom from 'react-dom';
import classnames from 'classnames';
import _ from 'underscore';
import Flex from './flex';

var Slider = React.createClass({
    getInitialState(){
        return {
            count: 1,
            sliderWidth: 0,
            touchObject: null,
            dragging: false,
            transition: false,
            x: 0
        };
    },
    render() {
        const to = this.state.touchObject;
        let offset = to ? (to.x - to.startX + this.state.x) : this.state.x;

        const cn = classnames({
            'slider-transition': this.state.transition
        }, this.props.className);

        const style = {
            WebkitTransform: 'translate3d(' + offset + 'px, 0, 0)',
            transform: 'translate3d(' + offset + 'px, 0, 0)'
        };

        return (
            <div className="slider">
                <Flex
                    {...this.props}
                    ref="slider"
                    className={cn}
                    onMouseDown={this.swipeStart}
                    onMouseMove={this.state.dragging ? this.swipeMove: null}
                    onMouseUp={this.swipeEnd}
                    onMouseLeave={this.state.dragging ? this.swipeEnd: null}
                    onTouchStart={this.swipeStart}
                    onTouchMove={this.state.dragging ? this.swipeMove: null}
                    onTouchEnd={this.swipeEnd}
                    onTouchCancel={this.state.dragging ? this.swipeEnd: null}
                    style={style}
                >
                    {this.renderChild()}
                </Flex>
                {this.renderFlag()}
            </div>
        );
    },
    renderChild(){
        let components = this.props.children;

        if (toString.call(this.props.children) !== '[object Array]') {
            components = [this.props.children];
        }
        return _.map(components, (value, i) => {
            return React.cloneElement(value, {
                style: _.extend({}, value.props.style, {width: '100%'}),
                className: classnames('slider-cell flex flex-none', value.props.className),
                key: i
            });
        });
    },
    renderFlag(){
        return (
            <Flex justifyCenter className="slider-flag">
                {_.map(_.range(this.state.count), (value, i) => <span
                    className={classnames({active: Math.abs(this.state.x / this.state.sliderWidth) === i})}
                    key={i}></span>)}
            </Flex>
        );
    },
    componentDidMount(){
        this.setSliderWidth();
        this.setState({
            count: toString.call(this.props.children) === '[object Array]' ? this.props.children.length : 1
        });
        window.addEventListener('resize', this.setSliderWidth);
    },
    componentWillUnmount(){
        window.removeEventListener('resize', this.setSliderWidth);
    },
    setSliderWidth(){
        const slider = ReactDom.findDOMNode(this.refs.slider);
        this.setState({
            sliderWidth: slider.offsetWidth
        });
    },
    getX(event){
        return event.touches !== undefined ? event.touches[0].pageX : event.clientX;
    },
    swipeStart(event){
        this.setState({
            dragging: true,
            transition: false,
            touchObject: {
                startX: this.getX(event),
                x: this.getX(event)
            }
        });
    },
    swipeMove(event){
        this.setState({
            dragging: true,
            transition: false,
            touchObject: _.extend({}, this.state.touchObject, {
                x: this.getX(event)
            })
        });
    },
    swipeEnd(){
        if (!this.state.dragging) {
            return;
        }
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
    }
});

export default Slider;