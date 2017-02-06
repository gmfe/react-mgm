import React from 'react';
import ReactDOM from 'react-dom';

var containerId = '_mgm_nprogress_container' + (Math.random() + '').slice(2);
var container = window.document.getElementById(containerId);
if (!container) {
    container = window.document.createElement('div');
    container.className = 'nprogress-container';
    container.id = containerId;
    window.document.body.appendChild(container);
}

var NProgressStatics = {
    start: function () {
        ReactDOM.unmountComponentAtNode(container);
        ReactDOM.render(<NProgress></NProgress>, container);
    },
    done: function () {
        ReactDOM.render(<NProgress precent={100}></NProgress>, container);
        setTimeout(function () {
            ReactDOM.unmountComponentAtNode(container);
        }, 250);
    }
};

class NProgress extends React.Component {
    static start = NProgressStatics.start;
    static done = NProgressStatics.done;

    constructor(props) {
        super(props);

        this.state = {
            precent: 0
        };

        this.timer = null;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.precent) {
            clearTimeout(this.timer);
            this.setState({
                precent: nextProps.precent
            });
        }
    }

    render() {
        var percent = 100 - this.state.precent;
        return (
            <div className="nprogress" style={{transform: "translate3d(-" + percent + "%, 0, 0)"}}>
                <div className="nprogress-head"></div>
            </div>
        );
    }

    componentDidMount() {
        this.doInc();
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    doInc() {
        this.timer = setTimeout(() => {
            this.setState({
                precent: this.state.precent + (100 - this.state.precent) * 0.2
            });
            if (this.state.precent < 90) {
                this.doInc();
            }
        }, 150);
    }
}

export default NProgress;