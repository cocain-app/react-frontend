import React, { Component } from "react"

import api from "../../api"

import Search from "../Search"
import SongTable from "../SongTable"
import SongRow from "../SongRow"

import "../../style/layout.css"

class SearchPage extends Component {
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
    const {suggestions} = this.state

    return (
      <div className="App">
        <Search submit={data => this.searchSuggestions(data)} suggestions={suggestions} />

        <div className="container">
          <SongTable headers={["Track", "Length", "BPM", "Key"]}>
            {
              Object.values(suggestions).map((suggestion) => (
                <SongRow
                  selected={false}
                  type="create"
                  id={suggestion.Song.ID}
                  artist={suggestion.Song.Artist}
                  bpm={suggestion.Song.BPM}
                  musicalKey={suggestion.Song.Key}
                  duration={suggestion.Song.Duration}
                  title={suggestion.Song.Title} />
              ))
            }
          </SongTable>
        </div>
      </div>
    )
  }
}

export default SearchPage
