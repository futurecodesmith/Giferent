import React, { Component } from 'react';
import GifCreator from './GifCreator';
import AudioCreator from './AudioCreator';

class Main extends Component{
  constructor(props){
    super(props)
    this.username = this.props.username

    this.onNextButtonClick_BOUND = this.onNextButtonClick.bind(this);
    this.onGoBackClick_BOUND = this.onGoBackClick.bind(this);
    
    this.state = {title: '', url: '', gif_creation_state: "gif_selection"};
    //"gif_selection", "audio_creation"
  }

  onNextButtonClick(title, url){
    this.setState({title, url, gif_creation_state: "audio_creation"});
  }

  onGoBackClick(){
    this.setState({gif_creation_state: "gif_selection"});
  }

  render() { 
    if(this.state.gif_creation_state === "gif_selection"){ 
      return(
        <div>
          <GifCreator onNextButtonClick={this.onNextButtonClick_BOUND} title={this.state.title} url={this.state.url}/>
        </div>
      )
    }else {
      return(
        <div>
          <AudioCreator title={this.state.title} url={this.state.url} user={this.username} onGoBackClick={this.onGoBackClick_BOUND}/>
        </div>
      )
    }
  }
}


export default Main;