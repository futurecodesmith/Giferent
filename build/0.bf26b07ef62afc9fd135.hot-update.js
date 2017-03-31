webpackHotUpdate(0,{

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(31);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      this.state({ username: event.target.value });
      console.log(this.state.username);
    }
  }, {
    key: 'passwordHandler',
    value: function passwordHandler(event) {
      this.state({ password: event.target.value });
    }
  }, {
    key: 'verifyPasswordHandler',
    value: function verifyPasswordHandler(event) {
      this.state({ verifyPassword: event.target.value });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: 'createAccount_container' },
        _react2.default.createElement('input', { type: 'text', value: this.state.username, onChange: this.userNameHandler }),
        _react2.default.createElement('br', null),
        _react2.default.createElement('input', { type: 'text', value: this.state.password, onChange: this.passwordHandler }),
        _react2.default.createElement('br', null),
        _react2.default.createElement('input', { type: 'text', value: this.state.verifyPassword, onChange: this.verifyPasswordHandler }),
        _react2.default.createElement('br', null)
      );
    }
  }]);

  return CreateAccount;
}(_react.Component);

exports.default = CreateAccount;

/***/ })

})