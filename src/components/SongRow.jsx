import React, { Component } from "react"
import { withRouter } from "react-router-dom"

import { AppContext } from "../context"

import "../style/SongRow.css"

class SongRow extends Component {
  constructor(props){
    super(props)

    this.state = {
      selected: this.props.selected,
      id: this.props.id
    }
  }

  createPlaylist = (id, context) => {
    context.playlist.addSong(this.props.id)
    this.props.history.push("/playlist/")
  }

  render() {
    return (
      <div className={`rowWrapper ${this.props.selected ? "selected" : ""}`} onClick={this.props.onClick}>
        <div className={"songRow"}>
          <div className="mainData">
            <div className="coverImage" src={ this.props.coverURL }></div>
            <div className="songData">
              <span className="songTitle">{ this.props.title }</span>
              <span className="songArtist">{ this.props.artist }</span>
            </div>
          </div>
          <span className="meta">{ this.props.duration }</span>
          <span className="meta">{ this.props.bpm }</span>
          <span className="meta">{ this.props.musicalKey }</span>

          <AppContext.Consumer>
            {(context) => {
              if(this.props.type === "dropdown") {
                return <div className="rowButton">
                  <div className="dropdown">...</div>
                </div>
              } else if (this.props.type === "add") {
                return <div className="rowButton"
                  onClick={() => context.playlist.addSong(this.props.id)}>
                  <div className="create">Add</div>
                </div>
              } else if (this.props.type === "create") {
                return <div className="rowButton"
                  onClick={() => this.createPlaylist(this.props.id, context)}>
                  <div className="create">Create</div>
                </div>
              }
            }}
          </AppContext.Consumer>
        </div>
      </div>
    )
  }
}

export default withRouter(SongRow)