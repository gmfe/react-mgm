(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{101:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_react2=_interopRequireDefault(__webpack_require__(0)),_tooltip2=_interopRequireDefault(__webpack_require__(56)),_flex2=_interopRequireDefault(__webpack_require__(4)),_trigger2=_interopRequireDefault(__webpack_require__(41));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var TooltipWrap=function(_React$Component){function TooltipWrap(props){!function(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,TooltipWrap);var _this=function(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}(this,(TooltipWrap.__proto__||Object.getPrototypeOf(TooltipWrap)).call(this,props));return _this.state={},_this.renderPopup=_this.renderPopup.bind(_this),_this}return function(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}(TooltipWrap,_React$Component),_createClass(TooltipWrap,[{key:"renderPopup",value:function(){return _react2.default.createElement(_tooltip2.default,{placement:"bottomRight",style:{width:"250px"}},"这是一个tooltip bottomRight (default)")}},{key:"render",value:function(){return _react2.default.createElement(_flex2.default,{column:!0},_react2.default.createElement(_flex2.default,{style:{margin:"5px 15px"}},"Tooltip需要配合Trigger使用，注意Tooltip的'topLeft', 'topRight', 'bottomLeft', 'bottomRight'合Trigger的'right'、'top'的搭配"),_react2.default.createElement(_flex2.default,{justifyEnd:!0,style:{margin:"30px 20px"}},_react2.default.createElement(_trigger2.default,{component:_react2.default.createElement("div",null),right:!0,adjustX:20,popup:this.renderPopup()},_react2.default.createElement("button",{className:"weui-btn weui-btn_primary weui-btn_mini"},"bottomRight (default)"))),_react2.default.createElement(_flex2.default,{style:{margin:"30px 20px"}},_react2.default.createElement(_trigger2.default,{component:_react2.default.createElement("div",null),timeout:2e3,popup:_react2.default.createElement(_tooltip2.default,{placement:"bottomLeft",style:{width:"250px"}},"这是一个tooltip bottomLeft")},_react2.default.createElement("button",{className:"weui-btn weui-btn_primary weui-btn_mini"},"bottomLeft with timeout"))),_react2.default.createElement(_flex2.default,{justifyEnd:!0,style:{margin:"30px 20px"}},_react2.default.createElement(_trigger2.default,{component:_react2.default.createElement("div",null),top:!0,right:!0,adjustX:20,mask:!0,popup:_react2.default.createElement(_tooltip2.default,{placement:"topRight",style:{width:"250px"}},"这是一个tooltip topRight")},_react2.default.createElement("button",{className:"weui-btn weui-btn_primary weui-btn_mini"},"topRight with mask"))),_react2.default.createElement(_flex2.default,{style:{margin:"30px 20px"}},_react2.default.createElement(_trigger2.default,{component:_react2.default.createElement("div",null),top:!0,adjustX:30,mask:!0,popup:_react2.default.createElement(_tooltip2.default,{placement:"topLeft",style:{width:"250px"}},"这是一个tooltip topLeft")},_react2.default.createElement("button",{className:"weui-btn weui-btn_primary weui-btn_mini"},"topLeft with mask"))),_react2.default.createElement(_flex2.default,{style:{margin:"30px 20px"}},_react2.default.createElement(_trigger2.default,{component:_react2.default.createElement("div",null),type:"hover",top:!0,mask:!0,popup:_react2.default.createElement(_tooltip2.default,{placement:"topLeft",style:{width:"250px"}},"这是一个tooltip topLeft (hover)")},_react2.default.createElement("button",{className:"weui-btn weui-btn_primary weui-btn_mini"},"topLeft (hover)"))))}}]),TooltipWrap}(_react2.default.Component);exports.default=TooltipWrap}}]);