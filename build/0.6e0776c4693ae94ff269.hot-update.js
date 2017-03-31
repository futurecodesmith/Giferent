webpackHotUpdate(0,{

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(21);

var _react2 = _interopRequireDefault(_react);

var _Login = __webpack_require__(109);

var _Login2 = _interopRequireDefault(_Login);

var _CreateAccount = __webpack_require__(107);

var _CreateAccount2 = _interopRequireDefault(_CreateAccount);

var _Main = __webpack_require__(110);

var _Main2 = _interopRequireDefault(_Main);

var _axios = __webpack_require__(88);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    //Login properties and methods

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      page_state: "login",
      username: ''
      //this determines what page we want to load for the user.
      //"login", "createAccount", "main"

    };

    return _this;
  }

  ///////////////////////////////
  //method binding for children//
  ///////////////////////////////

  //login//


  _createClass(App, [{
    key: 'clickLoginButton',
    value: function clickLoginButton(user, pass) {
      //Axios call
      _axios2.default.post('/verifyUser', {
        username: user,
        password: pass
      }).then(function (res) {
        console.log(res.body);
      });

      //if server response is true:
      // this.setState({page_state: "main", username: user});

      //if server response is false:
      //set username/password error and force state update for re-render
    }
  }, {
    key: 'clickCreateAccountButton',
    value: function clickCreateAccountButton() {
      this.setState({ page_state: "createAccount" });
    }
  }, {
    key: 'createAccount',
    value: function createAccount(user, pass) {

      //send user and pass to server to check if they're correct

      //if so, set page_state to main
      this.setState({ page_state: "main", username: user });
    }
  }, {
    key: 'render',
    value: function render() {

      //if page_state is set to login, render Login component
      if (this.state.page_state === "login") return _react2.default.createElement(_Login2.default, { clickLoginButton: this.clickLoginButton.bind(this), clickCreateAccountButton: this.clickCreateAccountButton.bind(this) });else if (this.state.page_state === "createAccount") return _react2.default.createElement(_CreateAccount2.default, { clickSubmit: this.createAccount.bind(this) });else if (this.state.page_state === "main") return _react2.default.createElement(_Main2.default, { username: this.state.username });
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

/***/ })

})