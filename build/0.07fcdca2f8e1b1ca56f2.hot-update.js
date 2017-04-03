webpackHotUpdate(0,{

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _GifCreator = __webpack_require__(232);

var _GifCreator2 = _interopRequireDefault(_GifCreator);

var _AudioCreator = __webpack_require__(229);

var _AudioCreator2 = _interopRequireDefault(_AudioCreator);

var _DisplayGif = __webpack_require__(231);

var _DisplayGif2 = _interopRequireDefault(_DisplayGif);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Main = function (_Component) {
  _inherits(Main, _Component);

  function Main(props) {
    _classCallCheck(this, Main);

    var _this = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this, props));

    _this.username = _this.props.username;

    _this.onNextButtonClick_BOUND = _this.onNextButtonClick.bind(_this);
    _this.onGoBackClick_BOUND = _this.onGoBackClick.bind(_this);
    _this.onAudioSubmit_BOUND = _this.onAudioSubmit.bind(_this);

    _this.state = { title: '', url: '', gif_creation_state: "gif_selection", audioURL: '' };
    //"gif_selection", "audio_creation", "display"
    return _this;
  }

  _createClass(Main, [{
    key: 'onNextButtonClick',
    value: function onNextButtonClick(title, url) {
      this.setState({ title: title, url: url, gif_creation_state: "audio_creation" });
    }
  }, {
    key: 'onGoBackClick',
    value: function onGoBackClick() {
      this.setState({ gif_creation_state: "gif_selection" });
    }
  }, {
    key: 'onAudioSubmit',
    value: function onAudioSubmit(url, audio) {
      this.setState({ gif_creation_state: "display", audio: url });
    }
  }, {
    key: 'render',
    value: function render() {

      if (this.state.gif_creation_state === "gif_selection") {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'button',
              { id: 'login-butt', onClick: this.props.clickLogOut },
              'Log Out'
            )
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_GifCreator2.default, { onNextButtonClick: this.onNextButtonClick_BOUND, title: this.state.title, url: this.state.url })
          )
        );
      } else if (this.state.gif_creation_state === "audio_creation") {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'button',
              { id: 'login-butt', onClick: this.props.clickLogOut },
              'Log Out'
            )
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_AudioCreator2.default, { title: this.state.title, url: this.state.url, user: this.username, onGoBackClick: this.onGoBackClick_BOUND, onAudioSubmit: this.onAudioSubmit_BOUND })
          )
        );
      } else {
        return _react2.default.createElement(_DisplayGif2.default, { title: this.state.title, url: this.state.url, user: this.username, audioURL: this.state.audioURL });
      }
    }
  }]);

  return Main;
}(_react.Component);

exports.default = Main;

/***/ })

})