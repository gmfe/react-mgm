import shallowCompare from 'react/lib/shallowCompare';

function shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
}

function pureRenderDecorator(component) {
    component.prototype.shouldComponentUpdate = shouldComponentUpdate;
}

export default pureRenderDecorator;