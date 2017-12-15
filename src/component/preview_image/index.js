import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import pureRenderDecorator from '../../util/pure.render.decorator';
import _ from 'lodash';
import Slide from '../slider/index';
import Flex from '../flex/index';
import LayoutRoot from '../layout_root';

let PreviewImageStatics = {
    render(options) {
        const popstate = () => {
            LayoutRoot.removeComponent(LayoutRoot.TYPE.POPUP);

            window.removeEventListener('popstate', popstate);
        };

        window.addEventListener('popstate', popstate);

        options.show = true;
        options.onHide = () => {
            PreviewImageStatics.hide();
        };
        window.history.pushState({type: 'previewImage'}, null);
        LayoutRoot.setComponent(LayoutRoot.TYPE.POPUP, <PreviewImage {...options}/>);
    },
    hide() {
        window.history.go(-1);
    }
};

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
        this.props.onHide();
    }

    render() {
        const {
            className,
            images,
            show,
            onHide, // eslint-disable-line
            ...rest
        } = this.props;

        if (!show) {
            return null;
        }

        return (
            <Flex column justifyCenter {...rest} className={classNames('preview-image', className)}
                  onClick={this.handleClose}>
                <div className="preview-image-close">X</div>
                <div className="preview-image-inner">
                    {images.length === 1 ? (
                        <Flex className="flex-align-center flex-justify-center">
                            <img src={images[0].url}/>
                        </Flex>
                    ) : (
                        <Slide onChange={this.handleChange}>
                            {_.map(images, (v, i) => (
                                <div key={i + v.url} className="flex-align-center flex-justify-center">
                                    <img src={v.url}/>
                                </div>
                            ))}
                        </Slide>
                    )}
                    <div className="text-center preview-image-name" style={{color: '#555'}}>
                        {images[this.state.index] && images[this.state.index].name}
                    </div>
                </div>
            </Flex>
        );
    }
}

Object.assign(PreviewImage, PreviewImageStatics);

PreviewImage.defaultProps = {
    show: false,
    onHide: _.noop
};

PreviewImage.propTypes = {
    images: PropTypes.array,
    show: PropTypes.bool,
    onHide: PropTypes.func
};

export default PreviewImage;