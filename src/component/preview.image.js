import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import pureRenderDecorator from '../pure.render.decorator';
import _ from 'underscore';
import Slide from './slider';
import Flex from './flex';

let previewImageContainerId = '_mgm_previewImage_container' + (Math.random() + '').slice(2);
let previewImageContainer = window.document.getElementById(previewImageContainerId);

if (!previewImageContainer) {
    previewImageContainer = window.document.createElement('div');
    previewImageContainer.className = 'mgm-previewImage';
    previewImageContainer.id = previewImageContainerId;
    window.document.body.appendChild(previewImageContainer);
}

let PreviewImageStatics = {
    render(options){
        const popstate = () => {
            previewImageContainer.removeChild(div);
            window.removeEventListener('popstate', popstate);
        };

        window.addEventListener('popstate', popstate);

        const div = window.document.createElement('div');
        previewImageContainer.appendChild(div);
        options.show = true;
        options.onHide = () => {
            PreviewImageStatics.hide();
        };
        window.history.pushState({}, null);
        ReactDOM.render(<PreviewImage {...options}/>, div);
    },
    hide(){
        window.history.go(-1);
    }
};

const maxHeight = window.document.documentElement.clientHeight - 150;

@pureRenderDecorator
class PreviewImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        };
        this.handleChange = ::this.handleChange;
        this.handleClose = ::this.handleClose;
    }

    handleChange(index) {
        this.setState({
            index: index
        });
    }

    handleClose(e) {
        e.preventDefault();
        if (this.props.onHide) {
            this.props.onHide();
        }
    }

    render() {
        const {
            className,
            images,
            show,
            onHide, // eslint-disable-line
            ...rest
        } = this.props;
        const cn = classNames('preview-image', className);

        if (!show) {
            return null;
        }

        return (
            <Flex column justifyCenter {...rest} className={cn} onClick={this.handleClose}>
                <div className="preview-image-close">X</div>
                <div className="preview-image-inner">
                    {images.length === 1 ? (
                        <Flex className="flex-align-center flex-justify-center">
                            <img src={images[0].url} style={{
                                maxHeight
                            }}/>
                        </Flex>
                    ) : (
                        <Slide onChange={this.handleChange}>
                            {_.map(images, (v, i) => (
                                <div key={i + v.url} className="flex-align-center flex-justify-center">
                                    <img src={v.url} style={{
                                        maxHeight
                                    }}/>
                                </div>
                            ))}
                        </Slide>
                    )}
                    <div className="text-center preview-image-name">
                        {images[this.state.index] && images[this.state.index].name}
                    </div>
                </div>
            </Flex>
        );
    }
}

Object.assign(PreviewImage, PreviewImageStatics);

PreviewImage.defaultProps = {
    show: false
};

PreviewImage.propTypes = {
    images: PropTypes.array,
    show: PropTypes.bool,
    onHide: PropTypes.func
};

export default PreviewImage;