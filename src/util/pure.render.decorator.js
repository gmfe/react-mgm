import shallowCompare from 'react-addons-shallow-compare';

function shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
}

function pureRenderDecorator(component) {
    component.prototype.shouldComponentUpdate = shouldComponentUpdate;
}

export default pureRenderDecorator;