import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';
import api from './api';

class App extends Component {
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
             console.log(searchResults)
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
      <div className="App">
        <Search submit={data => this.searchSuggestions(data)} suggestions={suggestions} />
      </div>
    );
  }
}

export default App;
