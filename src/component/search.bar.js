import React, {PropTypes} from 'react';
import classNames from 'classnames';
import pureRenderDecorator from '../pure.render.decorator';

const noop = () => {
};

@pureRenderDecorator
class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.id || '_mgm_search_bar_id' + (Math.random() + '').slice(2),
            focus: props.defaultFocus
        };

        this.handleOK = ::this.handleOK;
        this.handleFocus = ::this.handleFocus;
        this.handleBlur = ::this.handleBlur;
        this.handleChange = ::this.handleChange;
        this.handleClear = ::this.handleClear;
        this.handleCancel = ::this.handleCancel;
        this.handleLabel = ::this.handleLabel;
    }

    render() {
        const cn = classNames('search-bar weui_search_bar', {
            'weui_search_focusing': this.props.value || this.state.focus
        });
        return (
            <div className={cn}>
                <form className="weui_search_outer" onSubmit={this.handleOK}>
                    <div className="weui_search_inner">
                        <i className="weui_icon_search"></i>
                        <input id={this.state.id}
                               type="search"
                               className="weui_search_input"
                               placeholder={this.props.placeholder}
                               onFocus={this.handleFocus}
                               onBlur={this.handleBlur}
                               onChange={this.handleChange}
                               ref="input"
                               value={this.props.value}/>
                        {this.props.value === '' ? undefined : (
                            <a href="javascript:" className="weui_icon_clear"
                               onClick={this.handleClear}></a>
                        )}
                    </div>
                    <label htmlFor={this.state.id} className="weui_search_text" onClick={this.handleLabel}>
                        <i className="weui_icon_search"></i>
                        <span>{this.props.placeholder}</span>
                    </label>
                </form>
                {this.props.OKBtn ? (
                    <a href="javascript:" className="weui_search_cancel" onClick={this.handleOK}>
                        {this.props.OKBtn === true ? '搜索' : this.props.OKBtn}
                    </a>
                ) : (
                    <a href="javascript:" className="weui_search_cancel" onClick={this.handleCancel}>取消</a>
                )}
            </div>
        );
    }

    handleLabel(event) {
        // 避免穿透
        event.preventDefault();
        this.setState({
            focus: true
        });
        this.refs.input.focus();
    }

    handleFocus(event) {
        event.preventDefault();
        this.props.onFocus(event);
        this.setState({
            focus: true
        });
    }

    handleBlur(event) {
        event.preventDefault();
        this.props.onBlur(event);
        // blur触发优先于handleOK，，可能会导致OK按钮消失了，点不了
        setTimeout(() => {
            this.setState({
                focus: false
            });
        }, 500);
    }

    handleClear(event) {
        event.preventDefault();
        this.props.onChange('');
        this.refs.input.focus();
    }

    handleCancel(event) {
        event.preventDefault();
        this.setState({focus: false});
        this.props.onChange('');
        this.props.onCancel();
        this.refs.input.blur();
    }

    handleOK(event) {
        event.preventDefault();
        this.refs.input.blur();
        this.props.onOK();
        this.setState({
            focus: false
        });
    }

    handleChange(event) {
        this.props.onChange(event.target.value);
    }
}

SearchBar.defaultProps = {
    defaultFocus: false,
    onBlur: noop,
    onFocus: noop,
    onOK: noop,
    onCancel: noop,
    OKBtn: false
};

SearchBar.propTypes = {
    defaultFocus: PropTypes.bool,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    placeholder: PropTypes.string,
    onOK: PropTypes.func,
    onCancel: PropTypes.func,
    OKBtn: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]) // 就没有onCancel 时间 了，传string则替换文本
};

export default SearchBar;
