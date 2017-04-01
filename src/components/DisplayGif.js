import React, { Component } from 'react';

class DisplayGif extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    let audio= new Audio(this.props.audio);
    audio.loop = true;
    audio.play();
  }

  render(){
    return(
    <div className="bg_panel">
        <img src="http://i.imgur.com/LPLThPr.png"/>
        <div id="GifCreator_gif_container">
          {<img className="giphy" src={this.props.url} />}
        </div>

        <h1>"{this.props.title}"</h1>
        <h3>by {this.props.user}</h3>
    </div>
    );
  }
}

export default DisplayGif;