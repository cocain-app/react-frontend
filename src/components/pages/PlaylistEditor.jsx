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

  componentWillMount() {
    // Decode base64
    let code = this.props.match.params.code
    if(code && code.length % 24 === 0) {
      let codes = []
      while (code.length) {
        codes.push(code.substr(0, 24))
        code = code.substr(24)
      }

      codes = codes.map(code => Buffer.from(code, "base64").toString("hex"))
      codes = codes.map(code => `${code.substr(0, 8)}-${code.substr(8, 4)}-${code.substr(12, 4)}-${code.substr(16, 4)}-${code.substr(20)}`)

      this.props.context.playlist.addSongs(codes)
    }
  }

  componentDidUpdate() {
    if(this.props.history.location.pathname === "/playlist/") {
      window.history.pushState("", "", `${this.props.context.playlist.getCodeString()}`)
    }
  }

  render() {
    return (
      <div className="Playlist Page">
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

export default React.forwardRef((props, ref) => (
  <AppContext.Consumer>
    {(context) => <PlaylistEditor {...props} context={context} ref={ref} />}
  </AppContext.Consumer>
));