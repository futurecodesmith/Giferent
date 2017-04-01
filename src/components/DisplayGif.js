import React, { Component } from 'react';
import { captureUserMedia, S3Upload } from './AppUtils';
import Webcam from './Webcam.react';
import RecordRTC from 'recordrtc';
import { Modal } from 'react-bootstrap';

class DisplayGif extends Component {
  constructor(props){
    super(props);
    console.log("In DisplayGif:", this.props.audioURL);

  }

  componentDidMount(){
    // const audio= new Audio(this.props.audioURL);
    // audio.loop = true;
    // audio.addEventListener('ended', function() {
    //       this.currentTime = 0;
    //       this.play();
    //   }, false);
    // audio.play();
  }

  render(){
    return(
    <div className="bg_panel">
        <img className="logo_gif_creator" src="http://i.imgur.com/LPLThPr.png"/>
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