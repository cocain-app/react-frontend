import React, { Component } from "react"

import '../style/PlaylistHead.css'

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
      					<div className="options">...</div>
      				</div>
            </div>
        );
    }
}

export default PlaylistHead
