(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{89:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_react2=_interopRequireDefault(__webpack_require__(0)),_search2=_interopRequireDefault(__webpack_require__(19)),_page2=_interopRequireDefault(__webpack_require__(48)),_fake_search2=_interopRequireDefault(__webpack_require__(49)),_header2=_interopRequireDefault(__webpack_require__(46));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}var SearchWrap=function(_React$Component){function SearchWrap(){var _ref,_temp,_this;_classCallCheck(this,SearchWrap);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _temp=_this=_possibleConstructorReturn(this,(_ref=SearchWrap.__proto__||Object.getPrototypeOf(SearchWrap)).call.apply(_ref,[this].concat(args))),_this.state={value:""},_possibleConstructorReturn(_this,_temp)}return _inherits(SearchWrap,_React$Component),_createClass(SearchWrap,[{key:"render",value:function(){var _this2=this;return _react2.default.createElement("div",null,_react2.default.createElement("h1",null,"Search"),_react2.default.createElement("h3",null,"search带取消按钮（点Header的搜索按钮）"),_react2.default.createElement("h3",null,"search带搜索按钮 （一般一个路由承载的搜索页）"),_react2.default.createElement(_search2.default,{placeholder:"在站内搜索",value:this.state.value,onChange:function(value){return _this2.setState({value:value})},onSearch:function(){return console.log("搜索拉")}}),_react2.default.createElement("h3",null,"FakeSearch 作为搜索入口"),_react2.default.createElement(_fake_search2.default,{placeholder:"站内搜索",className:"text-center",onClick:function(){}}),_react2.default.createElement(_fake_search2.default,{center:!0}),_react2.default.createElement(_fake_search2.default,{light:!0,placeholder:""}))}}]),SearchWrap}(_react2.default.Component),Com=function(_React$Component2){function Com(){var _ref2,_temp2,_this3;_classCallCheck(this,Com);for(var _len2=arguments.length,args=Array(_len2),_key2=0;_key2<_len2;_key2++)args[_key2]=arguments[_key2];return _temp2=_this3=_possibleConstructorReturn(this,(_ref2=Com.__proto__||Object.getPrototypeOf(Com)).call.apply(_ref2,[this].concat(args))),_this3.state={value:"",searchValue:"",active:!1},_possibleConstructorReturn(_this3,_temp2)}return _inherits(Com,_React$Component2),_createClass(Com,[{key:"render",value:function(){var _this4=this;return _react2.default.createElement(_page2.default,{header:_react2.default.createElement(_header2.default,{title:"demo",right:_react2.default.createElement("i",{className:"weui-icon-search text-16 padding-lr-4 text"}),onClick:function(){_this4.setState({active:!0,value:"",searchValue:""})}}),active:this.state.active,value:this.state.value,onChange:function(value){return _this4.setState({value:value})},onSearch:function(){console.log("搜索拉"),_this4.setState({searchValue:_this4.state.value})},onCancel:function(){console.log(_this4.state.searchValue),_this4.setState({active:!1,value:_this4.state.searchValue})}},_react2.default.createElement("div",null,"输入框值:",this.state.value,_react2.default.createElement("br",null),"搜索值:",this.state.searchValue,_react2.default.createElement("br",null),"历史搜索:",_react2.default.createElement("button",{className:"weui-btn weui-btn_mini",onClick:function(){_this4.setState({active:!0,value:"青菜",searchValue:"青菜"})}},"青菜"),_react2.default.createElement("button",{className:"weui-btn weui-btn_mini",onClick:function(){_this4.setState({active:!0,value:"黄瓜",searchValue:"黄瓜"})}},"黄瓜")),_react2.default.createElement("hr",null),_react2.default.createElement(SearchWrap,null))}}]),Com}(_react2.default.Component);exports.default=Com}}]);