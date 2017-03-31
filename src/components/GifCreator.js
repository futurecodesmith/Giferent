import React, { Component } from 'react';

class GifCreator extends Component {
  constructor(props) {
    super(props)

    this.state = { title: '', gifURL: '', sound: '' }
  }

  titleHandler(event) {
    console.log(event.target.value);
    this.setState({ title: event.target.value })
  }

  urlHandler(event) {
    this.setState({ gifURL: event.target.value })
  }

  render() {

    let imageRender = [];

    function imageExists(url, callback) {
      var img = new Image();
      img.id = "preview_image";
      img.onload = function () { callback(true); };
      img.onerror = function () { callback(false); };
      img.src = url
    }

    imageExists(this.state.gifURL, (exists) => {
      if(exists) console.log("yes");
    })

    return (
      <div id="GifCreator_container">

        <div id="GifCreator_gif_container">
          <img src={this.state.gifURL}/>
        </div>

        <span>Instructions go here!</span><br />

        <div className="GifCreator_inline">
          <label>Title:</label> <br />
          <label>.gif URL:</label>
        </div>

        <div className="GifCreator_inline">
          <input type="text" value={this.state.title} onChange={this.titleHandler.bind(this)} /> <br />
          <input type="text" value={this.state.gifURL} onChange={this.urlHandler.bind(this)} />
        </div>

        <button>Preview .gif</button>

      </div>
    )
  }

}

export default GifCreator;