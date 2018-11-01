import React, { Component } from 'react';

import '../style/PlaylistHead.css'

class PlaylistHead extends Component {
    render() {
        return (
            <div className="PlaylistHead">
				<img src={ this.props.coverUrl } alt=""/>
				<div className="content">
					<span>PLAYLIST</span>
					<h1>Loving You Is Easy (S.P.Y Remix)</h1>
					<p>This is yet another description of a playlist</p>
					<p>1 song, 3 min</p>
					<div className="options">...</div>
				</div>

            </div>
        );
    }
}

export default PlaylistHead;
