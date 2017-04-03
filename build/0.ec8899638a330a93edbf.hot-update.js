webpackHotUpdate(0,{

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _AppUtils = __webpack_require__(134);

var _Webcam = __webpack_require__(135);

var _Webcam2 = _interopRequireDefault(_Webcam);

var _recordrtc = __webpack_require__(209);

var _recordrtc2 = _interopRequireDefault(_recordrtc);

var _reactBootstrap = __webpack_require__(178);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DisplayGif = function (_Component) {
  _inherits(DisplayGif, _Component);

  function DisplayGif(props) {
    _classCallCheck(this, DisplayGif);

    var _this = _possibleConstructorReturn(this, (DisplayGif.__proto__ || Object.getPrototypeOf(DisplayGif)).call(this, props));

    console.log("In DisplayGif:", _this.props.audioURL);

    return _this;
  }

  _createClass(DisplayGif, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // const audio= new Audio(this.props.audioURL);
      // audio.loop = true;
      // audio.addEventListener('ended', function() {
      //       this.currentTime = 0;
      //       this.play();
      //   }, false);
      // audio.play();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'bg_panel' },
        _react2.default.createElement('img', { className: 'logo_gif_creator', src: 'http://i.imgur.com/LPLThPr.png' }),
        _react2.default.createElement(
          'div',
          { id: 'GifCreator_gif_container' },
          _react2.default.createElement('img', { className: 'giphy', src: this.props.url })
        ),
        _react2.default.createElement(
          'h1',
          null,
          '"',
          this.props.title,
          '"'
        ),
        _react2.default.createElement(
          'h3',
          null,
          'by ',
          this.props.user
        )
      );
    }
  }]);

  return DisplayGif;
}(_react.Component);

exports.default = DisplayGif;

/***/ })

})