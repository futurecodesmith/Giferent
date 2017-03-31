webpackHotUpdate(0,{

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(31);

var _react2 = _interopRequireDefault(_react);

var _GifCreator = __webpack_require__(183);

var _GifCreator2 = _interopRequireDefault(_GifCreator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Main = function Main(props) {
  var username = props.username;


  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'span',
      null,
      'Hello, ',
      username,
      '!'
    ),
    _react2.default.createElement(_GifCreator2.default, { hello: true })
  );
};

Main.propTypes = {
  username: _react.PropTypes.string.isRequired
};

exports.default = Main;

/***/ })

})