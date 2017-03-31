webpackHotUpdate(0,{

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(25);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var inline = {
  "position": "relative",
  "display": "inline-block",
  "margin-top": "5px"
};

var Login = function (_Component) {
  _inherits(Login, _Component);

  function Login(props) {
    _classCallCheck(this, Login);

    var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

    _this.clickLoginButton = _this.props.clickSubmit;

    _this.state = { username: '', password: '' };
    return _this;
  }

  _createClass(Login, [{
    key: "usernameHandler",
    value: function usernameHandler(event) {
      console.log(event.target.value);
      this.setState({ username: event.target.value });
    }
  }, {
    key: "passwordHandler",
    value: function passwordHandler(event) {
      console.log(event.target.value);
      this.setState({ password: event.target.value });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

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
          _react2.default.createElement("input", { type: "text", placeholder: "Username", style: inline, onChange: this.usernameHandler.bind(this) })
        ),
        _react2.default.createElement(
          "div",
          { id: "password_container", className: "block" },
          _react2.default.createElement(
            "span",
            { style: inline },
            "Password"
          ),
          _react2.default.createElement("input", { type: "password", placeholder: "Password", style: inline, onChange: this.passwordHandler.bind(this) })
        ),
        _react2.default.createElement(
          "div",
          { id: "loginButton_container", className: "block" },
          _react2.default.createElement(
            "button",
            { type: "button", id: "login_button", onClick: function onClick() {
                clickSubmitButton(_this2.state.username, _this2.state.password);
              } },
            "Login"
          )
        ),
        _react2.default.createElement(
          "button",
          { type: "button", onClick: this.clickSubmitButton },
          "Create An Account"
        )
      );
    }
  }]);

  return Login;
}(_react.Component);

exports.default = Login;

/***/ })

})