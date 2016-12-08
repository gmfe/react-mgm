(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("classnames"), require("underscore"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "classnames", "underscore", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["ReactMGM"] = factory(require("react"), require("classnames"), require("underscore"), require("react-dom"));
	else
		root["ReactMGM"] = factory(root["react"], root["classnames"], root["underscore"], root["react-dom"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_5__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _flex = __webpack_require__(6);

	var _flex2 = _interopRequireDefault(_flex);

	var _gmUtil = __webpack_require__(8);

	var _gmUtil2 = _interopRequireDefault(_gmUtil);

	var _textarea = __webpack_require__(36);

	var _textarea2 = _interopRequireDefault(_textarea);

	var _nprogress = __webpack_require__(27);

	var _nprogress2 = _interopRequireDefault(_nprogress);

	var _mask = __webpack_require__(7);

	var _mask2 = _interopRequireDefault(_mask);

	var _toast = __webpack_require__(37);

	var _toast2 = _interopRequireDefault(_toast);

	var _loading = __webpack_require__(9);

	var _loading2 = _interopRequireDefault(_loading);

	var _page = __webpack_require__(28);

	var _page2 = _interopRequireDefault(_page);

	var _infinite = __webpack_require__(25);

	var _infinite2 = _interopRequireDefault(_infinite);

	var _header = __webpack_require__(24);

	var _header2 = _interopRequireDefault(_header);

	var _storage = __webpack_require__(35);

	var _storage2 = _interopRequireDefault(_storage);

	var _slider = __webpack_require__(33);

	var _slider2 = _interopRequireDefault(_slider);

	var _popup = __webpack_require__(29);

	var _popup2 = _interopRequireDefault(_popup);

	var _search = __webpack_require__(31);

	var _search2 = _interopRequireDefault(_search);

	var _square = __webpack_require__(34);

	var _square2 = _interopRequireDefault(_square);

	var _lazy = __webpack_require__(26);

	var _lazy2 = _interopRequireDefault(_lazy);

	var _dialog = __webpack_require__(22);

	var _dialog2 = _interopRequireDefault(_dialog);

	var _scrollInto = __webpack_require__(30);

	var _scrollInto2 = _interopRequireDefault(_scrollInto);

	var _cursor = __webpack_require__(21);

	var _cursor2 = _interopRequireDefault(_cursor);

	var _select = __webpack_require__(32);

	var _select2 = _interopRequireDefault(_select);

	var _droper = __webpack_require__(23);

	var _droper2 = _interopRequireDefault(_droper);

	__webpack_require__(38);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ReactGMM = {
	    Flex: _flex2.default,
	    Infinite: _infinite2.default,
	    Textarea: _textarea2.default,
	    NProgress: _nprogress2.default,
	    Mask: _mask2.default,
	    Toast: _toast2.default,
	    Loading: _loading2.default,
	    Page: _page2.default,
	    Header: _header2.default,
	    Storage: _storage2.default,
	    Slider: _slider2.default,
	    Popup: _popup2.default,
	    SearchBar: _search2.default,
	    Square: _square2.default,
	    LazyImg: _lazy2.default,
	    Dialog: _dialog2.default,
	    ScrollIntoView: _scrollInto2.default,
	    CursorFix: _cursor2.default,
	    Select: _select2.default,
	    Droper: _droper2.default,
	    Util: _gmUtil2.default
	};

	module.exports = ReactGMM;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _shallowCompare = __webpack_require__(20);

	var _shallowCompare2 = _interopRequireDefault(_shallowCompare);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function shouldComponentUpdate(nextProps, nextState) {
	    return (0, _shallowCompare2.default)(this, nextProps, nextState);
	}

	function pureRenderDecorator(component) {
	    component.prototype.shouldComponentUpdate = shouldComponentUpdate;
	}

	exports.default = pureRenderDecorator;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(2);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _underscore = __webpack_require__(3);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _pureRender = __webpack_require__(4);

	var _pureRender2 = _interopRequireDefault(_pureRender);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Flex = (0, _pureRender2.default)(_class = function (_React$Component) {
	    _inherits(Flex, _React$Component);

	    function Flex() {
	        _classCallCheck(this, Flex);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Flex).apply(this, arguments));
	    }

	    _createClass(Flex, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var flex = _props.flex;
	            var auto = _props.auto;
	            var none = _props.none;
	            var width = _props.width;
	            var height = _props.height;
	            var row = _props.row;
	            var column = _props.column;
	            var wrap = _props.wrap;
	            var nowrap = _props.nowrap;
	            var justifyStart = _props.justifyStart;
	            var justifyEnd = _props.justifyEnd;
	            var justifyCenter = _props.justifyCenter;
	            var justifyBetween = _props.justifyBetween;
	            var justifyAround = _props.justifyAround;
	            var alignStart = _props.alignStart;
	            var alignEnd = _props.alignEnd;
	            var alignCenter = _props.alignCenter;
	            var alignBaseline = _props.alignBaseline;
	            var alignStretch = _props.alignStretch;
	            var className = _props.className;
	            var style = _props.style;

	            var rest = _objectWithoutProperties(_props, ['flex', 'auto', 'none', 'width', 'height', 'row', 'column', 'wrap', 'nowrap', 'justifyStart', 'justifyEnd', 'justifyCenter', 'justifyBetween', 'justifyAround', 'alignStart', 'alignEnd', 'alignCenter', 'alignBaseline', 'alignStretch', 'className', 'style']);

	            var cn = (0, _classnames2.default)({
	                'flex': true,

	                'flex-flex': flex,
	                'flex-auto': auto,
	                'flex-none': none || width || height,

	                'flex-row': row,
	                'flex-column': column,

	                'flex-wrap': wrap,
	                'flex-nowrap': nowrap,

	                'flex-justify-start': justifyStart,
	                'flex-justify-end': justifyEnd,
	                'flex-justify-center': justifyCenter,
	                'flex-justify-between': justifyBetween,
	                'flex-justify-around': justifyAround,

	                'flex-align-start': alignStart,
	                'flex-align-end': alignEnd,
	                'flex-align-center': alignCenter,
	                'flex-align-baseline': alignBaseline,
	                'flex-align-stretch': alignStretch
	            }, className);

	            var s = _underscore2.default.extend({}, style);
	            // TODO 有待商榷，WebkitFlex 是否会生效？
	            if (flex) {
	                s.flex = typeof flex === 'boolean' ? 1 : flex;
	                s.WebkitFlex = typeof flex === 'boolean' ? 1 : flex;
	            }
	            if (height) {
	                s.height = height;
	            }
	            if (width) {
	                s.width = width;
	            }

	            return _react2.default.createElement(
	                'div',
	                _extends({}, rest, { className: cn, style: s }),
	                this.props.children
	            );
	        }
	    }]);

	    return Flex;
	}(_react2.default.Component)) || _class;

	Flex.propTypes = {
	    flex: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.bool]),
	    auto: _react.PropTypes.bool,
	    none: _react.PropTypes.bool,
	    width: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
	    height: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
	    row: _react.PropTypes.bool,
	    column: _react.PropTypes.bool,
	    wrap: _react.PropTypes.bool,
	    nowrap: _react.PropTypes.bool,
	    justifyStart: _react.PropTypes.bool,
	    justifyEnd: _react.PropTypes.bool,
	    justifyCenter: _react.PropTypes.bool,
	    justifyBetween: _react.PropTypes.bool,
	    justifyAround: _react.PropTypes.bool,
	    alignStart: _react.PropTypes.bool,
	    alignEnd: _react.PropTypes.bool,
	    alignCenter: _react.PropTypes.bool,
	    alignBaseline: _react.PropTypes.bool,
	    alignStretch: _react.PropTypes.bool
	};

	exports.default = Flex;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(2);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _pureRender = __webpack_require__(4);

	var _pureRender2 = _interopRequireDefault(_pureRender);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Mask = (0, _pureRender2.default)(_class = function (_React$Component) {
	    _inherits(Mask, _React$Component);

	    function Mask() {
	        _classCallCheck(this, Mask);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Mask).apply(this, arguments));
	    }

	    _createClass(Mask, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var className = _props.className;
	            var style = _props.style;
	            var transparent = _props.transparent;
	            var show = _props.show;
	            var opacity = _props.opacity;

	            var rest = _objectWithoutProperties(_props, ['className', 'style', 'transparent', 'show', 'opacity']);

	            var cn = (0, _classnames2.default)({
	                'mask': !transparent,
	                'mask-transparent': transparent
	            }, className);

	            var s = Object.assign({
	                display: show ? 'block' : 'none',
	                opacity: opacity
	            }, style);

	            return _react2.default.createElement('div', _extends({}, rest, { className: cn, style: s }));
	        }
	    }]);

	    return Mask;
	}(_react2.default.Component)) || _class;

	Mask.defaultProps = {
	    transparent: false,
	    show: false
	};

	Mask.propTypes = {
	    transparent: _react.PropTypes.bool,
	    show: _react.PropTypes.bool,
	    opacity: _react.PropTypes.number
	};

	exports.default = Mask;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _Request = __webpack_require__(14);

	var _Request2 = _interopRequireDefault(_Request);

	var _RequestInterceptor = __webpack_require__(10);

	var _RequestInterceptor2 = _interopRequireDefault(_RequestInterceptor);

	var _param = __webpack_require__(12);

	var _param2 = _interopRequireDefault(_param);

	var _format = __webpack_require__(11);

	var _format2 = _interopRequireDefault(_format);

	var _isElementInViewport = __webpack_require__(18);

	var _isElementInViewport2 = _interopRequireDefault(_isElementInViewport);

	var _isElementOverViewport = __webpack_require__(19);

	var _isElementOverViewport2 = _interopRequireDefault(_isElementOverViewport);

	var _is = __webpack_require__(17);

	var _is2 = _interopRequireDefault(_is);

	var _contains = __webpack_require__(15);

	var _contains2 = _interopRequireDefault(_contains);

	var _createChainedFunction = __webpack_require__(16);

	var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);

	module.exports = {
	    Request: _Request2['default'],
	    RequestInterceptor: _RequestInterceptor2['default'],
	    format: _format2['default'],
	    param: _param2['default'],
	    isElementInViewport: _isElementInViewport2['default'],
	    isElementOverViewport: _isElementOverViewport2['default'],
	    is: _is2['default'],
	    contains: _contains2['default'],
	    createChainedFunction: _createChainedFunction2['default']
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(2);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _pureRender = __webpack_require__(4);

	var _pureRender2 = _interopRequireDefault(_pureRender);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Loading = (0, _pureRender2.default)(_class = function (_React$Component) {
	    _inherits(Loading, _React$Component);

	    function Loading() {
	        _classCallCheck(this, Loading);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Loading).apply(this, arguments));
	    }

	    _createClass(Loading, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var className = _props.className;

	            var rest = _objectWithoutProperties(_props, ['className']);

	            return _react2.default.createElement(
	                'div',
	                _extends({}, rest, { className: (0, _classnames2.default)("loading", className) }),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'loading-inner' },
	                    _react2.default.createElement('div', { className: 'weui_loading_leaf weui_loading_leaf_0' }),
	                    _react2.default.createElement('div', { className: 'weui_loading_leaf weui_loading_leaf_1' }),
	                    _react2.default.createElement('div', { className: 'weui_loading_leaf weui_loading_leaf_2' }),
	                    _react2.default.createElement('div', { className: 'weui_loading_leaf weui_loading_leaf_3' }),
	                    _react2.default.createElement('div', { className: 'weui_loading_leaf weui_loading_leaf_4' }),
	                    _react2.default.createElement('div', { className: 'weui_loading_leaf weui_loading_leaf_5' }),
	                    _react2.default.createElement('div', { className: 'weui_loading_leaf weui_loading_leaf_6' }),
	                    _react2.default.createElement('div', { className: 'weui_loading_leaf weui_loading_leaf_7' }),
	                    _react2.default.createElement('div', { className: 'weui_loading_leaf weui_loading_leaf_8' }),
	                    _react2.default.createElement('div', { className: 'weui_loading_leaf weui_loading_leaf_9' }),
	                    _react2.default.createElement('div', { className: 'weui_loading_leaf weui_loading_leaf_10' }),
	                    _react2.default.createElement('div', { className: 'weui_loading_leaf weui_loading_leaf_11' })
	                )
	            );
	        }
	    }]);

	    return Loading;
	}(_react2.default.Component)) || _class;

	exports.default = Loading;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _underscore = __webpack_require__(3);

	var _underscore2 = _interopRequireDefault(_underscore);

	var RequestInterceptor = function () {
	    var interceptors = []; // [{request: function(){}, response: function(){}, responseError: function(){}}]
	    var id = 0;

	    return {
	        add: function add(interceptor) {
	            interceptor.__id = id++;
	            interceptors.push(interceptor);
	            return interceptor.__id;
	        },
	        remove: function remove(interceptorId) {
	            interceptors = _underscore2['default'].filter(interceptors, function (value) {
	                return value.__id !== interceptorId;
	            });
	        },

	        // 私有方法,谁用谁死
	        interceptor: {
	            request: function request(config) {
	                var promise = Promise.resolve(config);
	                _underscore2['default'].each(interceptors, function (value) {
	                    if (value.request) {
	                        promise = promise.then(function (_config) {
	                            // 如果request不按规范来,啥也不做. 则默认放回 config
	                            return value.request(_config) || config;
	                        });
	                    }
	                });

	                return promise;
	            },
	            response: function response(json, config) {
	                var promise = Promise.resolve(json);
	                _underscore2['default'].each(interceptors, function (value) {
	                    if (value.response) {
	                        promise = promise.then(function (json) {
	                            // 如果response不按规范来,啥也不做. 则默认放回json
	                            return value.response(json, config) || json;
	                        });
	                    }
	                });
	                return promise;
	            },
	            responseError: function responseError(reason, config) {
	                var promise = Promise.reject(reason);
	                _underscore2['default'].each(interceptors, function (value) {
	                    if (value.responseError) {
	                        promise = promise['catch'](function (reason) {
	                            // 如果responseError不按规范来,啥也不做. reason
	                            return Promise.reject(value.responseError(reason, config) || reason);
	                        });
	                    }
	                });

	                return promise;
	            }
	        }
	    };
	}();

	exports['default'] = RequestInterceptor;
	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _underscore = __webpack_require__(3);

	var _underscore2 = _interopRequireDefault(_underscore);

	var format = function format(str, data) {
	    var result = str;
	    if (arguments.length < 2) {
	        return result;
	    }

	    result = result.replace(/\{([\d\w\.]+)\}/g, function (key) {
	        var keys = arguments[1].split('.');
	        var r = null;
	        _underscore2['default'].each(keys, function (value, index) {
	            if (index) {
	                r = r[value];
	            } else {
	                r = data[value];
	            }
	        });
	        return r;
	    });
	    return result;
	};

	exports['default'] = format;
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _underscore = __webpack_require__(3);

	var _underscore2 = _interopRequireDefault(_underscore);

	var param = function param(obj) {
	    // encodeURIComponent
	    return _underscore2['default'].map(obj, function (v, k) {
	        return [encodeURIComponent(k), '=', encodeURIComponent(v)].join('');
	    }).join('&').replace(/%20/g, "+");
	};

	exports['default'] = param;
	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 * 
	 */

	/*eslint-disable no-self-compare */

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	/**
	 * inlined Object.is polyfill to avoid requiring consumers ship their own
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	 */
	function is(x, y) {
	  // SameValue algorithm
	  if (x === y) {
	    // Steps 1-5, 7-10
	    // Steps 6.b-6.e: +0 != -0
	    return x !== 0 || 1 / x === 1 / y;
	  } else {
	    // Step 6.a: NaN == NaN
	    return x !== x && y !== y;
	  }
	}

	/**
	 * Performs equality by iterating through keys on an object and returning false
	 * when any key has values which are not strictly equal between the arguments.
	 * Returns true when the values of all keys are strictly equal.
	 */
	function shallowEqual(objA, objB) {
	  if (is(objA, objB)) {
	    return true;
	  }

	  if ((typeof objA === 'undefined' ? 'undefined' : _typeof(objA)) !== 'object' || objA === null || (typeof objB === 'undefined' ? 'undefined' : _typeof(objB)) !== 'object' || objB === null) {
	    return false;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
	      return false;
	    }
	  }

	  return true;
	}

	module.exports = shallowEqual;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _paramJs = __webpack_require__(12);

	var _paramJs2 = _interopRequireDefault(_paramJs);

	var _formatJs = __webpack_require__(11);

	var _formatJs2 = _interopRequireDefault(_formatJs);

	var _underscore = __webpack_require__(3);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _RequestInterceptor = __webpack_require__(10);

	var _RequestInterceptor2 = _interopRequireDefault(_RequestInterceptor);

	var setPromiseTimeout = function setPromiseTimeout(promise, ms) {
	    if (ms === false) {
	        return promise;
	    }
	    return new Promise(function (resolve, reject) {
	        setTimeout(function () {
	            reject('连接超时，请稍后重试');
	        }, ms);
	        promise.then(resolve, reject);
	    });
	};

	var processRequest = function processRequest(config) {
	    return _RequestInterceptor2['default'].interceptor.request(config);
	};

	var processResponse = function processResponse(promise, url, sucCode, config) {
	    var color = 'color: #8a6d3b;';

	    return setPromiseTimeout(promise, config.options.timeout).then(function (res) {
	        if (res.ok) {
	            var ct = res.headers.get('content-type');
	            // 后台可能会有登录拦截，返回登录页面
	            if (ct.indexOf('text/html') > -1) {
	                return res.text().then(function (html) {
	                    if (html.indexOf('title>登陆</title') > -1) {
	                        return Promise.reject('请登录!');
	                    }
	                    return Promise.reject('未知错误！！！！！');
	                });
	            } else {
	                return res.json();
	            }
	        }
	        return Promise.reject((0, _formatJs2['default'])('服务器错误 {status} {statusText}', res));
	    }).then(function (json) {
	        return _RequestInterceptor2['default'].interceptor.response(json, config);
	    }, function (reason) {
	        return Promise.reject(_RequestInterceptor2['default'].interceptor.responseError(reason, config));
	    }).then(function (json) {
	        if (sucCode.indexOf(json.code) > -1) {
	            return json;
	        } else {
	            console.log('%c*** Request url: %s、code: %s、msg: %s', color, url, json.code, json.msg);
	            return Promise.reject(json.msg || '未知错误');
	        }
	    })['catch'](function (reason) {
	        // reason 有点复杂，各种实现，碰到一个解决一个吧
	        if (toString.call(reason) === '[object Promise]') {
	            return reason['catch'](function (rea) {
	                console.error('%c*** Request catch %s', color, rea);
	                // reason 是个对象。目前先给字符串。吧。后续有需要在扩展
	                return Promise.reject('' + rea);
	            });
	        } else {
	            console.error('%c*** Request catch %s', color, reason);
	            // reason 是个对象。目前先给字符串。吧。后续有需要在扩展
	            return Promise.reject('' + reason);
	        }
	    });
	};

	var Request = function Request(url, options) {
	    this._data = {};
	    this.url = url;
	    this.sucCode = [0];
	    this.options = Object.assign({
	        timeout: 10000, // number or false
	        method: 'get',
	        headers: {
	            'Accept': 'application/json'
	        },
	        credentials: 'include' // 需要设置才能获取cookie
	    }, options);
	};
	Request.prototype = {
	    code: function code(codes) {
	        if (_underscore2['default'].isArray(codes)) {
	            this.sucCode = this.sucCode.concat(codes);
	        } else {
	            this.sucCode.push(codes);
	        }
	        return this;
	    },
	    timeout: function timeout(_timeout) {
	        Object.assign(this.options, {
	            timeout: _timeout
	        });
	        return this;
	    },
	    data: function data(_data) {
	        // 过滤null  undefined 只Object 类型。
	        this._data = Object.assign({}, _data);
	        if (toString.call(this._data) === '[object Object]') {
	            this._data = _underscore2['default'].pick(this._data, function (value) {
	                return value !== null && value !== undefined;
	            });
	        }
	        return this;
	    },
	    json: function json(_data) {
	        this._data = JSON.stringify(_data);
	        return this;
	    },
	    _getConfig: function _getConfig() {
	        var t = this;
	        return {
	            url: t.url,
	            data: t._data,
	            sucCode: t.sucCode,
	            options: t.options
	        };
	    },
	    _setConfig: function _setConfig(d) {
	        var t = this;
	        t.url = d.url;
	        t._data = d.data;
	        t.sucCode = d.sucCode;
	        t.options = d.options;
	    },
	    _beforeRequest: function _beforeRequest() {
	        var t = this;
	        return processRequest(t._getConfig()).then(t._setConfig.bind(t));
	    },
	    get: function get() {
	        var t = this;

	        return t._beforeRequest().then(function () {
	            var p = (0, _paramJs2['default'])(t._data);
	            var newUrl = t.url + (t.url.indexOf('?') > -1 ? '&' : '?') + p;
	            return processResponse(fetch(newUrl, t.options), t.url, t.sucCode, t._getConfig());
	        });
	    },
	    post: function post() {
	        var t = this;
	        var data = t._data;
	        var body;
	        t.options.method = 'post';

	        return t._beforeRequest().then(function () {
	            // 兼容传[json string] [formData] 的情况,暂时这两种. 其他的看情况
	            if (toString.call(data) === '[object Object]') {
	                body = new FormData();
	                for (var e in data) {
	                    body.append(e, data[e]);
	                }
	            } else {
	                body = data;
	            }
	            t.options.body = body;
	            return processResponse(fetch(t.url, t.options), t.url, t.sucCode, t._getConfig());
	        });
	    }
	};

	var RequestFactory = function RequestFactory(url, options) {
	    return new Request(url, options);
	};

	exports['default'] = RequestFactory;
	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = contains;

	function contains(root, n) {
	    var node = n;
	    while (node) {
	        if (node === root) {
	            return true;
	        }
	        node = node.parentNode;
	    }

	    return false;
	}

	;
	module.exports = exports["default"];

/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = createChainedFunction;

	function createChainedFunction() {
	    var args = arguments;
	    return function chainedFunction() {
	        for (var i = 0; i < args.length; i++) {
	            if (args[i] && args[i].apply) {
	                args[i].apply(this, arguments);
	            }
	        }
	    };
	}

	module.exports = exports["default"];

/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var is = {};

	is.weixin = function () {
	    return (/MicroMessenger/i.test(navigator.userAgent)
	    );
	};

	exports["default"] = is;
	module.exports = exports["default"];

/***/ },
/* 18 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports["default"] = function (dom) {
	    var rect = dom.getBoundingClientRect();
	    return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
	};

	module.exports = exports["default"];

/***/ },
/* 19 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports["default"] = function (dom) {
	    var rect = dom.getBoundingClientRect();
	    return rect.bottom > 0 && rect.right > 0 && rect.left < (window.innerWidth || document.documentElement.clientWidth) && rect.top < (window.innerHeight || document.documentElement.clientHeight);
	};

	module.exports = exports["default"];

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	* @providesModule shallowCompare
	*/

	'use strict';

	var shallowEqual = __webpack_require__(13);

	/**
	 * Does a shallow comparison for props and state.
	 * See ReactComponentWithPureRenderMixin
	 * See also https://facebook.github.io/react/docs/shallow-compare.html
	 */
	function shallowCompare(instance, nextProps, nextState) {
	  return !shallowEqual(instance.props, nextProps) || !shallowEqual(instance.state, nextState);
	}

	module.exports = shallowCompare;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CursorFix = function (_React$Component) {
	    _inherits(CursorFix, _React$Component);

	    function CursorFix(props) {
	        _classCallCheck(this, CursorFix);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CursorFix).call(this, props));

	        _this.handleClick = _this.handleClick.bind(_this);
	        return _this;
	    }

	    _createClass(CursorFix, [{
	        key: 'render',
	        value: function render() {
	            var props = Object.assign({}, this.props, {
	                onClick: this.handleClick
	            });
	            delete props.component;
	            return _react2.default.createElement(this.props.component, props);
	        }
	    }, {
	        key: 'handleClick',
	        value: function handleClick(event) {
	            // 移动的的光标容易飘。click perventDefault 然后 focus 下可解决。 别问我为什么。
	            event.preventDefault();
	            event.target.focus();
	            this.props.onClick && this.props.onClick(event);
	        }
	    }]);

	    return CursorFix;
	}(_react2.default.Component);

	CursorFix.propTypes = {
	    component: _react.PropTypes.string.isRequired
	};

	exports.default = CursorFix;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _class2, _temp;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(5);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _classnames = __webpack_require__(2);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _pureRender = __webpack_require__(4);

	var _pureRender2 = _interopRequireDefault(_pureRender);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var dialogsContainerId = '_mgm_dialogs_container' + (Math.random() + '').slice(2);
	var dialogsContainer = document.getElementById(dialogsContainerId);

	if (!dialogsContainer) {
	    dialogsContainer = document.createElement('div');
	    dialogsContainer.className = 'mgm-dialogs';
	    dialogsContainer.id = dialogsContainerId;
	    document.body.appendChild(dialogsContainer);
	}

	var DialogStatics = {};
	DialogStatics = {
	    dialog: function dialog(options) {
	        return new Promise(function (resolve, reject) {
	            var div = document.createElement('div');
	            dialogsContainer.appendChild(div);
	            options.title = options.title || '提示';
	            options.show = true;
	            options.onConfirm = function () {
	                dialogsContainer.removeChild(div);
	                resolve();
	            };
	            options.onCancel = function () {
	                dialogsContainer.removeChild(div);
	                reject();
	            };
	            _reactDom2.default.render(_react2.default.createElement(Dialog, options), div);
	        });
	    },
	    alert: function alert(options) {
	        if (typeof options === 'string') {
	            options = {
	                children: options
	            };
	        }
	        options.alert = true;
	        return DialogStatics.dialog(options);
	    },
	    confirm: function confirm(options) {
	        if (typeof options === 'string') {
	            options = {
	                children: options
	            };
	        }
	        options.confirm = true;
	        return DialogStatics.dialog(options);
	    }
	};

	var Dialog = (0, _pureRender2.default)(_class = (_temp = _class2 = function (_React$Component) {
	    _inherits(Dialog, _React$Component);

	    function Dialog(props) {
	        _classCallCheck(this, Dialog);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Dialog).call(this, props));

	        _this.handleCancel = _this.handleCancel.bind(_this);
	        _this.handleConfirm = _this.handleConfirm.bind(_this);
	        return _this;
	    }

	    _createClass(Dialog, [{
	        key: 'handleConfirm',
	        value: function handleConfirm(e) {
	            e.preventDefault();
	            this.props.onConfirm();
	        }
	    }, {
	        key: 'handleCancel',
	        value: function handleCancel(e) {
	            e.preventDefault();
	            this.props.onCancel && this.props.onCancel();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var thisProps = this.props;
	            var _thisProps$btnText = thisProps.btnText;
	            var btnText = _thisProps$btnText === undefined ? {} : _thisProps$btnText;

	            var cls = (0, _classnames2.default)({
	                'weui_dialog_confirm': thisProps.confirm,
	                'weui_dialog_alert': thisProps.alert
	            });

	            if (!thisProps.show) {
	                return null;
	            }

	            return _react2.default.createElement(
	                'div',
	                { className: cls, style: { display: 'block' } },
	                _react2.default.createElement('div', { className: 'weui_mask' }),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'weui_dialog' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'weui_dialog_hd' },
	                        _react2.default.createElement(
	                            'strong',
	                            { className: 'weui_dialog_title' },
	                            thisProps.title
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'weui_dialog_bd' },
	                        thisProps.children
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'weui_dialog_ft' },
	                        thisProps.confirm ? _react2.default.createElement(
	                            'a',
	                            { href: 'javascript:;', className: 'weui_btn_dialog default',
	                                onClick: this.handleCancel },
	                            btnText.cancel ? btnText.cancel : '取消'
	                        ) : null,
	                        _react2.default.createElement(
	                            'a',
	                            { href: 'javascript:;', className: 'weui_btn_dialog primary',
	                                onClick: this.handleConfirm },
	                            btnText.confirm ? btnText.confirm : '确定'
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return Dialog;
	}(_react2.default.Component), _class2.alert = DialogStatics.alert, _class2.confirm = DialogStatics.confirm, _temp)) || _class;

	Dialog.propTypes = {
	    show: _react.PropTypes.bool,
	    onConfirm: _react.PropTypes.func.isRequired,
	    onCancel: _react.PropTypes.func,
	    title: _react.PropTypes.string.isRequired,
	    alert: _react.PropTypes.bool,
	    confirm: _react.PropTypes.bool,
	    btnText: _react.PropTypes.object
	};

	exports.default = Dialog;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _gmUtil = __webpack_require__(8);

	var _gmUtil2 = _interopRequireDefault(_gmUtil);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Droper = function (_React$Component) {
	    _inherits(Droper, _React$Component);

	    function Droper(props, context) {
	        _classCallCheck(this, Droper);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Droper).call(this, props, context));

	        _this.onClick = _this.onClick.bind(_this);
	        _this.onDragEnter = _this.onDragEnter.bind(_this);
	        _this.onDragLeave = _this.onDragLeave.bind(_this);
	        _this.onDragOver = _this.onDragOver.bind(_this);
	        _this.onDrop = _this.onDrop.bind(_this);

	        _this.state = {
	            isDragActive: false,
	            isWX: _gmUtil2.default.is.weixin()
	        };
	        return _this;
	    }

	    _createClass(Droper, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.enterCounter = 0;
	        }
	    }, {
	        key: 'accept',
	        value: function accept(file, acceptedFiles) {
	            if (file && acceptedFiles) {
	                var _ret = function () {
	                    var acceptedFilesArray = acceptedFiles.split(',');
	                    var fileName = file.name || '';
	                    var mimeType = file.type || '';
	                    var baseMimeType = mimeType.replace(/\/.*$/, '');

	                    return {
	                        v: acceptedFilesArray.some(function (type) {
	                            var validType = type.trim();
	                            if (validType.charAt(0) === '.') {
	                                return fileName.toLowerCase().endsWith(validType.toLowerCase());
	                            } else if (/\/\*$/.test(validType)) {
	                                // This is something like a image/* mime type
	                                return baseMimeType === validType.replace(/\/.*$/, '');
	                            }
	                            return mimeType === validType;
	                        })
	                    };
	                }();

	                if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	            }
	            return true;
	        }
	    }, {
	        key: 'allFilesAccepted',
	        value: function allFilesAccepted(files) {
	            var _this2 = this;

	            return files.every(function (file) {
	                return _this2.accept(file, _this2.props.accept);
	            });
	        }
	    }, {
	        key: 'onDragEnter',
	        value: function onDragEnter(e) {
	            e.preventDefault();

	            ++this.enterCounter;

	            // This is tricky. During the drag even the dataTransfer.files is null
	            // But Chrome implements some drag store, which is accesible via dataTransfer.items
	            var dataTransferItems = e.dataTransfer && e.dataTransfer.items ? e.dataTransfer.items : [];

	            // Now we need to convert the DataTransferList to Array
	            var itemsArray = Array.prototype.slice.call(dataTransferItems);
	            var allFilesAccepted = this.allFilesAccepted(itemsArray);

	            this.setState({
	                isDragActive: allFilesAccepted,
	                isDragReject: !allFilesAccepted
	            });

	            if (this.props.onDragEnter) {
	                this.props.onDragEnter(e);
	            }
	        }
	    }, {
	        key: 'onDragOver',
	        value: function onDragOver(e) {
	            e.preventDefault();
	        }
	    }, {
	        key: 'onDragLeave',
	        value: function onDragLeave(e) {
	            e.preventDefault();

	            if (--this.enterCounter > 0) {
	                return;
	            }

	            this.setState({
	                isDragActive: false,
	                isDragReject: false
	            });

	            if (this.props.onDragLeave) {
	                this.props.onDragLeave(e);
	            }
	        }
	    }, {
	        key: 'onDrop',
	        value: function onDrop(e) {
	            e.preventDefault();

	            // Reset the counter along with the drag on a drop.
	            this.enterCounter = 0;

	            this.setState({
	                isDragActive: false,
	                isDragReject: false
	            });

	            var droppedFiles = e.dataTransfer ? e.dataTransfer.files : e.target.files;
	            var max = this.props.multiple ? droppedFiles.length : 1;
	            var files = [];

	            for (var i = 0; i < max; i++) {
	                var file = droppedFiles[i];
	                file.preview = window.URL.createObjectURL(file);
	                files.push(file);
	            }

	            if (this.props.onDrop) {
	                this.props.onDrop(files, e);
	            }

	            if (this.allFilesAccepted(files)) {
	                if (this.props.onDropAccepted) {
	                    this.props.onDropAccepted(files, e);
	                }
	            } else {
	                if (this.props.onDropRejected) {
	                    this.props.onDropRejected(files, e);
	                }
	            }
	        }
	    }, {
	        key: 'onClick',
	        value: function onClick() {
	            if (!this.props.disableClick) {
	                this.open();
	            }
	        }
	    }, {
	        key: 'open',
	        value: function open() {
	            var fileInput = this.refs.fileInput;
	            fileInput.value = null;
	            fileInput.click();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var className = 'droper ';
	            className += this.props.className ? this.props.className : ' droper-default ';

	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'div',
	                    {
	                        className: className,
	                        onClick: this.onClick,
	                        onDragEnter: this.onDragEnter,
	                        onDragOver: this.onDragOver,
	                        onDragLeave: this.onDragLeave,
	                        onDrop: this.onDrop
	                    },
	                    this.props.children
	                ),
	                this.state.isWX ? _react2.default.createElement('input', {
	                    type: 'file',
	                    ref: 'fileInput',
	                    className: 'droper-input',
	                    accept: this.props.accept,
	                    onChange: this.onDrop
	                }) : _react2.default.createElement('input', {
	                    type: 'file',
	                    ref: 'fileInput',
	                    className: 'droper-input',
	                    multiple: this.props.multiple,
	                    accept: this.props.accept,
	                    onChange: this.onDrop
	                })
	            );
	        }
	    }]);

	    return Droper;
	}(_react2.default.Component);

	Droper.defaultProps = {
	    disableClick: false,
	    multiple: true
	};

	Droper.propTypes = {
	    onDrop: _react2.default.PropTypes.func,
	    onDropAccepted: _react2.default.PropTypes.func,
	    onDropRejected: _react2.default.PropTypes.func,
	    onDragEnter: _react2.default.PropTypes.func,
	    onDragLeave: _react2.default.PropTypes.func,

	    disableClick: _react2.default.PropTypes.bool,
	    multiple: _react2.default.PropTypes.bool,
	    accept: _react2.default.PropTypes.string
	};

	exports.default = Droper;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pureRender = __webpack_require__(4);

	var _pureRender2 = _interopRequireDefault(_pureRender);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Header = (0, _pureRender2.default)(_class = function (_React$Component) {
	    _inherits(Header, _React$Component);

	    function Header(props) {
	        _classCallCheck(this, Header);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Header).call(this, props));

	        _this.handleBack = _this.handleBack.bind(_this);
	        return _this;
	    }

	    _createClass(Header, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'header' },
	                this.props.left ? this.props.left : _react2.default.createElement(
	                    'a',
	                    { href: 'javascript:void(0);', className: 'button button-link pull-left header-left',
	                        onClick: this.handleBack },
	                    _react2.default.createElement('i', { className: 'ifont ifont-angle-left' }),
	                    '返回'
	                ),
	                this.props.right ? this.props.right : null,
	                _react2.default.createElement(
	                    'h1',
	                    { className: 'header-title' },
	                    this.props.title
	                )
	            );
	        }
	    }, {
	        key: 'handleBack',
	        value: function handleBack(event) {
	            event.stopPropagation();
	            event.preventDefault();
	            if (this.props.history) {
	                this.props.history.go(-1);
	            }
	        }
	    }]);

	    return Header;
	}(_react2.default.Component)) || _class;

	Header.propTypes = {
	    left: _react.PropTypes.object,
	    right: _react.PropTypes.object,
	    title: _react.PropTypes.string
	};

	exports.default = Header;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(2);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _loading = __webpack_require__(9);

	var _loading2 = _interopRequireDefault(_loading);

	var _flex = __webpack_require__(6);

	var _flex2 = _interopRequireDefault(_flex);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// 没有必要scu
	// mark 菜小蜜会单独获取和设置这里的 scrollTop。 如果结构变更请考虑沟通清楚评估后再变更。
	var Infinite = function (_React$Component) {
	    _inherits(Infinite, _React$Component);

	    function Infinite(props) {
	        _classCallCheck(this, Infinite);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Infinite).call(this, props));

	        _this.handleScroll = _this.handleScroll.bind(_this);
	        _this.state = {
	            loading: false
	        };
	        _this.timer = null;
	        _this.scrollTop = 0;
	        return _this;
	    }

	    _createClass(Infinite, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var className = _props.className;
	            var children = _props.children;
	            var bottomOffset = _props.bottomOffset;
	            var onBottom = _props.onBottom;
	            var done = _props.done;

	            var rest = _objectWithoutProperties(_props, ['className', 'children', 'bottomOffset', 'onBottom', 'done']);

	            var cn = (0, _classnames2.default)('infinite', className);
	            return _react2.default.createElement(
	                'div',
	                _extends({ ref: 'infinite' }, rest, { className: cn, onScroll: this.handleScroll }),
	                children,
	                _react2.default.createElement(
	                    _flex2.default,
	                    { justifyCenter: true, alignCenter: true, className: 'infinite-loading' },
	                    done ? _react2.default.createElement(
	                        _flex2.default,
	                        { justifyCenter: true, className: 'text-desc text-small' },
	                        '没有更多数据'
	                    ) : this.state.loading && _react2.default.createElement(_loading2.default, null)
	                )
	            );
	        }
	    }, {
	        key: 'handleBottom',
	        value: function handleBottom() {
	            var _this2 = this;

	            if (this.props.done) {
	                return;
	            }

	            clearTimeout(this.timer);

	            this.setState({
	                loading: true
	            });

	            var result = this.props.onBottom();
	            // 简单判断是否promise
	            if (result && result.then) {
	                result.then(function () {
	                    _this2.setState({
	                        loading: false
	                    });
	                }, function () {
	                    _this2.setState({
	                        loading: false
	                    });
	                });
	            } else {
	                // 假设要点时间
	                this.timer = setTimeout(function () {
	                    _this2.setState({
	                        loading: false
	                    });
	                }, 500);
	            }
	        }
	    }, {
	        key: 'handleScroll',
	        value: function handleScroll(event) {
	            // 向下滚动才触发
	            if (event.target.scrollTop > this.scrollTop) {
	                if (!this.state.loading) {
	                    // 一定阈值才触发
	                    if (event.target.clientHeight + event.target.scrollTop + this.props.bottomOffset >= event.target.scrollHeight) {
	                        this.handleBottom();
	                    }
	                }
	            }
	            this.scrollTop = event.target.scrollTop;
	        }
	    }]);

	    return Infinite;
	}(_react2.default.Component);

	Infinite.defaultProps = {
	    onBottom: function onBottom() {},
	    bottomOffset: 50 + 50
	};

	Infinite.propTypes = {
	    bottomOffset: _react.PropTypes.number,
	    onBottom: _react.PropTypes.func.isRequired,
	    done: _react.PropTypes.bool
	};

	exports.default = Infinite;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(2);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _gmUtil = __webpack_require__(8);

	var _gmUtil2 = _interopRequireDefault(_gmUtil);

	var _pureRender = __webpack_require__(4);

	var _pureRender2 = _interopRequireDefault(_pureRender);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var LazyImg = (0, _pureRender2.default)(_class = function (_React$Component) {
	    _inherits(LazyImg, _React$Component);

	    function LazyImg(props) {
	        _classCallCheck(this, LazyImg);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(LazyImg).call(this, props));

	        _this.state = {
	            show: false
	        };
	        _this.targetDom = null;
	        _this.timer = null;

	        _this.onScroll = _this.onScroll.bind(_this);
	        return _this;
	    }

	    _createClass(LazyImg, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var _props = this.props;
	            var className = _props.className;
	            var src = _props.src;
	            var placeholder = _props.placeholder;
	            var delay = _props.delay;
	            var targetId = _props.targetId;

	            var rest = _objectWithoutProperties(_props, ['className', 'src', 'placeholder', 'delay', 'targetId']);

	            var cn = (0, _classnames2.default)('lazy-img', className);

	            return _react2.default.createElement('img', _extends({}, rest, {
	                ref: function ref(_ref) {
	                    return _this2.refImg = _ref;
	                },
	                className: cn,
	                src: this.state.show && src ? src : placeholder
	            }));
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.targetDom = this.props.targetId ? document.getElementById(this.props.targetId) : document.getElementsByClassName('page-content')[0];
	            if (this.targetDom) {
	                this.targetDom.addEventListener('scroll', this.onScroll);
	                this.doLazy();
	            }
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            this.removeListener();
	        }
	    }, {
	        key: 'removeListener',
	        value: function removeListener() {
	            if (this.targetDom) {
	                this.targetDom.removeEventListener('scroll', this.onScroll);
	            }
	        }
	    }, {
	        key: 'onScroll',
	        value: function onScroll() {
	            var _this3 = this;

	            if (this.timer) {
	                clearTimeout(this.timer);
	            }
	            this.timer = setTimeout(function () {
	                _this3.doLazy();
	            }, this.props.delay);
	        }
	    }, {
	        key: 'doLazy',
	        value: function doLazy() {
	            // 显示了
	            if (_gmUtil2.default.isElementOverViewport(this.refImg)) {
	                this.setState({
	                    show: true
	                });
	                this.removeListener();
	            }
	        }
	    }]);

	    return LazyImg;
	}(_react2.default.Component)) || _class;

	LazyImg.propType = {
	    src: _react.PropTypes.string,
	    placeholder: _react.PropTypes.string,
	    targetId: _react.PropTypes.string, // 指定监听滚动的dom id
	    delay: _react.PropTypes.number
	};

	LazyImg.defaultProps = {
	    delay: 500
	};

	exports.default = LazyImg;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(5);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var containerId = '_mgm_nprogress_container' + (Math.random() + '').slice(2);
	var container = document.getElementById(containerId);
	if (!container) {
	    container = document.createElement('div');
	    container.className = 'nprogress-container';
	    container.id = containerId;
	    document.body.appendChild(container);
	}

	var NProgressStatics = {
	    start: function start() {
	        _reactDom2.default.unmountComponentAtNode(container);
	        _reactDom2.default.render(_react2.default.createElement(NProgress, null), container);
	    },
	    done: function done() {
	        _reactDom2.default.render(_react2.default.createElement(NProgress, { precent: 100 }), container);
	        setTimeout(function () {
	            _reactDom2.default.unmountComponentAtNode(container);
	        }, 250);
	    }
	};

	var NProgress = (_temp = _class = function (_React$Component) {
	    _inherits(NProgress, _React$Component);

	    function NProgress(props) {
	        _classCallCheck(this, NProgress);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(NProgress).call(this, props));

	        _this.state = {
	            precent: 0
	        };

	        _this.timer = null;
	        return _this;
	    }

	    _createClass(NProgress, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            if (nextProps.precent) {
	                clearTimeout(this.timer);
	                this.setState({
	                    precent: nextProps.precent
	                });
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var percent = 100 - this.state.precent;
	            return _react2.default.createElement(
	                'div',
	                { className: 'nprogress', style: { transform: "translate3d(-" + percent + "%, 0px, 0px)" } },
	                _react2.default.createElement('div', { className: 'nprogress-head' })
	            );
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.doInc();
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            clearTimeout(this.timer);
	        }
	    }, {
	        key: 'doInc',
	        value: function doInc() {
	            var _this2 = this;

	            this.timer = setTimeout(function () {
	                _this2.setState({
	                    precent: _this2.state.precent + (100 - _this2.state.precent) * 0.2
	                });
	                if (_this2.state.precent < 90) {
	                    _this2.doInc();
	                }
	            }, 150);
	        }
	    }]);

	    return NProgress;
	}(_react2.default.Component), _class.start = NProgressStatics.start, _class.done = NProgressStatics.done, _temp);
	exports.default = NProgress;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(2);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _flex = __webpack_require__(6);

	var _flex2 = _interopRequireDefault(_flex);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Page = function (_React$Component) {
	    _inherits(Page, _React$Component);

	    function Page() {
	        _classCallCheck(this, Page);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Page).apply(this, arguments));
	    }

	    _createClass(Page, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var className = _props.className;
	            var white = _props.white;
	            var header = _props.header;
	            var tabbar = _props.tabbar;
	            var bottom = _props.bottom;
	            var children = _props.children;

	            var rest = _objectWithoutProperties(_props, ['className', 'white', 'header', 'tabbar', 'bottom', 'children']);

	            var cn = (0, _classnames2.default)({
	                'page': true,
	                'page-white': white
	            }, className);
	            // 如果没有header tabbar 就简化html结构
	            if (header || tabbar) {
	                return _react2.default.createElement(
	                    _flex2.default,
	                    _extends({ column: true }, rest, { className: cn }),
	                    header ? _react2.default.createElement(
	                        _flex2.default,
	                        { column: true },
	                        header
	                    ) : undefined,
	                    _react2.default.createElement(
	                        _flex2.default,
	                        { flex: true, column: true, className: 'page-content block' },
	                        children
	                    ),
	                    tabbar ? _react2.default.createElement(
	                        _flex2.default,
	                        { column: true, className: 'page-tabbar' },
	                        tabbar
	                    ) : undefined,
	                    bottom ? bottom : undefined
	                );
	            } else {
	                return _react2.default.createElement(
	                    'div',
	                    _extends({}, rest, { className: (0, _classnames2.default)(cn, 'page-content') }),
	                    children
	                );
	            }
	        }
	    }]);

	    return Page;
	}(_react2.default.Component);

	Page.propTypes = {
	    children: _react.PropTypes.node,
	    className: _react.PropTypes.string,
	    white: _react.PropTypes.bool,
	    header: _react.PropTypes.node,
	    tabbar: _react.PropTypes.node,
	    bottom: _react.PropTypes.node
	};

	exports.default = Page;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(2);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _mask = __webpack_require__(7);

	var _mask2 = _interopRequireDefault(_mask);

	var _underscore = __webpack_require__(3);

	var _underscore2 = _interopRequireDefault(_underscore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Popup = function (_React$Component) {
	    _inherits(Popup, _React$Component);

	    function Popup(props) {
	        _classCallCheck(this, Popup);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Popup).call(this, props));

	        _this.handleChange = _this.handleChange.bind(_this);
	        return _this;
	    }

	    _createClass(Popup, [{
	        key: 'render',
	        value: function render() {
	            var thisProps = this.props;
	            var show = thisProps.show;
	            var left = thisProps.left;
	            var bottom = thisProps.bottom;
	            var width = thisProps.width;
	            var height = thisProps.height;
	            var opacity = thisProps.opacity;
	            var autoHeight = thisProps.autoHeight;
	            var className = thisProps.className;
	            var style = thisProps.style;

	            var rest = _objectWithoutProperties(thisProps, ['show', 'left', 'bottom', 'width', 'height', 'opacity', 'autoHeight', 'className', 'style']);

	            var cn = (0, _classnames2.default)('popup', {
	                active: show,
	                'popup-left': left,
	                'popup-bottom': bottom,
	                'popup-bottom-auto-height': autoHeight
	            }, className);

	            var s = _underscore2.default.extend({}, style);
	            if (left && width) {
	                s.width = width;
	            } else if (bottom) {
	                s.height = height;
	            }

	            return _react2.default.createElement(
	                'div',
	                { className: 'popup-wrap' },
	                _react2.default.createElement(_mask2.default, { show: thisProps.show, opacity: opacity || 0.1, onClick: this.handleChange }),
	                _react2.default.createElement(
	                    'div',
	                    _extends({}, rest, { className: cn, style: s }),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'popup-content' },
	                        thisProps.children
	                    )
	                )
	            );
	        }
	    }, {
	        key: 'handleChange',
	        value: function handleChange(e) {
	            e.preventDefault();
	            this.props.onChange(!this.props.show);
	        }
	    }]);

	    return Popup;
	}(_react2.default.Component);

	Popup.defaultProps = {
	    show: false,
	    onChange: function onChange() {}
	};

	Popup.propTypes = {
	    show: _react.PropTypes.bool,
	    onChange: _react.PropTypes.func,
	    left: _react.PropTypes.bool,
	    bottom: _react.PropTypes.bool,
	    width: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
	    height: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
	    opacity: _react.PropTypes.number,
	    autoHeight: _react.PropTypes.bool // 只bottom:true 有效
	};

	exports.default = Popup;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(5);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var iPhone = window.navigator.userAgent.indexOf('iPhone') > -1;

	var ScrollIntoView = function (_React$Component) {
	    _inherits(ScrollIntoView, _React$Component);

	    function ScrollIntoView(props) {
	        _classCallCheck(this, ScrollIntoView);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ScrollIntoView).call(this, props));

	        _this.target = null;
	        return _this;
	    }

	    _createClass(ScrollIntoView, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.cloneElement(this.props.children, {
	                onFocus: this.handleFocus.bind(this)
	            });
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            if (toString.call(this.props.children) !== '[object Object]') {
	                console.error('There must be one and only one component');
	            }
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.target = _reactDom2.default.findDOMNode(this);
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            this.target = null;
	        }
	    }, {
	        key: 'handleFocus',
	        value: function handleFocus() {
	            var _this2 = this;

	            if (!iPhone) {
	                setTimeout(function () {
	                    if (_this2.target) {
	                        _this2.target.scrollIntoViewIfNeeded();
	                    }
	                }, 500);
	            }
	        }
	    }]);

	    return ScrollIntoView;
	}(_react2.default.Component);

	exports.default = ScrollIntoView;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(2);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _pureRender = __webpack_require__(4);

	var _pureRender2 = _interopRequireDefault(_pureRender);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var noop = function noop() {};

	var SearchBar = (0, _pureRender2.default)(_class = function (_React$Component) {
	    _inherits(SearchBar, _React$Component);

	    function SearchBar(props) {
	        _classCallCheck(this, SearchBar);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SearchBar).call(this, props));

	        _this.state = {
	            id: props.id || '_mgm_search_bar_id' + (Math.random() + '').slice(2),
	            focus: props.defaultFocus
	        };

	        _this.handleOK = _this.handleOK.bind(_this);
	        _this.handleFocus = _this.handleFocus.bind(_this);
	        _this.handleBlur = _this.handleBlur.bind(_this);
	        _this.handleChange = _this.handleChange.bind(_this);
	        _this.handleClear = _this.handleClear.bind(_this);
	        _this.handleCancel = _this.handleCancel.bind(_this);
	        _this.handleLabel = _this.handleLabel.bind(_this);
	        return _this;
	    }

	    _createClass(SearchBar, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var cn = (0, _classnames2.default)('search-bar weui_search_bar', {
	                'weui_search_focusing': this.props.value || this.state.focus
	            });
	            return _react2.default.createElement(
	                'div',
	                { className: cn },
	                _react2.default.createElement(
	                    'form',
	                    { className: 'weui_search_outer', onSubmit: this.handleOK },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'weui_search_inner' },
	                        _react2.default.createElement('i', { className: 'weui_icon_search' }),
	                        _react2.default.createElement('input', { id: this.state.id,
	                            type: 'search',
	                            className: 'weui_search_input',
	                            placeholder: this.props.placeholder,
	                            onFocus: this.handleFocus,
	                            onBlur: this.handleBlur,
	                            onChange: this.handleChange,
	                            ref: function ref(_ref) {
	                                return _this2.input = _ref;
	                            },
	                            value: this.props.value,
	                            autoFocus: this.props.defaultFocus
	                        }),
	                        this.props.value === '' ? undefined : _react2.default.createElement('a', { href: 'javascript:', className: 'weui_icon_clear',
	                            onClick: this.handleClear })
	                    ),
	                    _react2.default.createElement(
	                        'label',
	                        { htmlFor: this.state.id, className: 'weui_search_text', onClick: this.handleLabel },
	                        _react2.default.createElement('i', { className: 'weui_icon_search' }),
	                        _react2.default.createElement(
	                            'span',
	                            null,
	                            this.props.placeholder
	                        )
	                    )
	                ),
	                this.props.OKBtn ? _react2.default.createElement(
	                    'a',
	                    { href: 'javascript:', className: 'weui_search_cancel', onClick: this.handleOK },
	                    this.props.OKBtn === true ? '搜索' : this.props.OKBtn
	                ) : _react2.default.createElement(
	                    'a',
	                    { href: 'javascript:', className: 'weui_search_cancel', onClick: this.handleCancel },
	                    '取消'
	                )
	            );
	        }
	    }, {
	        key: 'handleLabel',
	        value: function handleLabel(event) {
	            // 避免穿透
	            event.preventDefault();
	            this.setState({
	                focus: true
	            });
	            this.input.focus();
	        }
	    }, {
	        key: 'handleFocus',
	        value: function handleFocus(event) {
	            event.preventDefault();
	            this.props.onFocus(event);
	            this.setState({
	                focus: true
	            });
	        }
	    }, {
	        key: 'handleBlur',
	        value: function handleBlur(event) {
	            var _this3 = this;

	            event.preventDefault();
	            this.props.onBlur(event);
	            // blur触发优先于handleOK，，可能会导致OK按钮消失了，点不了
	            setTimeout(function () {
	                _this3.setState({
	                    focus: false
	                });
	            }, 500);
	        }
	    }, {
	        key: 'handleClear',
	        value: function handleClear(event) {
	            event.preventDefault();
	            this.props.onChange('');
	            this.input.focus();
	        }
	    }, {
	        key: 'handleCancel',
	        value: function handleCancel(event) {
	            event.preventDefault();
	            this.setState({ focus: false });
	            this.props.onChange('');
	            this.props.onCancel();
	            this.input.blur();
	        }
	    }, {
	        key: 'handleOK',
	        value: function handleOK(event) {
	            event.preventDefault();
	            this.input.blur();
	            this.props.onOK();
	            this.setState({
	                focus: false
	            });
	        }
	    }, {
	        key: 'handleChange',
	        value: function handleChange(event) {
	            this.props.onChange(event.target.value);
	        }
	    }]);

	    return SearchBar;
	}(_react2.default.Component)) || _class;

	SearchBar.defaultProps = {
	    defaultFocus: false,
	    onBlur: noop,
	    onFocus: noop,
	    onOK: noop,
	    onCancel: noop,
	    OKBtn: false
	};

	SearchBar.propTypes = {
	    defaultFocus: _react.PropTypes.bool,
	    value: _react.PropTypes.string.isRequired,
	    onChange: _react.PropTypes.func.isRequired,
	    onBlur: _react.PropTypes.func,
	    onFocus: _react.PropTypes.func,
	    placeholder: _react.PropTypes.string,
	    onOK: _react.PropTypes.func,
	    onCancel: _react.PropTypes.func,
	    OKBtn: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.string]) // 就没有onCancel 时间 了，传string则替换文本
	};

	exports.default = SearchBar;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(2);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _mask = __webpack_require__(7);

	var _mask2 = _interopRequireDefault(_mask);

	var _underscore = __webpack_require__(3);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _pureRender = __webpack_require__(4);

	var _pureRender2 = _interopRequireDefault(_pureRender);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Select = (0, _pureRender2.default)(_class = function (_React$Component) {
	    _inherits(Select, _React$Component);

	    function Select(props) {
	        _classCallCheck(this, Select);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Select).call(this, props));

	        _this.handleCancel = _this.handleCancel.bind(_this);
	        _this.handleClick = _this.handleClick.bind(_this);
	        return _this;
	    }

	    _createClass(Select, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var _props = this.props;
	            var show = _props.show;
	            var data = _props.data;
	            var value = _props.value;
	            var className = _props.className;
	            var onChange = _props.onChange;
	            var onCancel = _props.onCancel;

	            var rest = _objectWithoutProperties(_props, ['show', 'data', 'value', 'className', 'onChange', 'onCancel']);

	            var cn = (0, _classnames2.default)('select-popup-list', className);

	            if (!show) {
	                return null;
	            }
	            return _react2.default.createElement(
	                'div',
	                { className: 'select-popup' },
	                _react2.default.createElement(_mask2.default, { show: show, opacity: 0.1, onClick: this.handleCancel }),
	                _react2.default.createElement(
	                    'div',
	                    _extends({}, rest, { className: cn }),
	                    (!data || data.length === 0) && _react2.default.createElement(
	                        'span',
	                        { className: 'text-desc' },
	                        '没有数据'
	                    ),
	                    _underscore2.default.map(data, function (v, i) {
	                        return _react2.default.createElement(
	                            'div',
	                            {
	                                key: i,
	                                'data-index': i,
	                                className: (0, _classnames2.default)("select-popup-list-item", {
	                                    active: v === value
	                                }),
	                                onClick: _this2.handleClick
	                            },
	                            v.name
	                        );
	                    })
	                )
	            );
	        }
	    }, {
	        key: 'handleCancel',
	        value: function handleCancel(event) {
	            event.preventDefault();
	            this.props.onCancel(event);
	        }
	    }, {
	        key: 'handleClick',
	        value: function handleClick(event) {
	            event.preventDefault();
	            var index = event.currentTarget.dataset.index;
	            this.props.onChange(this.props.data[index]);
	        }
	    }]);

	    return Select;
	}(_react2.default.Component)) || _class;

	Select.defaultProps = {
	    show: false,
	    data: [],
	    value: null,
	    onChange: function onChange() {},
	    onCancel: function onCancel() {}
	};

	Select.propTypes = {
	    show: _react.PropTypes.bool.isRequired,
	    data: _react.PropTypes.array,
	    value: _react.PropTypes.any,
	    onChange: _react.PropTypes.func.isRequired,
	    onCancel: _react.PropTypes.func
	};

	exports.default = Select;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(5);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _classnames = __webpack_require__(2);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _underscore = __webpack_require__(3);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _flex = __webpack_require__(6);

	var _flex2 = _interopRequireDefault(_flex);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Slider = function (_React$Component) {
	    _inherits(Slider, _React$Component);

	    function Slider(props) {
	        _classCallCheck(this, Slider);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Slider).call(this, props));

	        _this.state = {
	            count: 1,
	            sliderWidth: 0,
	            touchObject: null,
	            dragging: false,
	            transition: false,
	            x: 0
	        };

	        _this.swipeStart = _this.swipeStart.bind(_this);
	        _this.swipeMove = _this.swipeMove.bind(_this);
	        _this.swipeEnd = _this.swipeEnd.bind(_this);
	        _this.setSliderWidth = _this.setSliderWidth.bind(_this);
	        return _this;
	    }

	    _createClass(Slider, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            this.setState({
	                count: toString.call(nextProps.children) === '[object Array]' ? nextProps.children.length : 1
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var to = this.state.touchObject;
	            var offset = to ? to.x - to.startX + this.state.x : this.state.x;

	            var _props = this.props;
	            var className = _props.className;

	            var rest = _objectWithoutProperties(_props, ['className']);

	            var cn = (0, _classnames2.default)({
	                'slider-transition': this.state.transition
	            }, className);

	            var style = {
	                WebkitTransform: 'translate3d(' + offset + 'px, 0, 0)',
	                transform: 'translate3d(' + offset + 'px, 0, 0)'
	            };

	            return _react2.default.createElement(
	                'div',
	                { className: 'slider' },
	                _react2.default.createElement(
	                    _flex2.default,
	                    _extends({}, rest, {
	                        ref: 'slider',
	                        className: cn,
	                        onMouseDown: this.swipeStart,
	                        onMouseMove: this.swipeMove,
	                        onMouseUp: this.swipeEnd,
	                        onMouseLeave: this.swipeEnd,
	                        onTouchStart: this.swipeStart,
	                        onTouchMove: this.swipeMove,
	                        onTouchEnd: this.swipeEnd,
	                        onTouchCancel: this.swipeEnd,
	                        style: style
	                    }),
	                    this.renderChild()
	                ),
	                this.renderFlag()
	            );
	        }
	    }, {
	        key: 'renderChild',
	        value: function renderChild() {
	            var components = this.props.children;

	            if (toString.call(this.props.children) !== '[object Array]') {
	                components = [this.props.children];
	            }
	            return _underscore2.default.map(components, function (value, i) {
	                return _react2.default.cloneElement(value, {
	                    style: _underscore2.default.extend({}, value.props.style, { width: '100%' }),
	                    className: (0, _classnames2.default)('slider-cell flex flex-none', value.props.className),
	                    key: i
	                });
	            });
	        }
	    }, {
	        key: 'renderFlag',
	        value: function renderFlag() {
	            var _this2 = this;

	            return _react2.default.createElement(
	                _flex2.default,
	                { justifyCenter: true, className: 'slider-flag' },
	                _underscore2.default.map(_underscore2.default.range(this.state.count), function (value, i) {
	                    return _react2.default.createElement('span', {
	                        className: (0, _classnames2.default)({ active: Math.abs(_this2.state.x / _this2.state.sliderWidth) === i }),
	                        key: i });
	                })
	            );
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.setSliderWidth();
	            this.setCount();
	            window.addEventListener('resize', this.setSliderWidth);
	        }
	    }, {
	        key: 'setCount',
	        value: function setCount() {
	            this.setState({
	                count: toString.call(this.props.children) === '[object Array]' ? this.props.children.length : 1
	            });
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            window.removeEventListener('resize', this.setSliderWidth);
	        }
	    }, {
	        key: 'setSliderWidth',
	        value: function setSliderWidth() {
	            var slider = _reactDom2.default.findDOMNode(this.refs.slider);
	            this.setState({
	                sliderWidth: slider.offsetWidth
	            });
	        }
	    }, {
	        key: 'getX',
	        value: function getX(event) {
	            return event.touches !== undefined ? event.touches[0].pageX : event.clientX;
	        }
	    }, {
	        key: 'swipeStart',
	        value: function swipeStart(event) {
	            event.preventDefault();
	            this.setState({
	                dragging: true,
	                transition: false,
	                touchObject: {
	                    startX: this.getX(event),
	                    x: this.getX(event)
	                }
	            });
	        }
	    }, {
	        key: 'swipeMove',
	        value: function swipeMove(event) {
	            event.preventDefault();
	            this.setState({
	                dragging: true,
	                transition: false,
	                touchObject: _underscore2.default.extend({}, this.state.touchObject, {
	                    x: this.getX(event)
	                })
	            });
	        }
	    }, {
	        key: 'swipeEnd',
	        value: function swipeEnd(event) {
	            event.preventDefault();
	            // if (!this.state.dragging) {
	            //     return;
	            // }
	            var to = this.state.touchObject;
	            var diff = to.x - to.startX;
	            var x = this.state.x;
	            if (to && Math.abs(diff) > 50) {
	                if (diff > 0) {
	                    x += this.state.sliderWidth;
	                } else {
	                    x -= this.state.sliderWidth;
	                }
	                if (x > 0) {
	                    x = 0;
	                }
	                if (x < -(this.state.sliderWidth * (this.state.count - 1))) {
	                    x = -(this.state.sliderWidth * (this.state.count - 1));
	                }
	                this.setState({
	                    transition: true,
	                    dragging: false,
	                    touchObject: null,
	                    x: x
	                });
	            } else {
	                this.setState({
	                    transition: true,
	                    dragging: false,
	                    touchObject: null
	                });
	            }
	        }
	    }]);

	    return Slider;
	}(_react2.default.Component);

	exports.default = Slider;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(2);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Square = function (_React$Component) {
	    _inherits(Square, _React$Component);

	    function Square() {
	        _classCallCheck(this, Square);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Square).apply(this, arguments));
	    }

	    _createClass(Square, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var className = _props.className;
	            var children = _props.children;

	            var rest = _objectWithoutProperties(_props, ['className', 'children']);

	            var cn = (0, _classnames2.default)('square-inner', className);

	            return _react2.default.createElement(
	                'div',
	                { className: 'square' },
	                _react2.default.createElement(
	                    'div',
	                    _extends({}, rest, { className: cn }),
	                    children
	                )
	            );
	        }
	    }]);

	    return Square;
	}(_react2.default.Component);

	exports.default = Square;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _underscore = __webpack_require__(3);

	var _underscore2 = _interopRequireDefault(_underscore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var PropTypes = _react2.default.PropTypes;

	var prefix = '_react-gmm_';

	var Storage = _react2.default.createClass({
	    displayName: 'Storage',

	    statics: {
	        set: function set(key, value) {
	            localStorage.setItem(prefix + key, JSON.stringify(value));
	        },
	        get: function get(key) {
	            var v = localStorage.getItem(prefix + key);
	            return v ? JSON.parse(v) : v;
	        },
	        remove: function remove(key) {
	            localStorage.removeItem(prefix + key);
	        },
	        clear: function clear() {
	            localStorage.clear();
	        },
	        getAll: function getAll() {
	            var result = {};
	            var key;
	            for (var i = 0; i < localStorage.length; i++) {
	                key = localStorage.key(i);
	                if (key.startsWith(prefix)) {
	                    key = key.slice(prefix.length);
	                    result[key] = Storage.get(key);
	                }
	            }
	            return _underscore2.default.keys(result) ? result : null;
	        }
	    },
	    propTypes: {
	        name: PropTypes.string.isRequired,
	        value: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]),
	        autoSave: PropTypes.bool
	    },
	    getDefaultProps: function getDefaultProps() {
	        return {
	            autoSave: true
	        };
	    },
	    save: function save() {
	        Storage.set(this.props.name, this.props.value);
	    },
	    componentWillUpdate: function componentWillUpdate() {
	        if (this.props.autoSave) {
	            this.save();
	        }
	    },
	    componentWillMount: function componentWillMount() {
	        this.save();
	    },
	    render: function render() {
	        return null;
	    }
	});

	exports.default = Storage;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(2);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Textarea = (_temp = _class = function (_React$Component) {
	    _inherits(Textarea, _React$Component);

	    function Textarea() {
	        _classCallCheck(this, Textarea);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Textarea).apply(this, arguments));
	    }

	    _createClass(Textarea, [{
	        key: 'render',
	        value: function render() {
	            var cn = (0, _classnames2.default)('textarea-adapter', this.props.wrapProps.className);
	            var _props = this.props;
	            var wrapProps = _props.wrapProps;

	            var rest = _objectWithoutProperties(_props, ['wrapProps']);

	            return _react2.default.createElement(
	                'div',
	                _extends({}, wrapProps, { className: cn }),
	                _react2.default.createElement(
	                    'pre',
	                    null,
	                    this.props.value
	                ),
	                _react2.default.createElement('textarea', _extends({}, rest, { className: (0, _classnames2.default)("weui_textarea", this.props.className) }))
	            );
	        }
	    }]);

	    return Textarea;
	}(_react2.default.Component), _class.defaultProps = {
	    wrapProps: {}
	}, _temp);
	exports.default = Textarea;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(5);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _mask = __webpack_require__(7);

	var _mask2 = _interopRequireDefault(_mask);

	var _loading = __webpack_require__(9);

	var _loading2 = _interopRequireDefault(_loading);

	var _underscore = __webpack_require__(3);

	var _underscore2 = _interopRequireDefault(_underscore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var toastsContainerId = '_mgm_toasts_container' + (Math.random() + '').slice(2);
	var toastsContainer = document.getElementById(toastsContainerId);

	if (!toastsContainer) {
	    toastsContainer = document.createElement('div');
	    toastsContainer.className = 'mgm-toasts';
	    toastsContainer.id = toastsContainerId;
	    document.body.appendChild(toastsContainer);
	}

	var ToastStatics = {};
	ToastStatics = {
	    _queue: [],
	    _ing: false,
	    _render: function _render() {
	        if (ToastStatics._ing) {
	            return;
	        }

	        var options = ToastStatics._queue.shift();
	        if (options === undefined) {
	            return;
	        }

	        ToastStatics._ing = true;
	        var _b_onFinish = options.onFinish;

	        var div = document.createElement('div');
	        div.className = 'mgm-toasts-cell';
	        toastsContainer.appendChild(div);

	        options.onFinish = function () {
	            if (_b_onFinish) {
	                _b_onFinish();
	            }
	            toastsContainer.removeChild(div);
	            ToastStatics._ing = false;
	            if (ToastStatics._queue.length > 0) {
	                setTimeout(function () {
	                    ToastStatics._render();
	                }, 500);
	            }
	        };

	        _reactDom2.default.render(_react2.default.createElement(
	            Toast,
	            options,
	            options.children
	        ), div);
	        return div;
	    },
	    clear: function clear(div) {
	        _reactDom2.default.unmountComponentAtNode(div);
	        // 上一步就会把div给移除. 估不需要了
	        //toastsContainer.removeChild(div);
	    },
	    tip: function tip(options) {
	        if (typeof options === 'string') {
	            options = {
	                children: options
	            };
	        }
	        options = _underscore2.default.extend({ show: true }, options);
	        ToastStatics._queue.push(options);
	        return ToastStatics._render();
	    },
	    success: function success(options) {
	        if (typeof options === 'string') {
	            options = {
	                children: options
	            };
	        }
	        return ToastStatics.tip(_underscore2.default.extend({ success: true }, options));
	    },
	    info: function info(options) {
	        if (typeof options === 'string') {
	            options = {
	                children: options
	            };
	        }
	        return ToastStatics.tip(_underscore2.default.extend({ info: true }, options));
	    },
	    warning: function warning(options) {
	        if (typeof options === 'string') {
	            options = {
	                children: options
	            };
	        }
	        return ToastStatics.tip(_underscore2.default.extend({ warning: true }, options));
	    },
	    danger: function danger(options) {
	        if (typeof options === 'string') {
	            options = {
	                children: options
	            };
	        }
	        return ToastStatics.tip(_underscore2.default.extend({ danger: true }, options));
	    },
	    loading: function loading(options) {
	        if (typeof options === 'string') {
	            options = {
	                children: options
	            };
	        }
	        return ToastStatics.tip(_underscore2.default.extend({ loading: true }, options));
	    }
	};

	// 请记得要在文档的末尾增加Toast
	var Toast = _react2.default.createClass({
	    displayName: 'Toast',

	    statics: ToastStatics,
	    propTypes: {
	        onClick: _react2.default.PropTypes.func,
	        onFinish: _react2.default.PropTypes.func,
	        show: _react2.default.PropTypes.bool,
	        time: _react2.default.PropTypes.any,
	        loading: _react2.default.PropTypes.bool,
	        icon: _react2.default.PropTypes.any,
	        success: _react2.default.PropTypes.bool,
	        info: _react2.default.PropTypes.bool,
	        warning: _react2.default.PropTypes.bool,
	        danger: _react2.default.PropTypes.bool
	    },
	    getDefaultProps: function getDefaultProps() {
	        return {
	            show: false,
	            time: 2000,
	            loading: false,
	            icon: null,
	            onClick: function onClick() {},
	            onFinish: function onFinish() {}
	        };
	    },
	    getInitialState: function getInitialState() {
	        return {
	            show: this.props.show
	        };
	    },
	    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	        if (nextProps.show !== undefined) {
	            this.setState({
	                show: nextProps.show
	            });
	        }
	    },
	    render: function render() {
	        var icon = this.props.icon;
	        var children = this.props.children;

	        if (this.props.loading) {
	            icon = _react2.default.createElement(_loading2.default, null);
	            children = children || '加载中...';
	        } else if (this.props.success) {
	            icon = _react2.default.createElement('i', { className: 'ifont ifont-success' });
	        } else if (this.props.info) {
	            icon = _react2.default.createElement('i', { className: 'ifont ifont-info-circle' });
	        } else if (this.props.warning) {
	            icon = _react2.default.createElement('i', { className: 'ifont ifont-warning' });
	        } else if (this.props.danger) {
	            icon = _react2.default.createElement('i', { className: 'ifont ifont-close' });
	        }

	        return _react2.default.createElement(
	            'div',
	            { style: { display: this.state.show ? 'block' : 'none' } },
	            _react2.default.createElement(_mask2.default, { show: this.state.show, opacity: 0.1 }),
	            _react2.default.createElement(
	                'div',
	                { className: 'toast-container' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'toast', onClick: this.handleClick },
	                    icon,
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'toast-content' },
	                        children
	                    )
	                )
	            )
	        );
	    },

	    timer: null,
	    componentDidMount: function componentDidMount() {
	        var t = this;
	        if (t.props.time) {
	            t.timer = setTimeout(function () {
	                t.setState({
	                    show: false
	                });
	                t.handleFinish();
	            }, t.props.time);
	        }
	    },
	    componentWillUnmount: function componentWillUnmount() {
	        var t = this;
	        clearTimeout(t.timer);
	        t.setState({
	            show: false
	        });
	        t.handleFinish();
	    },
	    componentDidUpdate: function componentDidUpdate() {
	        if (this.state.show === false) {
	            this.handleFinish();
	        }
	    },
	    handleClick: function handleClick() {
	        this.props.onClick();
	    },

	    isFinished: false,
	    handleFinish: function handleFinish() {
	        if (!this.isFinished) {
	            this.isFinished = true;
	            this.props.onFinish();
	        }
	    }
	});

	exports.default = Toast;

/***/ },
/* 38 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ])
});
;