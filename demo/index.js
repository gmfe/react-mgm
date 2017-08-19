import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter as Router,
    Route,
    Redirect,
    Switch,
    Link
} from 'react-router-dom';
import {
    Flex,
    Textarea,
    NProgress,
    Toast,
    Loading,
    Page,
    Infinite,
    Header,
    Slider,
    SliderLess,
    Popup,
    SearchBar,
    Square,
    LazyImg,
    Dialog,
    CursorFix,
    Select,
    Dropper,
    Trigger,
    Tooltip,
    PreviewImage
} from './../src/index';
import _ from 'lodash';
import createHistory from 'history/createHashHistory';

import '../node_modules/gm-mfont/iconfont.css';
import './index.less';

let history = createHistory();


class App extends React.Component {
    render() {
        return React.cloneElement(this.props.children, {
            key: this.props.location.pathname
        });
    }
}

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            left: false
        };
    }

    render() {
        return (
            <Page header={<Header title="React MGM" history={history}/>} tabbar={this.renderTabbar()}>
                <h2>React MGM</h2>
                <div className="weui_cells_title">CSS</div>
                <div className="weui_cells weui_cells_access">
                    <a href="http://weui.github.io/weui/#/" target="_blank" className="weui_cell">
                        <div className="weui_cell_bd weui_cell_primary">WEUI</div>
                        <div className="weui_cell_ft"/>
                    </a>
                    <a href="http://gmfe.github.io/gm-mfont/demo.html" target="_blank" className="weui_cell">
                        <div className="weui_cell_bd weui_cell_primary">icon</div>
                        <div className="weui_cell_ft"/>
                    </a>
                    <Link to="/theme" className="weui_cell">
                        <div className="weui_cell_bd weui_cell_primary">theme</div>
                        <div className="weui_cell_ft"/>
                    </Link>
                    <Link to="/gap" className="weui_cell">
                        <div className="weui_cell_bd weui_cell_primary">gap</div>
                        <div className="weui_cell_ft"/>
                    </Link>
                    <Link to="/tabs" className="weui_cell">
                        <div className="weui_cell_bd weui_cell_primary">tabs</div>
                        <div className="weui_cell_ft"/>
                    </Link>
                </div>
                <div className="weui_cells_title">Component</div>
                <div className="weui_cells weui_cells_access">
                    <Link to="/flex" className="weui_cell">
                        <div className="weui_cell_bd weui_cell_primary">flex</div>
                        <div className="weui_cell_ft"/>
                    </Link>
                    <Link to="/textarea" className="weui_cell">
                        <div className="weui_cell_bd weui_cell_primary">textarea</div>
                        <div className="weui_cell_ft"/>
                    </Link>
                    <Link to="/toast" className="weui_cell">
                        <div className="weui_cell_bd weui_cell_primary">toast</div>
                        <div className="weui_cell_ft"/>
                    </Link>
                    <Link to="/loading" className="weui_cell">
                        <div className="weui_cell_bd weui_cell_primary">loading</div>
                        <div className="weui_cell_ft"/>
                    </Link>
                    <Link to="/nprogress" className="weui_cell">
                        <div className="weui_cell_bd weui_cell_primary">nprogress</div>
                        <div className="weui_cell_ft"/>
                    </Link>
                    <Link to="/infinite" className="weui_cell">
                        <div className="weui_cell_bd weui_cell_primary">infinite</div>
                        <div className="weui_cell_ft"/>
                    </Link>
                    <Link to="/page" className="weui_cell">
                        <div className="weui_cell_bd weui_cell_primary">page</div>
                        <div className="weui_cell_ft"/>
                    </Link>
                    <Link to="/slider" className="weui_cell">
                        <div className="weui_cell_bd weui_cell_primary">slider</div>
                        <div className="weui_cell_ft"/>
                    </Link>
                    <Link to="/popup" className="weui_cell">
                        <div className="weui_cell_bd weui_cell_primary">popup</div>
                        <div className="weui_cell_ft"/>
                    </Link>
                    <Link to="/searchbar" className="weui_cell">
                        <div className="weui_cell_bd weui_cell_primary">search bar</div>
                        <div className="weui_cell_ft"/>
                    </Link>
                    <Link to="/square" className="weui_cell">
                        <div className="weui_cell_bd weui_cell_primary">square</div>
                        <div className="weui_cell_ft"/>
                    </Link>
                    <Link to="/lazyimg" className="weui_cell">
                        <div className="weui_cell_bd weui_cell_primary">lazy img</div>
                        <div className="weui_cell_ft"/>
                    </Link>
                    <Link to="/dialog" className="weui_cell">
                        <div className="weui_cell_bd weui_cell_primary">dialog</div>
                        <div className="weui_cell_ft"/>
                    </Link>
                    <Link to="/cursorfix" className="weui_cell">
                        <div className="weui_cell_bd weui_cell_primary">cursorfix</div>
                        <div className="weui_cell_ft"/>
                    </Link>
                    <Link to="/select" className="weui_cell">
                        <div className="weui_cell_bd weui_cell_primary">select</div>
                        <div className="weui_cell_ft"/>
                    </Link>
                    <Link to="/dropper" className="weui_cell">
                        <div className="weui_cell_bd weui_cell_primary">dropper</div>
                        <div className="weui_cell_ft"/>
                    </Link>
                    <Link to="/tooltip" className="weui_cell">
                        <div className="weui_cell_bd weui_cell_primary">tooltip</div>
                        <div className="weui_cell_ft"/>
                    </Link>
                    <Link to="/previewimage" className="weui_cell">
                        <div className="weui_cell_bd weui_cell_primary">preview image</div>
                        <div className="weui_cell_ft"/>
                    </Link>
                </div>
            </Page>
        );
    }

    renderTabbar() {
        return (
            <div className="weui_tabbar">
                <a href="javascript:;" className="weui_tabbar_item weui_bar_item_on">
                    <div className="weui_tabbar_icon">
                        <img src="https://bshop.guanmai.cn/static/app/img/nav11.png" alt=""/>
                    </div>
                    <p className="weui_tabbar_label">全部菜品</p>
                </a>
                <a href="javascript:;" className="weui_tabbar_item">
                    <div className="weui_tabbar_icon">
                        <img src="https://bshop.guanmai.cn/static/app/img/nav2.png" alt=""/>
                    </div>
                    <p className="weui_tabbar_label">购物车</p>
                </a>
                <a href="javascript:;" className="weui_tabbar_item">
                    <div className="weui_tabbar_icon">
                        <img src="https://bshop.guanmai.cn/static/app/img/nav3.png" alt=""/>
                    </div>
                    <p className="weui_tabbar_label">我的订单</p>
                </a>
                <a href="javascript:;" className="weui_tabbar_item">
                    <div className="weui_tabbar_icon">
                        <img src="https://bshop.guanmai.cn/static/app/img/nav4.png" alt=""/>
                    </div>
                    <p className="weui_tabbar_label">我的</p>
                </a>
            </div>
        );
    }
}


class ThemeWrap extends React.Component {
    render() {
        return (
            <Page white>
                <div className="color">
                    <h3>色系</h3>
                    <div>
                        <span className="strip default"/>默认字体色
                    </div>
                    <div>
                        <span className="strip primary"/>主色
                    </div>
                    <div>
                        <span className="strip warn"/>危险色
                    </div>
                    <div>
                        <span className="strip desc"/>辅助色
                    </div>
                    <div>
                        <span className="strip border"/>边框色
                    </div>
                </div>
                <div className="bg">
                    <h3>背景</h3>
                    两种:1 白色背景色
                    <div className="default">2 默认背景色</div>
                </div>
                <div>
                    <h3>边框</h3>
                    <div className="border margin-5">
                        border
                    </div>
                    <div className="border-bottom margin-5">
                        border bottom
                    </div>
                    <div className="border-top margin-5">
                        border top
                    </div>
                </div>
                <div>
                    <h3>1x 边框(用前请了解其原理)</h3>
                    <div className="border-1px margin-5">
                        border 1x
                    </div>
                    <div className="border-1px-bottom margin-5">
                        border 1x bottom
                    </div>
                    <div className="border-1px-top margin-5">
                        border 1x top
                    </div>
                </div>
                <div>
                    <h3>按钮(正常和不可点状态)</h3>
                    <div>
                        <button className="weui_btn weui_btn_primary active">primary</button>
                        <button className="weui_btn weui_btn_primary weui_btn_disabled" disabled>warn</button>
                    </div>
                    <div>
                        <button className="weui_btn weui_btn_warn">warn</button>
                        <button className="weui_btn weui_btn_warn weui_btn_disabled" disabled>warn</button>
                    </div>
                    <div>
                        <button className="weui_btn weui_btn_default">default</button>
                        <button className="weui_btn weui_btn_default weui_btn_disabled" disabled>default</button>
                    </div>
                    <div>
                        <button className="weui_btn weui_btn_plain_primary">plain primary</button>
                        <button className="weui_btn weui_btn_plain_default">plain default</button>
                    </div>

                </div>
                <div>
                    <h3>input placeholder</h3>
                    <input type="text" className="weui_input" placeholder="请输入xxxxx"/>
                </div>
                <div className="weui_panel weui_panel_access">
                    <div className="weui_panel_hd">文字组合列表</div>
                    <div className="weui_panel_bd">
                        <div className="weui_media_box weui_media_text">
                            <h4 className="weui_media_title">标题一</h4>
                            <p className="weui_media_desc">由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</p>
                        </div>
                        <div className="weui_media_box weui_media_text">
                            <h4 className="weui_media_title">标题二</h4>
                            <p className="weui_media_desc">由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</p>
                        </div>
                    </div>
                    <a href="javascript:;" className="weui_panel_ft">查看更多</a>
                </div>
            </Page>
        );
    }
}

class FlexWrap extends React.Component {
    render() {
        return (
            <Page white>
                <h2>flex
                    <small><i>具体见代码容易理解</i></small>
                </h2>
                <hr/>
                <div className="padding-15">
                    横向 默认 Flex
                    <Flex>
                        <Flex className="border">
                            1
                        </Flex>
                        <Flex flex className="border">Flex flex 会占满</Flex>
                    </Flex>
                    纵向 Flex column
                    <Flex column>
                        <Flex className="border">1</Flex>
                        <Flex className="border">2</Flex>
                    </Flex>
                </div>
                <div className="padding-15">
                    不换行 默认 宽度会被压缩 FLex
                    <Flex>
                        <Flex className="border" style={{width: 100}}>100</Flex>
                        <Flex className="border" style={{width: 100}}>100</Flex>
                        <Flex className="border" style={{width: 100}}>100</Flex>
                        <Flex className="border" style={{width: 100}}>100</Flex>
                    </Flex>
                    换行 FLex wrap
                    <Flex wrap>
                        <Flex className="border" style={{width: 100}}>100</Flex>
                        <Flex className="border" style={{width: 100}}>100</Flex>
                        <Flex className="border" style={{width: 100}}>100</Flex>
                        <Flex className="border" style={{width: 100}}>100</Flex>
                    </Flex>
                </div>
                <div className="padding-15">
                    Flex width height 如果定了width/height则不能被压缩
                    <Flex>
                        <Flex className="border" width={100}>100</Flex>
                        <Flex className="border" width={100}>100</Flex>
                        <Flex className="border" width={100}>100</Flex>
                        <Flex className="border" width={100}>100</Flex>
                    </Flex>
                </div>
                <div className="padding-15">
                    主轴对齐方式 默认 Flex
                    <Flex>
                        <Flex className="border" style={{width: 100}}>100</Flex>
                        <Flex className="border" style={{width: 100}}>100</Flex>
                    </Flex>
                    主轴对齐方式 Flex justifyCenter
                    <Flex justifyCenter>
                        <Flex className="border" style={{width: 100}}>100</Flex>
                        <Flex className="border" style={{width: 100}}>100</Flex>
                    </Flex>
                    主轴对齐方式 Flex justifyEnd
                    <Flex justifyEnd>
                        <Flex className="border" style={{width: 100}}>100</Flex>
                        <Flex className="border" style={{width: 100}}>100</Flex>
                    </Flex>
                    主轴对齐方式 Flex justifyBetween
                    <Flex justifyBetween>
                        <Flex className="border" style={{width: 100}}>100</Flex>
                        <Flex className="border" style={{width: 100}}>100</Flex>
                    </Flex>
                    主轴对齐方式 Flex justifyAround
                    <Flex justifyAround>
                        <Flex className="border" style={{width: 100}}>100</Flex>
                        <Flex className="border" style={{width: 100}}>100</Flex>
                    </Flex>
                </div>
                <div className="padding-15">
                    交叉轴对齐 默认 Flex
                    <Flex>
                        <Flex className="border" style={{width: 50}}>50 50</Flex>
                        <Flex className="border" style={{width: 50, height: 100}}>50 100</Flex>
                    </Flex>
                    交叉轴对齐 Flex alignEnd
                    <Flex alignEnd>
                        <Flex className="border" style={{width: 50}}>1<br/>2</Flex>
                        <Flex className="border" style={{width: 50}}>1<br/>2<br/>3</Flex>
                    </Flex>
                    交叉轴对齐 Flex alignCenter
                    <Flex alignCenter>
                        <Flex className="border" style={{width: 50}}>1<br/>2</Flex>
                        <Flex className="border" style={{width: 50}}>1<br/>2<br/>3</Flex>
                    </Flex>
                    交叉轴对齐 Flex alignStretch
                    <Flex alignStretch>
                        <Flex className="border" style={{width: 50}}>1<br/>2</Flex>
                        <Flex className="border" style={{width: 50}}>1<br/>2<br/>3</Flex>
                    </Flex>
                    交叉轴对齐 Flex alignBaseline
                    <Flex alignBaseline>
                        <Flex className="border" style={{width: 50}}>1<br/>2</Flex>
                        <Flex className="border padding-top-10" style={{width: 50}}>1<br/>2<br/>3</Flex>
                    </Flex>
                </div>
            </Page>
        );
    }
}

class GapWrap extends React.Component {
    render() {
        return (
            <Page white>
                <h2>gap</h2>
                <hr/>
                <div>gap 即间距的，用来快速布局</div>
                <div>有4种尺寸，分别是0 5 10 15</div>
                <div>有以下形式：</div>
                <div className="border padding-10">
                    padding-10
                </div>
                <div className="border padding-top-10">
                    padding-top-10
                </div>
                <div className="border padding-bottom-10">
                    padding-bottom-10
                </div>
                <div className="border padding-lr-10">
                    padding-lr-10 lr表示左右
                </div>
                <div className="border padding-tb-10">
                    padding-tb-10
                </div>
                <div>
                    margin-x margin-top-x margin-bottom-x margin-lr-x margin-bt-x 同理
                </div>
            </Page>
        );
    }
}

class TextareaWrap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'a\na'
        };
        this.handleChange = ::this.handleChange;
    }

    render() {
        return (
            <Page>
                <h2>textarea</h2>
                <hr/>
                固定高度
                <Textarea value={this.state.value} onChange={this.handleChange}
                          wrapProps={{style: {maxHeight: '6.4em'}}}/>
                原生textarea不能随内容变高。
                <Textarea value={this.state.value} onChange={this.handleChange}/>
            </Page>
        );
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }
}

class ToastWrap extends React.Component {
    render() {
        return (
            <Page white>
                <h2>toast</h2>
                <button className="weui_btn weui_btn_primary weui_btn_mini" onClick={this.handleToast}>Toast</button>
            </Page>
        );
    }

    handleToast() {
        // Toast.tip('tip');
        Toast.success({
            time: 2000,
            children: (
                <div>
                    <div>a</div>
                    <div>b</div>
                </div>
            )
        });
        // Toast.info('我们我们我们我们我们我们我们我们我们我们我们我们我们我们我们我们我们我们我们我们我们我们我们');
        // Toast.warning('warning');
        // Toast.danger('danger');
        // Toast.loading('loading');
    }
}

class LoadingWrap extends React.Component {
    render() {
        return (
            <Page white>
                <h2>loading</h2>
                <Loading/>
            </Page>
        );
    }
}

class NProgressWrap extends React.Component {
    render() {
        return (
            <Page white>
                <h2>nprogress</h2>
                <button className="weui_btn weui_btn_default weui_btn_mini" onClick={this.handleStart}>start</button>
                <button className="weui_btn weui_btn_default weui_btn_mini" onClick={this.handleDone}>done</button>
            </Page>
        );
    }

    handleStart() {
        NProgress.start();
    }

    handleDone() {
        NProgress.done();
    }
}

class InfiniteWrap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {done: false};
        this.handleBottom = ::this.handleBottom;
    }

    componentDidMount() {
        ReactDOM.findDOMNode(this.refInfinite).scrollTop = 200;
    }

    render() {
        return (
            <Page white>
                <Infinite ref={ref => this.refInfinite = ref} done={this.state.done} onBottom={this.handleBottom}
                          style={{height: '100%'}}>
                    <div>aaaaa</div>
                    <div>aaaaa</div>
                    <div>aaaaa</div>
                    <div>aaaaa</div>
                    <div>aaaaa</div>
                    <div>aaaaa</div>
                    <div>aaaaa</div>
                    <div>aaaaa</div>
                    <div>aaaaa</div>
                    <div>aaaaa</div>
                    <div>aaaaa</div>
                    <div>aaaaa</div>
                    <div>aaaaa</div>
                    <div>aaaaa</div>
                    <div>aaaaa</div>
                    <div>aaaaa</div>
                    <div>aaaaa</div>
                    <div>aaaaa</div>
                    <div>aaaaa</div>
                    <div>aaaaa</div>
                    <div>aaaaa</div>
                    <div>aaaaa</div>
                    <div>aaaaa</div>
                    <div>aaaaa</div>
                    <div>aaaaa</div>
                    <div>aaaaa</div>
                    <div>aaaaa</div>
                </Infinite>
            </Page>
        );
    }

    handleBottom() {
        return new Promise(resolve => {
            setTimeout(() => {
                this.setState({
                    done: true
                });
                resolve();
            }, 2000);
        });
    }
}

class PageWrap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
        this.handleOtherPage = ::this.handleOtherPage;
        this.handleClose = ::this.handleClose;
    }

    render() {
        return (
            <Page white>
                <h2>page</h2>
                <hr/>
                <div>
                    everyway 每个页面都是Page
                </div>

                <button className="weui_btn weui_btn_primary" onClick={this.handleOtherPage}>showOtherPage</button>
                {this.state.show && (
                    <Page className="enter">
                        adf
                        <button className="weui_btn weui_btn_primary" onClick={this.handleClose}>close</button>
                    </Page>
                )}
            </Page>
        );
    }

    handleOtherPage() {
        this.setState({
            show: !this.state.show
        });
    }

    handleClose() {
        this.setState({
            show: !this.state.show
        });
    }
}

class SliderWrap extends React.Component {

    handleChange(index) {
        console.log(index);
    }

    render() {
        const style = {
            background: '#71B5DE',
            height: '5em',
            lineHeight: '5em',
            textAlign: 'center',
            display: 'block',
            color: 'white'
        };
        return (
            <div>
                <div>Slider</div>
                <Slider onChange={this.handleChange} flagType="line">
                    <div className="border" style={style}>1</div>
                    <div style={style}>2</div>
                </Slider>

                <Slider>
                    <div className="border" style={style}>1</div>
                </Slider>

                <Slider flag="inner" activeFlagStyle={{
                    background: 'red'
                }}>
                    <div className="border" style={style}>1</div>
                    <div style={style}>2</div>
                </Slider>

                <Slider flag="none">
                    <div className="border" style={style}>1</div>
                    <div style={style}>2</div>
                </Slider>

                <Slider enableAutoSlide slideTimeKey="lalala">
                    <div className="border" style={style}>1</div>
                    <div className="border" style={style}>2</div>
                    <div className="border" style={style}>3</div>
                    <div className="border" style={style}>4</div>
                </Slider>

                <div>SliderLess</div>

                <SliderLess enableAutoSlide slideTimeKey="aaaa">
                    <div className="border" style={style}>1111111111111111111111111111111111</div>
                    <div className="border" style={style}>22222222222222222222222222222222222</div>
                </SliderLess>

                <SliderLess enableAutoSlide slideTimeKey="aaaa">
                    <div className="border" style={style}>1111111111111111111111111111111111</div>
                    <div className="border" style={style}>22222222222222222222222222222222222</div>
                </SliderLess>
            </div>
        );
    }
}

class TabsWrap extends React.Component {
    render() {
        return (
            <div>
                <div className="tabs">
                    <div className="tabs-item">
                        <div className="tabs-item-text">选项一</div>
                    </div>
                    <div className="tabs-item active">
                        <div className="tabs-item-text">选项二</div>
                    </div>
                    <div className="tabs-item">
                        <div className="tabs-item-text">选项三</div>
                    </div>
                </div>
            </div>
        );
    }
}

class PopupWrap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            show2: false
        };

        this.handleShow = ::this.handleShow;
        this.handleShow2 = ::this.handleShow2;
        this.handleShow3 = ::this.handleShow3;
        this.handleChange = ::this.handleChange;
        this.handleChange2 = ::this.handleChange2;
    }

    render() {
        return (
            <Page>
                <button className="weui_btn weui_btn_primary" onClick={this.handleShow}>open popup left</button>
                <button className="weui_btn weui_btn_primary" onClick={this.handleShow2}>open popup bottom</button>
                <button className="weui_btn weui_btn_primary" onClick={this.handleShow3}>open popup static api</button>
                <Popup left show={this.state.show} onChange={this.handleChange}>
                    asdfa
                </Popup>

                <Popup opacity={0.8} bottom autoHeight show={this.state.show2} onChange={this.handleChange2}>
                    height 350px
                </Popup>

                <div>asdf</div>
                <div>asdf</div>
                <div>asdf</div>
                <div>asdf</div>
                <div>asdf</div>
                <div>asdf</div>
                <div>asdf</div>
                <div>asdf</div>
                <div>asdf</div>
                <div>asdf</div>
                <div>asdf</div>
                <div>asdf</div>
                <div>asdf</div>
                <div>asdf</div>
                <div>asdf</div>
                <div>asdf</div>
                <div>asdf</div>
                <div>asdf</div>
                <div>asdf</div>
                <div>asdf</div>
                <div>asdf</div>
                <div>asdf</div>
                <div>asdf</div>
                <div>asdf</div>
                <div>asdf</div>
            </Page>
        );
    }

    handleShow() {
        this.setState({
            show: !this.state.show
        });
    }

    handleShow2() {
        this.setState({
            show2: !this.state.show2
        });
    }

    handleShow3() {
        Popup.render({
            left: true,
            children: 'adfaf',
            onChange: Popup.hide
        });
    }

    handleChange(show) {
        this.setState({
            show
        });
    }

    handleChange2(show2) {
        this.setState({
            show2
        });
    }
}


class SearchBarWrap extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            defaultFocus: false,
            value: ''
        };

        this.handleChange = ::this.handleChange;
    }

    render() {
        return (
            <Page>
                <SearchBar
                    placeholder="搜索商品"
                    value={this.state.value}
                    onChange={this.handleChange}
                    onOK={this.handleOK}
                    onCancel={this.handleCancel}
                    onBlur={this.handleBlur}
                    onFocus={this.handleFocus}
                />

                <SearchBar
                    placeholder="搜索商品"
                    value={this.state.value}
                    onChange={this.handleChange}
                    onOK={this.handleOK}
                    onCancel={this.handleCancel}
                    onBlur={this.handleBlur}
                    OKBtn
                    defaultFocus
                />
            </Page>
        );
    }

    handleFocus() {
        console.log('focus');
    }

    handleBlur() {
        console.log('blur');
    }

    handleChange(value) {
        this.setState({
            value
        });
    }

    handleOK() {
        console.log('ok');
    }

    handleCancel() {
        console.log('cancel');
    }
}


class SquareWrap extends React.Component {
    render() {
        return (
            <Page>
                <div style={{width: '50%'}}>
                    <Square className="bg-white">
                        <img src="" style={{width: '100%', height: '100%'}} alt=""/>
                    </Square>
                </div>
            </Page>
        );
    }
}

class LazyImgWrap extends React.Component {
    render() {
        return (
            <Page className="lazy-img-wrap">
                <LazyImg
                    placeholder={'https://placeholdit.imgix.net/~text?txtsize=23&bg=f7f7f7&txt=loading&w=250&h=250'}
                    src="https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png"/>
                <div style={{height: '600px'}}/>
                <LazyImg
                    placeholder={'https://placeholdit.imgix.net/~text?txtsize=23&bg=f7f7f7&txt=loading&w=250&h=250'}
                    src="https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png"/>
                <LazyImg
                    src="https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png"/>
                <LazyImg
                    src="https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png"/>
            </Page>
        );
    }
}

class DialogWrap extends React.Component {
    constructor(props) {
        super(props);

        this.handleCancel = ::this.handleCancel;
        this.handleConfirm = ::this.handleConfirm;
        this.handleAlertShow = ::this.handleAlertShow;
        this.handleConfirmShow = ::this.handleConfirmShow;
        this.handleA = ::this.handleA;
        this.handleA = ::this.handleA;

        this.state = {
            confirmShow: false,
            alertShow: false,
            btnText: {cancel: '不合并', confirm: '合并'}
        };
    }

    handleCancel() {
        this.setState({
            confirmShow: false
        });
    }

    handleConfirm() {
        this.setState({
            confirmShow: false,
            alertShow: false
        });
    }

    handleAlertShow() {
        this.setState({
            alertShow: true
        });
    }

    handleConfirmShow() {
        this.setState({
            confirmShow: true
        });
    }

    render() {
        return (
            <page>
                <button className="weui_btn weui_btn_primary" onClick={this.handleAlertShow}>Alert Dialog</button>
                <button className="weui_btn weui_btn_primary" onClick={this.handleConfirmShow}>Confirm Dialog</button>

                <Dialog
                    confirm
                    show={this.state.confirmShow}
                    title="Alert Dialog"
                    onCancel={this.handleCancel}
                    onConfirm={this.handleConfirm}
                    btnText={this.state.btnText}
                >
                    这是confirm内容
                </Dialog>

                <Dialog
                    alert
                    show={this.state.alertShow}
                    title="Alert Dialog"
                    onConfirm={this.handleConfirm}
                >
                    这是alert
                </Dialog>

                <button className="weui_btn weui_btn_warn" onClick={this.handleA}>Alert Dialog（API+Promise）</button>
                <button className="weui_btn weui_btn_warn" onClick={this.handleC}>Confirm Dialog（API+Promise）
                </button>
            </page>
        );
    }

    handleA() {
        Dialog.alert('yoyoyo').then(() => {
            console.log('ok');
        });
    }

    handleC() {
        Dialog.confirm({
            children: '确定么?',
            btnText: {confirm: '去充值'}
        }).then(() => {
            console.log('ok');
        }).catch(() => {
            console.log('cancel');
        });
    }
}

class CursorFixWrap extends React.Component {
    render() {
        return (
            <div>
                <CursorFix component="input" type="text" style={{border: '1px solid black'}} name="name"
                           onClick={this.handleClick}/>
                <input type="text" style={{border: '1px solid black'}}/>
            </div>
        );
    }

    handleClick() {
        console.log('click');
    }
}

class SelectWrap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            data: [
                {value: 1, name: '深圳'},
                {value: 2, name: '罗湖'},
                {value: 3, name: '罗湖'},
                {value: 4, name: '罗湖'},
                {value: 5, name: '罗湖'},
                {value: 6, name: '罗湖'},
                {value: 7, name: '罗湖'},
                {value: 8, name: '罗湖'},
                {value: 9, name: '罗湖'}
            ],
            value: null
        };
    }

    render() {
        return (
            <div>
                <button className="weui_btn weui_btn_primary" onClick={::this.handleClick}>选择</button>
                {this.state.value && this.state.value.name}
                <Select
                    show={this.state.show}
                    data={this.state.data}
                    value={this.state.value}
                    onChange={::this.handleChange}/>
            </div>
        );
    }

    handleChange(value) {
        console.log(value);
        this.setState({
            value,
            show: false
        });
    }

    handleClick() {
        this.setState({
            show: true
        });
    }
}

class DropperWrap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            img: ''
        };
        this.lrz = null;

        this.handleDrop = ::this.handleDrop;
    }

    render() {
        return (
            <div>
                <Dropper onDrop={this.handleDrop}>
                    默认选择图片样式
                </Dropper>

                <Dropper className="border">
                    <button className="weui_btn weui_btn_primary">自定义选择图片</button>
                </Dropper>

                <div>
                    原图
                    <img style={{width: '100%'}} src={this.state.img} alt=""/>

                </div>
                <div>压缩
                    <img src={this.state.resizeImg ? this.state.resizeImg.base64 : ''} alt=""/>
                </div>
            </div>
        );
    }

    handleDrop(files, event) {
        console.log(files, event);
        this.setState({
            img: files[0].preview,
            resizeImg: null
        });

        const option = {
            width: 300,
            height: 300,
            quality: 1
        };

        this.getLrz().then(lrz => {
            Promise.all(_.map(files, (file) => {
                return lrz(file, option);
            })).then(rsts => {
                console.log(rsts[0]);
                this.setState({
                    resizeImg: rsts[0]
                });
            });
        });
    }

    getLrz() {
        if (this.lrz) {
            return Promise.resolve(this.lrz);
        } else {
            return new Promise((resolve) => {
                require.ensure(['lrz'], require => {
                    this.lrz = require('lrz');
                    resolve(this.lrz);
                });
            });
        }
    }
}

class TriggerWrap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.renderPopup = ::this.renderPopup;
    }

    renderPopup() {
        return (
            <div className="gm-border" style={{width: '200px', height: '200px', background: 'red'}}>
                <div>popup</div>
            </div>
        );
    }

    render() {
        return (
            <Trigger component={<div/>} popup={this.renderPopup()}>
                <button className="btn btn-default">focus me(default)</button>
            </Trigger>
        );
    }
}

class TooltipWrap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.renderPopup = ::this.renderPopup;
    }

    renderPopup() {
        return (
            <Tooltip placement="bottomRight" style={{width: '250px'}}>
                这是一个tooltip bottomRight (default)
            </Tooltip>
        );
    }

    render() {
        return (
            <Flex column>
                <Flex style={{margin: '5px 15px'}}>
                    Tooltip需要配合Trigger使用，注意Tooltip的'topLeft', 'topRight', 'bottomLeft',
                    'bottomRight'合Trigger的'right'、'top'的搭配
                </Flex>
                <Flex justifyEnd style={{margin: "30px 20px"}}>
                    <Trigger component={<div/>} right adjustX={20} popup={this.renderPopup()}>
                        <button className="weui_btn weui_btn_primary weui_btn_mini">bottomRight (default)
                        </button>
                    </Trigger>
                </Flex>

                <Flex style={{margin: "30px 20px"}}>
                    <Trigger component={<div/>} timeout={2000}
                             popup={<Tooltip placement="bottomLeft" style={{width: '250px'}}>
                                 这是一个tooltip bottomLeft
                             </Tooltip>}
                    >
                        <button className="weui_btn weui_btn_primary weui_btn_mini">bottomLeft with timeout
                        </button>
                    </Trigger>
                </Flex>

                <Flex justifyEnd style={{margin: "30px 20px"}}>
                    <Trigger component={<div/>} top right adjustX={20} mask
                             popup={<Tooltip placement="topRight" style={{width: '250px'}}>
                                 这是一个tooltip topRight
                             </Tooltip>}
                    >
                        <button className="weui_btn weui_btn_primary weui_btn_mini">topRight with mask
                        </button>
                    </Trigger>
                </Flex>

                <Flex style={{margin: "30px 20px"}}>
                    <Trigger component={<div/>} top adjustX={30} mask
                             popup={<Tooltip placement="topLeft" style={{width: '250px'}}>
                                 这是一个tooltip topLeft
                             </Tooltip>}
                    >
                        <button className="weui_btn weui_btn_primary weui_btn_mini">topLeft with mask
                        </button>
                    </Trigger>
                </Flex>

                <Flex style={{margin: "30px 20px"}}>
                    <Trigger component={<div/>} type="hover" top mask
                             popup={<Tooltip placement="topLeft" style={{width: '250px'}}>
                                 这是一个tooltip topLeft (hover)
                             </Tooltip>}
                    >
                        <button className="weui_btn weui_btn_primary weui_btn_mini">topLeft (hover)
                        </button>
                    </Trigger>
                </Flex>
            </Flex>
        );
    }
}

class PreviewImageWrap extends React.Component {
    handleShow() {
        PreviewImage.render({
            images: [{
                url: 'https://bshop.guanmai.cn/static/icon/icon-veg.4fa23256.png',
                name: 'aaaa菜心'
            }, {
                url: 'https://bshop.guanmai.cn/static/productpic/aa5defe86bb7adaa.jpg',
                name: '菠菜aaaaaaa'
            }, {
                url: 'https://bshop.guanmai.cn/static/station_pic/gm_banner.jpg',
                name: '宽宽图'
            }, {
                url: 'http://7xlnio.com1.z0.glb.clouddn.com/17-2-16/53032612-file_1487254642623_73b9.png',
                name: '高高高图'
            }],
            onHide: PreviewImage.hide
        });
    }

    handleShowSingle() {
        PreviewImage.render({
            images: [{
                url: 'https://bshop.guanmai.cn/static/productpic/aa5defe86bb7adaa.jpg',
                name: '菠菜aaaaaaa'
            }],
            onHide: PreviewImage.hide
        });
    }

    render() {
        return (
            <div>
                <button className="weui_btn weui_btn_primary" onClick={this.handleShow}>show images</button>
                <button className="weui_btn weui_btn_primary" onClick={this.handleShowSingle}>show image</button>
            </div>
        );
    }
}


const routeMap = {
    theme: ThemeWrap,
    gap: GapWrap,
    flex: FlexWrap,
    textarea: TextareaWrap,
    toast: ToastWrap,
    loading: LoadingWrap,
    nprogress: NProgressWrap,
    infinite: InfiniteWrap,
    page: PageWrap,
    slider: SliderWrap,
    tabs: TabsWrap,
    popup: PopupWrap,
    searchbar: SearchBarWrap,
    square: SquareWrap,
    lazyimg: LazyImgWrap,
    dialog: DialogWrap,
    cursorfix: CursorFixWrap,
    select: SelectWrap,
    dropper: DropperWrap,
    trigger: TriggerWrap,
    tooltip: TooltipWrap,
    previewimage: PreviewImageWrap
};

const Root = () => (
    <Router>
        <Route path="/" component={(props) => (
            <App {...props}>
                <Switch>
                    <Route exact path="/" render={() => <Redirect from="/" to="/home"/>}/>
                    <Route exact path="/home" component={Home}/>
                    {_.map(routeMap, (v, k) => (
                        <Route key={k} exact path={'/' + k} component={v}/>
                    ))}
                </Switch>
            </App>
        )}>
        </Route>
    </Router>
);

ReactDOM.render(<Root/>, window.document.getElementById('appContainer'));