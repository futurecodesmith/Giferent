webpackHotUpdate(0,{

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CreateAccount = function (_Component) {
  _inherits(CreateAccount, _Component);

  function CreateAccount(props) {
    _classCallCheck(this, CreateAccount);

    var _this = _possibleConstructorReturn(this, (CreateAccount.__proto__ || Object.getPrototypeOf(CreateAccount)).call(this, props));

    _this.state = { username: '', password: '', verifyPassword: '' };
    return _this;
  }

  _createClass(CreateAccount, [{
    key: 'userNameHandler',
    value: function userNameHandler(event) {
      console.log(event.target.value);
      this.setState({ username: event.target.value });
    }
  }, {
    key: 'passwordHandler',
    value: function passwordHandler(event) {
      this.setState({ password: event.target.value });
    }
  }, {
    key: 'verifyPasswordHandler',
    value: function verifyPasswordHandler(event) {
      this.setState({ verifyPassword: event.target.value });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var passwordError = void 0;

      if (this.state.password === this.state.verifyPassword) passwordError = [];else passwordError = [_react2.default.createElement(
        'span',
        { style: { "color": "red" } },
        'Passwords must match!'
      )];

      return _react2.default.createElement(
        'div',
        { className: 'login_container' },
        _react2.default.createElement(
          'span',
          null,
          'Create an Account'
        ),
        _react2.default.createElement(
          'div',
          _defineProperty({ className: 'block' }, 'className', 'block'),
          _react2.default.createElement('input', { style: { "display": "inline-block" }, type: 'text', className: 'input_text', placeholder: 'Username', value: this.state.username, onChange: this.userNameHandler.bind(this) }),
          _react2.default.createElement('br', null)
        ),
        _react2.default.createElement(
          'div',
          _defineProperty({ className: 'block' }, 'className', 'block'),
          _react2.default.createElement('input', { style: { "display": "inline-block" }, type: 'password', className: 'input_text', placeholder: 'Password', value: this.state.password, onChange: this.passwordHandler.bind(this) }),
          _react2.default.createElement('br', null)
        ),
        _react2.default.createElement(
          'div',
          _defineProperty({ className: 'block' }, 'className', 'block'),
          _react2.default.createElement('input', { style: { "display": "inline-block" }, type: 'password', className: 'input_text', placeholder: 'Verify Password', value: this.state.verifyPassword, onChange: this.verifyPasswordHandler.bind(this) }),
          _react2.default.createElement('br', null),
          passwordError
        ),
        _react2.default.createElement(
          'button',
          { type: 'button', onClick: function onClick() {
              _this2.props.clickSubmit(_this2.state.username, _this2.state.password);
            } },
          'Submit'
        )
      );
    }
  }]);

  return CreateAccount;
}(_react.Component);

exports.default = CreateAccount;

/***/ })

})