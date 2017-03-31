webpackHotUpdate(0,{

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(52);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Main = function Main(props) {
  var username = props.username;


  return _react2.default.createElement(
    'span',
    null,
    'Hello, ',
    username,
    '!'
  );
};

Main.propTypes = {
  username: _react.PropTypes.string.isRequired
};

exports.default = Main;

/***/ })

})