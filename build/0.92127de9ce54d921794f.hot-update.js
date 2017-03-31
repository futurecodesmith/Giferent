webpackHotUpdate(0,{

/***/ 181:
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (6:9)\n\n\u001b[0m \u001b[90m 4 | \u001b[39m  \u001b[36mconst\u001b[39m {} \u001b[33m=\u001b[39m props\u001b[33m;\u001b[39m\n \u001b[90m 5 | \u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 6 | \u001b[39m  \u001b[36mreturn\u001b[39m()\n \u001b[90m   | \u001b[39m         \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 7 | \u001b[39m\n \u001b[90m 8 | \u001b[39m}\n \u001b[90m 9 | \u001b[39m\u001b[0m\n");

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(52);

var _react2 = _interopRequireDefault(_react);

var _Login = __webpack_require__(82);

var _Login2 = _interopRequireDefault(_Login);

var _CreateAccount = __webpack_require__(181);

var _CreateAccount2 = _interopRequireDefault(_CreateAccount);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      page_state: "login"
    };
    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {

      //if page_state is set to login, render Login component
      if (this.state.page_state === "login") return _react2.default.createElement(_Login2.default, null);else if (this.state.page_state === "createUser") return _react2.default.createElement(
        'button',
        null,
        ' hello'
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

/***/ }),

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
  "margin-top": "5px"
};

var Login = function Login(props) {
  _objectDestructuringEmpty(props);

  return _react2.default.createElement(
    "div",
    { id: "login_container" },
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