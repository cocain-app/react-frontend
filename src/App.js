import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './Search';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      suggestions: {}
    }
  }

  searchSuggestions = data => {
    if(data.songTitle !== ""){
      let headers = {
        songTitle: data.songTitle
      }
      axios.get('http://127.0.0.1:8000/api/search', { headers: headers })
           .then(res => {
              if(res.data){
                  this.setState({
                    ...this.state,
                    suggestions: res.data
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
