import React, { Component } from 'react';
import { captureUserMedia, S3Upload } from './AppUtils';
import Webcam from './Webcam.react';
import RecordRTC from 'recordrtc';
import { Modal } from 'react-bootstrap';

class AudioCreator extends Component{

  constructor(props){
    super(props);

    this.audio;

    this.onGoBackClick = this.props.onGoBackClick;
    this.onAudioSubmit = this.props.onAudioSubmit;

    this.startRecord = this.startRecord.bind(this);
    this.stopRecord = this.stopRecord.bind(this);

    this.state = {audioURL: '', 
                  recordVideo: null,
                  src: null,
                  uploadSuccess: null,
                  uploading: false
    }
  }

  componentDidMount() {
    if(!hasGetUserMedia) {
      //alert("Your browser cannot stream from your webcam. Please switch to Chrome or Firefox.");
      return;
    }
    this.requestUserMedia();
  }

  requestUserMedia() {
    console.log('requestUserMedia')
    captureUserMedia((stream) => {
      this.setState({ src: window.URL.createObjectURL(stream) });
      console.log('setting state', this.state)
    });
  }

  startRecord() {
    captureUserMedia((stream) => {
      this.state.recordVideo = RecordRTC(stream, { type: 'video' });
      this.state.recordVideo.startRecording();
    });
  }

  stopRecord() {
    this.state.recordVideo.stopRecording(() => {
      let params = {
        type: 'video/webm',
        data: this.state.recordVideo.blob,
        id: Math.floor(Math.random()*90000) + 10000
      }

      var url = URL.createObjectURL(this.state.recordVideo.blob);
      this.setState({ audioURL: params.data, uploading: true });
      console.log('State:', this.state.audioURL)
      
      this.audio = new Audio();
      this.audio.src = url;
      this.audio.addEventListener('ended', function() {
          this.currentTime = 0;
          this.play();
      }, false);
      this.audio.play();



    //   S3Upload(params)
    //   .then((success) => {
    //     console.log('enter then statement')
    //     if(success) {
    //       console.log(success)
    //       this.setState({ uploadSuccess: true, uploading: false });
    //     }
    //   }, (error) => {
    //     alert(error, 'error occurred. check your aws settings and try again.')
    //   })
    });
  }

  getAudioURL(event){
    console.log(event.target.value);
    this.setState({audioURL: event.target.value});
  }

  render(){
    return(
      <div className="bg_panel">
        <img src="http://i.imgur.com/LPLThPr.png"/>
        <div id="GifCreator_gif_container">
          {<img className="giphy" src={this.props.url} onLoad={this.updateImageHasLoaded_BOUND} onError={this.updateImageHasError_BOUND} />}
        </div>

        <h1>"{this.props.title}"</h1>
        <h3>by {this.props.user}</h3>

        <input type="text" placeholder="Enter an audio URL" className="input_text" onChange={this.getAudioURL.bind(this)}/>

        <br/>

        <button className="giphy_search_button" onClick={this.startRecord}>Start Recording</button>
        <button className="giphy_search_button" onClick={this.stopRecord}>Stop Recording</button>

        <br/>

        <div className="AudioCreator_element">
          <button className="giphy_search_button" onClick={this.onGoBackClick}>Go Back</button>
          <button className="giphy_search_button" onClick={()=>{this.onAudioSubmit(this.state.audioURL, this.audio)}}>Submit</button>
        </div>

        <video autoPlay muted src={this.state.src} />
      </div>

    )

  }

}

export default AudioCreator;
