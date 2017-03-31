webpackHotUpdate(0,{

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(52);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var inline = {
  "position": "relative",
  "display": "inline-block",
  "margin-top": "5px"
};

var Login = function Login(props) {
  var clickSubmit = props.clickSubmit;


  return _react2.default.createElement(
    "div",
    { className: "login_container" },
    _react2.default.createElement(
      "p",
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
        { type: "button", id: "login_button", onClick: clickSubmit },
        "Login"
      )
    ),
    _react2.default.createElement(
      "button",
      { type: "button", onClick: clickSubmit },
      "Create An Account"
    )
  );
};

Login.propTypes = {
  clickSubmit: _react.PropTypes.func.isRequired
};

exports.default = Login;

/***/ })

})