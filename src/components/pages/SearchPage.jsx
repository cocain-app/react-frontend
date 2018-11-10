import React, { Component } from "react"

import { AppContext } from "../../context"

import SongTable from "../SongTable"
import SongRow from "../SongRow"

import "../../style/layout.css"

class SearchPage extends Component {
  render() {
    return (
      <div className="Search Page">
        <AppContext.Consumer>
          {(context) => (
            <React.Fragment>
              {context.search.suggestions.length === 0 && (
                <div className="placeholder">
                  <h2>Search Cocain</h2>
                  <p>Try looking for songs or artists.</p>
                </div>
              )}

              {context.search.suggestions.length > 0 && (
                <div className="container">
                  <SongTable headers={[
                    "Track", <i className="material-icons">schedule</i>, "BPM", "Key"]}>
                    { Object.values(context.search.suggestions).map((suggestion) => (
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
                  </SongTable>
                </div>
              )}
            </React.Fragment>
          )}
        </AppContext.Consumer>
      </div>
    )
  }
}

export default SearchPage
