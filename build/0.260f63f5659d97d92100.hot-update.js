webpackHotUpdate(0,{

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(52);

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

    _this.userNameHandler_BOUND = _this.userNameHandler.bind(_this);
    _this.passwordHandler_BOUND = _this.passwordHandler.bind(_this);
    _this.verifyPasswordHandler_BOUND = _this.verifyPasswordHandler.bind(_this);

    _this.state = { username: '', password: '', verifyPassword: '' };
    return _this;
  }

  _createClass(CreateAccount, [{
    key: 'userNameHandler',
    value: function userNameHandler(event) {
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
      var passwordError = void 0;

      if (this.state.password === this.state.verifyPassword) passwordError = [];else passwordError = [_react2.default.createElement(
        'span',
        { style: { "color": "red" } },
        'Passwords must match!'
      )];

      return _react2.default.createElement(
        'div',
        { id: 'createAccount_container' },
        _react2.default.createElement(
          'div',
          _defineProperty({ className: 'block' }, 'className', 'block'),
          _react2.default.createElement(
            'label',
            { style: { "display": "inline-block" } },
            'Username'
          ),
          _react2.default.createElement('input', { style: { "display": "inline-block" }, type: 'text', value: this.state.username, onChange: this.userNameHandler_BOUND }),
          _react2.default.createElement('br', null)
        ),
        _react2.default.createElement(
          'div',
          _defineProperty({ className: 'block' }, 'className', 'block'),
          _react2.default.createElement(
            'label',
            { style: { "display": "inline-block" } },
            'Password'
          ),
          _react2.default.createElement('input', { style: { "display": "inline-block" }, type: 'text', value: this.state.password, onChange: this.passwordHandler_BOUND }),
          _react2.default.createElement('br', null)
        ),
        _react2.default.createElement(
          'div',
          _defineProperty({ className: 'block' }, 'className', 'block'),
          _react2.default.createElement(
            'label',
            { style: { "display": "inline-block" } },
            'Verify Password'
          ),
          _react2.default.createElement('input', { style: { "display": "inline-block" }, type: 'password', value: this.state.verifyPassword, onChange: this.verifyPasswordHandler_BOUND }),
          _react2.default.createElement('br', null),
          passwordError
        )
      );
    }
  }]);

  return CreateAccount;
}(_react.Component);

exports.default = CreateAccount;

/***/ })

})