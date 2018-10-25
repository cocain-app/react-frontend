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
    let headers = {
      songTitle: data.songTitle
    }
    axios.get('http://127.0.0.1:8000/api/suggestions', { headers: headers })
         .then(res => {
           this.setState({
             ...this.state,
             suggestions: res.data
           })
         })
  }

  render() {
    const {suggestions} = this.state;

    return (
      <div className="App">
        <Search submit={data => this.searchSuggestions(data)} />
        {
            Object.values(suggestions).map((song) => 
              <ul>{JSON.stringify(song)}</ul>
            )
        }
      </div>
    );
  }
}

export default App;
