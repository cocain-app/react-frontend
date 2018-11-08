import React, { Component } from "react"
import { withRouter } from "react-router-dom"

import { AppContext } from "../context"

import Dropdown, { DropdownItem } from "./Dropdown"
import Button from "./Button"
import CoverImage from "./CoverImage"

import "../style/SongRow.css"

class SongRow extends Component {
  constructor(props){
    super(props)

    this.state = {
      selected: this.props.selected,
      id: this.props.id
    }
  }

  addAndNavigate = (id, context) => {
    context.playlist.addSong(this.props.id)
    this.props.history.push("/playlist/")
  }

  getDurationText() {
    if(!this.props.duration){
      return ""
    }

    let ms = this.props.duration
    let minutes = parseInt(ms / 1000 / 60)
    let seconds = `${parseInt((ms / 1000) - (minutes * 60))}`.padStart(2, "0")

    return `${minutes}:${seconds}`
  }

  removeSong(e, context, id, index) {
    e.preventDefault()
    e.stopPropagation()
    context.playlist.removeSong(id, index)
  }

  render() {
    return (
      <div className={`rowWrapper ${this.props.selected ? "selected" : ""}`} onClick={this.props.onClick}>
        <div className={"songRow"}>
          <div className="mainData">
            <CoverImage imageUrl={this.props.coverURL} previewUrl={this.props.previewUrl} />
            <div className="songData">
              <span className="songTitle">{ this.props.title.length > 32 ? `${this.props.title.slice(0, 30)}...` : this.props.title }</span>
              <span className="songArtist">{ this.props.artist }</span>
            </div>
          </div>
          <span className="meta">{ this.getDurationText() }</span>
          <span className="meta">{ this.props.bpm }</span>
          <span className="meta">{ this.props.musicalKey }</span>

          <AppContext.Consumer>
            {(context) => {
              if(this.props.type === "dropdown") {
                return <div className="rowButton">
                  <Dropdown>
                    <div className="dropdown">
                      <i class="material-icons">more_horiz</i>
                    </div>
                    <DropdownItem onClick={
                      (e) => this.removeSong(e, context, this.props.id, this.props.index)
                    }>Remove from Playlist</DropdownItem>
                  </Dropdown>
                </div>
              } else if (this.props.type === "add") {
                return <div className="rowButton"
                  onClick={() => this.addAndNavigate(this.props.id, context)}>
                  <Button className="create">Add</Button>
                </div>
              } else if (this.props.type === "create") {
                return <div className="rowButton"
                  onClick={() => this.addAndNavigate(this.props.id, context)}>
                  <Button className="create">Create</Button>
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