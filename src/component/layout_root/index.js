import React from 'react';

const TYPE = {
    POPUP: 'popup',
    MODAL: 'modal',
    TIP: 'tip',
    NPROGRESS: 'nprogress'
};

let setComponentFunc = null;

class LayerRoot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            popup: null,
            modal: null,
            tip: null,
            nprogress: null
        };
    }

    componentDidMount() {
        setComponentFunc = (type, component) => {
            this.setState({
                [type]: component
            });
        };
    }

    componentWillUnmount() {
        setComponentFunc = null;
    }

    render() {
        // 有层级关系
        return (
            <div>
                <div>{this.state.popup}</div>
                <div>{this.state.modal}</div>
                <div>{this.state.tip}</div>
                <div>{this.state.nprogress}</div>
            </div>
        );
    }
}

LayerRoot.setComponent = (type, com) => {
    if (setComponentFunc) {
        LayerRoot.removeComponent();
        setComponentFunc(type, com);
    } else {
        console.warn('LayerRoot is uninitialized');
    }
};

LayerRoot.removeComponent = (type) => {
    if (setComponentFunc) {
        setComponentFunc(type, undefined);
    } else {
        console.warn('LayerRoot is uninitialized');
    }
};

LayerRoot.TYPE = TYPE;

export default LayerRoot;