import React, { Component } from 'react';

class AudioCreator extends Component{

  constructor(props){
    super(props);

    this.onGoBackClick = this.props.onGoBackClick;
  }

  render(){
    return(
      <div id="AudioCreator_container">
        <div id="AudioCreator_element">
          {<img className="giphy" src={this.props.url} onLoad={this.updateImageHasLoaded_BOUND} onError={this.updateImageHasError_BOUND}/>}
        </div>

        <h1>"{this.props.title}"</h1>
        <h3>by {this.props.user}</h3>

        <div className="AudioCreator_element">
          <span>Record Audio</span>
          <button>Record</button>
        </div>

        <br/>

        <div className="AudioCreator_element">
          <span>Playback Audio</span>
          <button>Playback</button>
        </div>

        <br/>

        <div className="AudioCreator_element">
          <button onClick={this.onGoBackClick}>Go Back</button>
          <button>Submit</button>
        </div>
      </div>

    )

  }

}

export default AudioCreator;