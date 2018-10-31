import React, { Component } from 'react';
import Search from '../Search';
import api from '../../api';

class CreatePlaylist extends Component {
  constructor(props){
    super(props)

    //suggestions = search suggestions | transitions = song transition (suggestions)
    this.state = {
      suggestions: {}
    }
  }

  //get the 10 most fitting songs by songname
  searchSuggestions = data => {
    //check if field content has been cleared
    if(data.songTitle !== ""){
      //trigger api request
      api.songs.search({songTitle: data.songTitle})
           .then(searchResults => {
              //searchResults = data body of response
              if(searchResults){
                  this.setState({
                    ...this.state,
                    suggestions: searchResults
                  })
              }else{
                  this.setState({
                    ...this.state,
                    suggestions: {}
                  })  
              }
           })  
    }else{
      this.setState({
        ...this.state,
        suggestions: {}
      })    
    }
  }

  render() {
    //state/props shortcut
    const {suggestions} = this.state;

    return (
      <div>
        <h1>Create Playlist</h1>
        <div className="App">
          <Search submit={data => this.searchSuggestions(data)} suggestions={suggestions} />
        </div>
      </div>
    );
  }
}

export default CreatePlaylist;
