import React, { Component } from 'react';
import Search from '../Search';
import api from '../../api';

class CreatePlaylist extends Component {
  constructor(props){
    super(props)

    this.state = {
      suggestions: {}
    }
  }

  searchSuggestions = data => {
    if(data.songTitle !== ""){
      api.songs.search({songTitle: data.songTitle})
           .then(searchResults => {
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
