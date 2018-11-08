import React, { Component } from "react"

import { AppContext } from "../../context"

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
      selectedIndex: null,
      selectedName: "",
      reccomendations: []
    }
  }

  selectSong = (id, playlistIndex, title, artist) => {
    if(this.state.selectedId === id && this.state.selectedIndex === playlistIndex){
      this.setState({
        ...this.state,
        selectedId: null,
        selectedIndex: null,
        reccomendations: [],
        selectedName: ""
      })
    } else {
      api.songs.transitions(id)
        .then(reccomendations => {
          this.setState({
            ...this.state,
            selectedId: id,
            selectedIndex: playlistIndex,
            reccomendations: reccomendations,
            selectedName: `${title} - ${artist}`
          })
        })
    }
  }

  render() {
    return (
      <div className="Playlist Page">
        <div className={`container scroller ${this.state.selectedId && "suggestions-pseudo"}`}>
          <AppContext.Consumer>
            { (context) => (
              <PlaylistHead
                context={context}
                title={context.playlist.title}
                description={context.playlist.description}
                numberOfSongs={context.playlist.songs.length}
                duration={context.playlist.getOverallDuration()}
                coverUrl={context.playlist.songs.length > 0 ? context.playlist.songs[0].ImageURL : ""} />
            ) }
          </AppContext.Consumer>
          <SongTable headers={["Track", "Length", "BPM", "Key"]}>
            <AppContext.Consumer>
              { (context) => context.playlist.songs.map(song => (
                <SongRow
                  onClick={() => this.selectSong(song.ID, song.Index, song.Title, song.Artist)}
                  key={`${song.ID}-${song.Index}`}
                  selected={this.state.selectedId === song.ID && this.state.selectedIndex === song.Index}
                  type="dropdown"
                  id={song.ID}
                  artist={song.Artist}
                  bpm={song.BPM}
                  musicalKey={song.Key}
                  duration={song.Duration}
                  coverURL={song.ImageURLSmall}
                  previewUrl={song.PreviewURL}
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