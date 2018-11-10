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
        removeSong: this.removeSong,
        setDescription: this.setDescription,
        setTitle: this.setTitle,
        getOverallDuration: this.getOverallDuration,
        exportPlaylist: this.exportPlaylist,
        title: "Test",
        description: "Test Description",
        songs: []
      }
    }
  }

  getOverallDuration = () => {
    let ms = 0

    for (const song of this.state.playlist.songs) {
      ms += song.Duration
    }

    return ms
  }

  setTitle = (title) => {
    let newState = Object.assign({}, this.state)
    newState.playlist.title = title
    this.setState(newState)
  }

  setDescription = (description) => {
    let newState = Object.assign({}, this.state)
    newState.playlist.description = description
    this.setState(newState)
  }

  onSearchInput = (e) => {
    this.setSearchQuery(e.target.value)
  }

  setSearchQuery = (query) => {
    let newState = Object.assign({}, this.state)
    newState.search.query = query
    this.setState(newState)

    this.getSearchSuggestions()
  }

  getSearchSuggestions = async () => {
    let newState = Object.assign({}, this.state)

    const bpmRe = /bpm:[\d\w-]*/
    const keyRe = /key:[\d\w-]*/

    let query = this.state.search.query

    let bpmFrom
    let bpmTo
    let key
    let mode

    try {
      let bpmString = query.match(bpmRe)[0]
      if(bpmString) {
        let bpmChunks = bpmString.replace("bpm:", "").split("-")
        if(bpmChunks.length > 1) {
          bpmFrom = parseInt(bpmChunks[0])
          bpmTo = parseInt(bpmChunks[1])
        }
        else {
          let bpm = parseInt(bpmString.replace(/[^\d]*/g, ""))
          bpmFrom = bpm
          bpmTo = bpm
        }
      }
    } catch {
      // Do nothing
    }

    try {
      let keyString = query.match(keyRe)[0]
      if(keyString) {
        keyString = keyString.replace("key:", "").toLowerCase()
        key = keyString.replace(/[^\d]*/g, "")
        mode = keyString.replace(key, "") === "d" ? 0 : 1
      }
    } catch {
      // Do nothing
    }

    let cleanQuery = query.replace(bpmRe, "")
      .replace(keyRe, "")
      .replace(/\s{2,}/g, " ")
      .trim()

    let queryObject = {}
    if(cleanQuery.length > 0) queryObject.query = cleanQuery
    if(bpmFrom) queryObject.fromBpm = bpmFrom
    if(bpmTo) queryObject.toBpm = bpmTo
    if(key) queryObject.key = key
    if(mode !== undefined) queryObject.mode = mode

    api.songs.search(queryObject)
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

  removeSong = (id, index) => {
    let newState = Object.assign({}, this.state)
    newState.playlist.songs = this.state.playlist.songs.filter(song => {
      if(song.ID !== id) return true
      else {
        if(song.Index !== index) return true
        return false
      }
    })
    this.setState(newState)
  }

  exportPlaylist = () => {
    alert("Not supported yet!")
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        { this.props.children }
      </AppContext.Provider>
    )
  }
}