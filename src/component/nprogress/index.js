import React from 'react';
import ReactDOM from 'react-dom';

const containerId = '_mgm_nprogress_container' + (Math.random() + '').slice(2);
let container = window.document.getElementById(containerId);
if (!container) {
    container = window.document.createElement('div');
    container.className = 'nprogress-container';
    container.id = containerId;
    window.document.body.appendChild(container);
}

const NProgressStatics = {
    start: function () {
        ReactDOM.unmountComponentAtNode(container);
        ReactDOM.render(<NProgress/>, container);
    },
    done: function () {
        ReactDOM.render(<NProgress precent={100}/>, container);
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
        const percent = 100 - this.state.precent;
        return (
            <div className="nprogress" style={{transform: "translate3d(-" + percent + "%, 0, 0)"}}>
                <div className="nprogress-head"/>
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