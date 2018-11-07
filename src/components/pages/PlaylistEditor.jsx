import React, { Component } from "react"

import { AppContext } from "../../context"

import Search from "../Search"
import SongTable from "../SongTable"
import SongRow from "../SongRow"
import PlaylistHead from "../PlaylistHead"
import Reccomendations from "../Reccomendations"
import ReccomendedSong from "../ReccomendedSong"

import api from "../../api"

import "../../style/layout.css"

class PlaylistEditor extends Component {
  constructor(props){
    super(props)

    this.state = {
      selectedId: null,
      selectedName: "",
      reccomendations: []
    }
  }

  selectSong = (id, title, artist) => {
    if(this.state.selectedId === id){
      this.setState({
        ...this.state,
        selectedId: null,
        reccomendations: [],
        selectedName: ""
      })
    } else {
      api.songs.transitions(id)
        .then(reccomendations => {
          this.setState({
            ...this.state,
            selectedId: id,
            reccomendations: reccomendations,
            selectedName: `${title} - ${artist}`
          })
        })
    }
  }

  render() {
    return (
      <div className="App">
        <Search />

        <div className={`container scroller ${this.state.selectedId && "suggestions-pseudo"}`}>
          <AppContext.Consumer>
            { (context) => (
              <PlaylistHead
                title={context.playlist.title}
                description={context.playlist.description}
                numberOfSongs={context.playlist.songs.length}
                coverUrl={context.playlist.songs.length > 0 ? context.playlist.songs[0].ImageURL : ""} />
            ) }
          </AppContext.Consumer>
          <SongTable headers={["Track", "Length", "BPM", "Key"]}>
            <AppContext.Consumer>
              { (context) => context.playlist.songs.map(song => (
                <SongRow
                  onClick={() => this.selectSong(song.ID, song.Title, song.Artist)}
                  key={song.ID}
                  selected={this.state.selectedId === song.ID}
                  type="dropdown"
                  id={song.ID}
                  artist={song.Artist}
                  bpm={song.BPM}
                  musicalKey={song.Key}
                  duration={song.Duration}
                  coverURL={song.ImageURLSmall}
                  title={song.Title} />
              )) }
            </AppContext.Consumer>
          </SongTable>
        </div>

        { this.state.selectedId && (
          <Reccomendations base={this.state.selectedName}>
            { this.state.reccomendations.Transition && this.state.reccomendations.Transition.map(transition => {
              const song = transition.ToSong
              return (
                <ReccomendedSong
                  id={song.ID}
                  key={song.ID}
                  title={song.Title}
                  artist={song.Artist}
                  bpm={song.BPM}
                  musicalKey={song.Key}
                  previewUrl={song.PreviewURL}
                  coverUrl={song.ImageURLSmall} />
              )
            }) }
          </Reccomendations>
        ) }
      </div>

    )
  }
}

export default PlaylistEditor