webpackHotUpdate(0,{

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(52);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

var inline = {
  "position": "relative",
  "display": "inline-block",
  "padding": "10px"
};

var Login = function Login(props) {
  _objectDestructuringEmpty(props);

  return _react2.default.createElement(
    "div",
    { id: "login_container" },
    _react2.default.createElement(
      "h1",
      null,
      "Login"
    ),
    _react2.default.createElement(
      "div",
      { id: "username_container", className: "block" },
      _react2.default.createElement(
        "span",
        { style: inline },
        "Username"
      ),
      _react2.default.createElement("input", { type: "text", placeholder: "Username", style: inline })
    ),
    _react2.default.createElement(
      "div",
      { id: "password_container", className: "block" },
      _react2.default.createElement(
        "span",
        { style: inline },
        "Password"
      ),
      _react2.default.createElement("input", { type: "text", placeholder: "Password", style: inline })
    ),
    _react2.default.createElement(
      "div",
      { id: "loginButton_container", className: "block" },
      _react2.default.createElement(
        "button",
        { type: "button", id: "login_button" },
        "Login"
      )
    ),
    _react2.default.createElement(
      "h3",
      null,
      "Don't have an account? ",
      _react2.default.createElement(
        "a",
        { href: "" },
        "Create One!"
      )
    )
  );
};

Login.propTypes = {};

exports.default = Login;

/***/ })

})