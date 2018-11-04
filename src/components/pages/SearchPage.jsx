import React, { Component } from "react"

import { AppContext } from "../../context"

import Search from "../Search"
import SongTable from "../SongTable"
import SongRow from "../SongRow"

import "../../style/layout.css"

class SearchPage extends Component {
  render() {
    return (
      <div className="App">
        <Search />

        <div className="container">
          <SongTable headers={["Track", "Length", "BPM", "Key"]}>
            <AppContext.Consumer>
              {(context) => Object.values(context.search.suggestions).map((suggestion) => (
                <SongRow
                  key={suggestion.Song.ID}
                  selected={false}
                  type="create"
                  id={suggestion.Song.ID}
                  artist={suggestion.Song.Artist}
                  bpm={suggestion.Song.BPM}
                  musicalKey={suggestion.Song.Key}
                  duration={suggestion.Song.Duration}
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
