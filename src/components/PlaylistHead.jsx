import React, { Component } from "react"

import Dropdown, { DropdownItem } from "./Dropdown"

import "../style/PlaylistHead.css"

class PlaylistHead extends Component {
  render() {
    return (
      <div className="PlaylistHead">
        <img src={ this.props.coverUrl } alt=""/>
        <div className="content">
          <span>PLAYLIST</span>
          <h1>{ this.props.title }</h1>
          <p>{ this.props.description }</p>
          <p>
            { this.props.numberOfSongs } songs,
            { this.props.duration }
          </p>
          <Dropdown>
            <div className="options">
              <i class="material-icons">more_horiz</i>
            </div>
            <DropdownItem>Test</DropdownItem>
          </Dropdown>
        </div>
      </div>
    )
  }
}

export default PlaylistHead
