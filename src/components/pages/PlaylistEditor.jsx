import React, { Component } from "react"

import { AppContext } from "../../context"

import Search from "../Search"
import SongTable from "../SongTable"
import SongRow from "../SongRow"
import PlaylistHead from "../PlaylistHead"
import Reccomendations from "../Reccomendations"
import ReccomendedSong from "../ReccomendedSong"

import "../../style/layout.css"

class PlaylistEditor extends Component {
  render() {
    return (

      <div className="App">
        <Search />

        <div className="container">
          <AppContext.Consumer>
            { (context) => (
              <PlaylistHead
                title={context.playlist.title}
                description={context.playlist.description}
                numberOfSongs={context.playlist.songs.length}
                coverUrl="https://i.scdn.co/image/2e9f7dcf75d85b94b2de0756fbfa10f8c8692880" />
            ) }
          </AppContext.Consumer>

          <SongTable headers={["Track", "Length", "BPM", "Key"]}>
            <AppContext.Consumer>
              { (context) => context.playlist.songs.map(song => (
                <SongRow selected={false} type="create"/>
              ))
              }
            </AppContext.Consumer>
          </SongTable>
        </div>

        <div className="sticky-bottom">
          <Reccomendations base="If I Could - Camo & Krooked">
            <ReccomendedSong title="True Romance" artist="dBridge & Vegas" bpm="174" musicalKey="A# Major" previewUrl="https://p.scdn.co/mp3-preview/1ef229fc359e6844919f4a3be0f3153e7eac974c?cid=774b29d4f13844c495f206cafdad9c86" coverUrl="https://i.scdn.co/image/8e74d0392b762e929afc2ffeb90c47d550693bd2"/>
            <ReccomendedSong title="Stratos" artist="Champion (DnB)" bpm="174" musicalKey="C# Minor" previewUrl="https://p.scdn.co/mp3-preview/3cf98206d740d73b619366f48a2d3bfae81d8e69?cid=774b29d4f13844c495f206cafdad9c86" coverUrl="https://i.scdn.co/image/1378aab6c96b1b97335254e665c8c422651aadfa"/>
            <ReccomendedSong title="Loving You Is Easy (S.P.Y Remix)" artist="Camo & Krooked" bpm="172" musicalKey="A# Major" previewUrl="https://p.scdn.co/mp3-preview/22a0e2be86c7bc3b1a08ac156eba912dc10aae34?cid=774b29d4f13844c495f206cafdad9c86" coverUrl="https://i.scdn.co/image/2e9f7dcf75d85b94b2de0756fbfa10f8c8692880"/>
          </Reccomendations>
        </div>
      </div>

    )
  }
}

export default PlaylistEditor