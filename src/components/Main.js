import React, { Component } from 'react';
import GifCreator from './GifCreator';
import AudioCreator from './AudioCreator';
import DisplayGif from './DisplayGif';

class Main extends Component{
  constructor(props){
    super(props)
    this.username = this.props.username

    this.onNextButtonClick_BOUND = this.onNextButtonClick.bind(this);
    this.onGoBackClick_BOUND = this.onGoBackClick.bind(this);
    this.onAudioSubmit_BOUND = this.onAudioSubmit.bind(this);
    
    this.state = {title: '', url: '', gif_creation_state: "gif_selection", audio: ''};
    //"gif_selection", "audio_creation", "display"
  }

  onNextButtonClick(title, url){
    this.setState({title, url, gif_creation_state: "audio_creation"});
  }

  onGoBackClick(){
    this.setState({gif_creation_state: "gif_selection"});
  }

  onAudioSubmit(url){
    this.setState({gif_creation_state: "display", audio: url});
  }

  render() { 
    if(this.state.gif_creation_state === "gif_selection"){ 
      return(
        <div>
          <GifCreator onNextButtonClick={this.onNextButtonClick_BOUND} title={this.state.title} url={this.state.url}/>
        </div>
      )
    }else if(this.state.gif_creation_state === "audio_creation") {
      return(
        <div>
          <AudioCreator title={this.state.title} url={this.state.url} user={this.username} onGoBackClick={this.onGoBackClick_BOUND} onAudioSubmit={this.onAudioSubmit_BOUND}/>
        </div>
      )
    }
    else{
      return(
        <DisplayGif title={this.state.title} url={this.state.url} user={this.username} audio={this.state.audio}/>
      )
    }
  }
}


export default Main;