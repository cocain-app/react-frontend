import React, { Component } from "react"
import AutosizeInput from "react-input-autosize"

import Dropdown, { DropdownItem } from "./Dropdown"

import "../style/PlaylistHead.css"

class PlaylistHead extends Component {
  render() {
    return (
      <div className="PlaylistHead">
        <img src={ this.props.coverUrl } alt=""/>
        <div className="content">
          <span>PLAYLIST</span>
          <div class="input-group">
            <AutosizeInput className="title" type="text"
              id="title"
              onInput={(e) => this.props.context.playlist.setTitle(e.target.value)}
              value={this.props.title} />
            <label htmlFor="title">&#xe3c9;</label>
          </div>
          <div class="input-group">
            <AutosizeInput className="description" type="text"
              id="description"
              onInput={(e) => this.props.context.playlist.setDescription(e.target.value)}
              value={this.props.description}/>
            <label htmlFor="description">&#xe3c9;</label>
          </div>
          <p>
            {this.props.numberOfSongs} songs, &nbsp;
            {parseInt(this.props.duration / 1000 / 60)} minutes
          </p>
          <Dropdown>
            <div className="options">
              <i class="material-icons">more_horiz</i>
            </div>
            <DropdownItem onClick={() => this.props.context.playlist.exportPlaylist()}>Export playlist</DropdownItem>
          </Dropdown>
        </div>
      </div>
    )
  }
}

export default PlaylistHead
