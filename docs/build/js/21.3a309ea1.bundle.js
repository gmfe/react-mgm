(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{86:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_react2=_interopRequireDefault(__webpack_require__(0)),_popup2=_interopRequireDefault(__webpack_require__(12)),_page2=_interopRequireDefault(__webpack_require__(11));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var PopupWrap=function(_React$Component){function PopupWrap(props){!function(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,PopupWrap);var _this=function(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}(this,(PopupWrap.__proto__||Object.getPrototypeOf(PopupWrap)).call(this,props));return _this.state={show:!1,show2:!1},_this.handleShow=_this.handleShow.bind(_this),_this.handleShow2=_this.handleShow2.bind(_this),_this.handleShow3=_this.handleShow3.bind(_this),_this.handleChange=_this.handleChange.bind(_this),_this.handleChange2=_this.handleChange2.bind(_this),_this}return function(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}(PopupWrap,_React$Component),_createClass(PopupWrap,[{key:"handleShow",value:function(){this.setState({show:!this.state.show})}},{key:"handleShow2",value:function(){this.setState({show2:!this.state.show2})}},{key:"handleShow3",value:function(){_popup2.default.render({left:!0,children:_react2.default.createElement("div",null,"调用静态方法")})}},{key:"handleShow4",value:function(){_popup2.default.render({right:!0,children:_react2.default.createElement("div",null,"调用静态方法")})}},{key:"handleChange",value:function(){this.setState({show:!this.state.show})}},{key:"handleChange2",value:function(){this.setState({show2:!this.state.show2})}},{key:"render",value:function(){return _react2.default.createElement(_page2.default,null,_react2.default.createElement("button",{className:"weui-btn weui-btn_primary",onClick:this.handleShow},"open popup left"),_react2.default.createElement("button",{className:"weui-btn weui-btn_primary",onClick:this.handleShow2},"open popup bottom"),_react2.default.createElement("button",{className:"weui-btn weui-btn_primary",onClick:this.handleShow3},"open popup API left"),_react2.default.createElement("button",{className:"weui-btn weui-btn_primary",onClick:this.handleShow4},"open popup API right"),_react2.default.createElement(_popup2.default,{left:!0,show:this.state.show,onHide:this.handleChange},_react2.default.createElement("div",null,"asdf"),_react2.default.createElement("div",null,"asdf"),_react2.default.createElement("div",null,"asdf"),_react2.default.createElement("div",null,"asdf"),_react2.default.createElement("div",null,"asdf"),_react2.default.createElement("div",null,"asdf"),_react2.default.createElement("div",null,"asdf"),_react2.default.createElement("div",null,"asdf"),_react2.default.createElement("div",null,"asdf"),_react2.default.createElement("div",null,"asdf"),_react2.default.createElement("div",null,"asdf"),_react2.default.createElement("div",null,"asdf"),_react2.default.createElement("div",null,"asdf"),_react2.default.createElement("div",null,"asdf"),_react2.default.createElement("div",null,"asdf"),_react2.default.createElement("div",null,"asdf"),_react2.default.createElement("div",null,"asdf"),_react2.default.createElement("div",null,"asdf"),_react2.default.createElement("div",null,"asdf"),_react2.default.createElement("div",null,"asdf"),_react2.default.createElement("div",null,"asdf"),_react2.default.createElement("div",null,"asdf"),_react2.default.createElement("div",null,"asdf"),_react2.default.createElement("div",null,"asdf"),_react2.default.createElement("div",null,"asdf")),_react2.default.createElement(_popup2.default,{opacity:.8,bottom:!0,show:this.state.show2,onHide:this.handleChange2},_react2.default.createElement("div",{style:{height:"300px"}},"height 100px")),_react2.default.createElement("div",null,"asdf"),_react2.default.createElement("div",null,"asdf"),_react2.default.createElement("div",null,"asdf"),_react2.default.createElement("div",null,"asdf"),_react2.default.createElement("div",null,"asdf"),_react2.default.createElement("div",null,"asdf"),_react2.default.createElement("div",null,"asdf"),_react2.default.createElement("div",null,"asdf"),_react2.default.createElement("div",null,"asdf"),_react2.default.createElement("div",null,"asdf"),_react2.default.createElement("div",null,"asdf"),_react2.default.createElement("div",null,"asdf"),_react2.default.createElement("div",null,"asdf"),_react2.default.createElement("div",null,"asdf"),_react2.default.createElement("div",null,"asdf"),_react2.default.createElement("div",null,"asdf"),_react2.default.createElement("div",null,"asdf"),_react2.default.createElement("div",null,"asdf"),_react2.default.createElement("div",null,"asdf"),_react2.default.createElement("div",null,"asdf"),_react2.default.createElement("div",null,"asdf"),_react2.default.createElement("div",null,"asdf"),_react2.default.createElement("div",null,"asdf"),_react2.default.createElement("div",null,"asdf"),_react2.default.createElement("div",null,"asdf"))}}]),PopupWrap}(_react2.default.Component);exports.default=PopupWrap}}]);