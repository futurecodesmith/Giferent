webpackHotUpdate(0,{

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(128);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GifCreator = function (_Component) {
  _inherits(GifCreator, _Component);

  function GifCreator(props) {
    _classCallCheck(this, GifCreator);

    var _this = _possibleConstructorReturn(this, (GifCreator.__proto__ || Object.getPrototypeOf(GifCreator)).call(this, props));

    _this.onNextButtonClick = _this.props.onNextButtonClick;

    _this.giphySetImage_BOUND = _this.giphySetImage.bind(_this);
    _this.updateImageHasLoaded_BOUND = _this.updateImageHasLoaded.bind(_this);
    _this.updateImageHasError_BOUND = _this.updateImageHasError.bind(_this);

    _this.gifs = [];
    _this.giphys = [];
    _this.state = {
      title: _this.props.title, gifURL: _this.props.url, sound: '', giphys: [], imageHasLoaded: false,
      creation_state: 'gif_selection'
    };

    return _this;
  }

  _createClass(GifCreator, [{
    key: 'titleHandler',
    value: function titleHandler(event) {
      console.log(event.target.value);
      this.setState({ title: event.target.value });
    }
  }, {
    key: 'urlHandler',
    value: function urlHandler(event) {
      this.setState({ gifURL: event.target.value });
    }
  }, {
    key: 'giphySetImage',
    value: function giphySetImage(url) {
      this.setState({ gifURL: url });
    }
  }, {
    key: 'getGiphy',
    value: function getGiphy(search) {
      var _this2 = this;

      var searchTerms = search.split(' ');
      this.imageObjects = [];

      var path = "http://api.giphy.com/v1/gifs/search?q=";

      searchTerms.forEach(function (term) {
        path = path + term + "+";
      });

      path += "&limit=12&api_key=dc6zaTOxFJmzC";

      $.get(path).then(function (res) {
        res.data.forEach(function (item) {
          var sourceImage = item.images.fixed_height.url;
          _this2.imageObjects.push(_react2.default.createElement('img', { onClick: function onClick() {
              _this2.giphySetImage_BOUND(sourceImage);
            }, src: item.images.fixed_height.url }));
        });
        _this2.setState({ giphys: _this2.imageObjects });
      });
    }
  }, {
    key: 'updateImageHasLoaded',
    value: function updateImageHasLoaded() {
      console.log('loaded');
      this.setState({ imageHasLoaded: true });
    }
  }, {
    key: 'updateImageHasError',
    value: function updateImageHasError() {
      console.log('error loading image');
      this.setState({ imageHasLoaded: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      //build an array that holds JSX element for 'next' button, that will only hold a value if the user has input a valid image and can move on to the next page.
      var nextButton = [];
      if (this.state.imageHasLoaded) {
        var title = this.state.title;
        var url = this.state.gifURL;
        console.log("next button rendering..");
        nextButton.push(_react2.default.createElement(
          'button',
          { id: 'nextButton', type: 'button', onClick: function onClick() {
              _this3.onNextButtonClick(title, url);
            } },
          'next'
        ));
      }

      return _react2.default.createElement(
        'div',
        { className: 'bg_panel' },
        _react2.default.createElement(
          'div',
          { id: 'logo_container' },
          _react2.default.createElement('img', { src: 'http://i.imgur.com/LPLThPr.png' })
        ),
        _react2.default.createElement(
          'div',
          { id: 'GifCreator_gif_container' },
          _react2.default.createElement('img', { className: 'giphy', src: this.state.gifURL, onLoad: this.updateImageHasLoaded_BOUND, onError: this.updateImageHasError_BOUND })
        ),
        _react2.default.createElement(
          'div',
          { id: 'GifCreator_container' },
          _react2.default.createElement(
            'div',
            { className: 'GifCreator_inline' },
            _react2.default.createElement('input', { className: 'input_text', placeholder: 'Enter a title for your giferent', type: 'text', value: this.state.title, onChange: this.titleHandler.bind(this) }),
            _react2.default.createElement('br', null),
            _react2.default.createElement('input', { type: 'text', className: 'input_text', placeholder: 'Search for a GIF, or enter a url', value: this.state.gifURL, onChange: this.urlHandler.bind(this) })
          ),
          nextButton,
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'button',
            { className: 'giphy_search_button', onClick: function onClick() {
                _this3.getGiphy(_this3.state.gifURL);
              } },
            'Search'
          )
        ),
        _react2.default.createElement(
          'div',
          { id: 'giphy_container' },
          this.state.giphys
        )
      );
    }
  }]);

  return GifCreator;
}(_react.Component);

exports.default = GifCreator;

/***/ })

})