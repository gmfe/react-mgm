import React from 'react';
import classNames from 'classnames';
import _ from 'underscore';

var Star = React.createClass({
    getDefaultProps(){
        return {
            full: 10,
            score: 0
        };
    },
    render() {
        let cn = classNames({
            stars: true,
            'stars-block': this.props.block
        });
        return (
            <div className={cn}>
                {_.map(_.range(parseInt(this.props.score / 2)), ()=>(
                    <i className="ifont ifont-star"></i>
                ))}
                {this.props.score / 2 * 10 % 10 ? (
                    <i>
                        <i className="ifont ifont-star-half"></i>
                    </i>
                ) : undefined}
                {_.map(_.range(parseInt((this.props.full - this.props.score) / 2)), ()=>(
                    <i className="ifont ifont-unstar"></i>
                ))}
            </div>
        );
    }
});

export default Star;
