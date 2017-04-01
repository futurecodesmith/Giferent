import React, { Component } from 'react';
import Axios from 'axios';

class GifCreator extends Component {
  constructor(props) {
    super(props)

    this.giphySetImage_BOUND = this.giphySetImage.bind(this);
    this.updateImageHasLoaded_BOUND = this.updateImageHasLoaded.bind(this);
    this.updateImageHasError_BOUND = this.updateImageHasError.bind(this);

    this.gifs = [];
    this.giphys = [];
    this.state = { title: '', gifURL: '', sound: '', giphys: [], imageHasLoaded: false}

  }

  titleHandler(event) {
    console.log(event.target.value);
    this.setState({ title: event.target.value })
  }

  urlHandler(event) {
    this.setState({ gifURL: event.target.value })
  }

  giphySetImage(url){
    this.setState({gifURL: url});
  }

  getGiphy(search) {
    let searchTerms = search.split(' ')
    this.imageObjects = [];
    
    var path = "http://api.giphy.com/v1/gifs/search?q="

    searchTerms.forEach(term => {
      path = path + term + "+";
    })

    path += "&limit=12&api_key=dc6zaTOxFJmzC";

    $.get(path).then(res => {
      res.data.forEach(item => {
        var sourceImage = item.images.fixed_height.url;
        this.imageObjects.push(<img onClick={()=>{this.giphySetImage_BOUND(sourceImage)}} src={item.images.fixed_height.url}/>)
      })
      this.setState({giphys: this.imageObjects});
    })
  }

  updateImageHasLoaded(){
    console.log('loaded');
    this.setState({imageHasLoaded: true});
  }

  updateImageHasError(){
    console.log('error loading image');
    this.setState({imageHasLoaded: false});
  }

  render() {

    //build an array that holds JSX element for 'next' button, that will only hold a value if the user has input a valid image and can move on to the next page.
    let nextButton = [];
    if(this.state.imageHasLoaded) {
      console.log("next button rendering..")
      nextButton.push(<button id="nextButton" type="button">next</button>);
    }

    return (
    <div>
      <div id="GifCreator_gif_container">
          {<img className="giphy" src={this.state.gifURL} onLoad={this.updateImageHasLoaded_BOUND} onError={this.updateImageHasError_BOUND}/>}
        </div>
      <div id="GifCreator_container">

        

        <div className="GifCreator_inline">
          <input className="input_text" placeholder="Enter a title for your giferent" type="text" value={this.state.title} onChange={this.titleHandler.bind(this)} />

          <br/>

          <input type="text" className="input_text" placeholder="Search for a GIF, or enter a url" value={this.state.gifURL} onChange={this.urlHandler.bind(this)} />
        </div>
        {nextButton}
        <br/>
        <button id="giphy_search_button" onClick={()=> {this.getGiphy(this.state.gifURL)}}>Search</button>
        
      </div>
      <div id="giphy_container">
          {this.state.giphys}
      </div>
      

    </div>
    )
  }

}

export default GifCreator;