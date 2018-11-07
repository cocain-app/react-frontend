import React from "react"

import api from "./api"

export const AppContext = React.createContext()

export class AppProvider extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      search: {
        onInput: this.onSearchInput,
        setQuery: this.setSearchQuery,
        query: "",
        suggestions: []
      },
      playlist: {
        addSong: this.addSong,
        title: "Test",
        description: "Test Description",
        songs: []
      }
    }
  }

  onSearchInput = (e) => {
    let newState = Object.assign({}, this.state)
    newState.search.query = e.target.value
    this.setState(newState)

    this.getSearchSuggestions()
  }

  setSearchQuery = (query) => {
    let newState = Object.assign({}, this.state)
    newState.search.query = query
    this.setState(newState)

    this.getSearchSuggestions()
  }

  getSearchSuggestions = async () => {
    let newState = Object.assign({}, this.state)
    api.songs.search({songTitle: this.state.search.query})
      .then(searchResults => {
        if(searchResults){
          newState.search.suggestions = searchResults
        } else {
          newState.search.suggestions = []
        }
        this.setState(newState)
      })
  }

  addSong = (id) => {
    let newState = Object.assign({}, this.state)
    api.songs.get(id)
      .then(songData => {
        let playlistIndex = this.state.playlist.songs.filter(song => song.ID === id).length

        newState.playlist.songs.push({
          ...songData,
          Index: playlistIndex
        })

        newState.search.query = ""

        this.setState(newState)
      })
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        { this.props.children }
      </AppContext.Provider>
    )
  }
}