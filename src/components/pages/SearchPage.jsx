import React, { Component } from "react"

import { AppContext } from "../../context"

import SongTable from "../SongTable"
import SongRow from "../SongRow"

import "../../style/layout.css"

class SearchPage extends Component {
  render() {
    return (
      <div className="Search Page">
        <div className="container">
          <SongTable headers={["Track", "Length", "BPM", "Key"]}>
            <AppContext.Consumer>
              {(context) => Object.values(context.search.suggestions).map((suggestion) => (
                <SongRow
                  key={suggestion.Song.ID}
                  selected={false}
                  type={context.playlist.songs.length > 0 ? "add" : "create" }
                  id={suggestion.Song.ID}
                  artist={suggestion.Song.Artist}
                  bpm={suggestion.Song.BPM}
                  musicalKey={suggestion.Song.Key}
                  duration={suggestion.Song.Duration}
                  coverURL={suggestion.Song.ImageURLSmall}
                  previewUrl={suggestion.Song.PreviewURL}
                  title={suggestion.Song.Title} />
              ))}
            </AppContext.Consumer>
          </SongTable>
        </div>
      </div>
    )
  }
}

export default SearchPage
