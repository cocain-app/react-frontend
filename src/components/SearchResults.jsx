import React, { Component } from 'react';
import '../style/SearchResults.css'
import SongRow from './SongRow';
import songObject from './models/song';

class SearchResults extends Component {
    render() {
        return (
            <div className="songTable">
                <div className="header">
                    <div className="headerGrid">
                        <span>Track</span>
                        <span>Length</span>
                        <span>BPM</span>
                        <span>Key</span>
                    </div>
                    <div className="seperator"></div>
                </div>
                <div className="songRows">
                    <SongRow selected={false} type="create" song={songObject("key", "title", "artist", "3:46", 174, "C Major", "//:0")}/>
                    <SongRow selected={false} type="create" song={songObject("key", "title", "artist", "3:46", 174, "C Major", "//:0")}/>
                    <SongRow selected={false} type="create" song={songObject("key", "title", "artist", "3:46", 174, "C Major", "//:0")}/>
                </div>
            </div>
        );
    }
}

export default SearchResults;