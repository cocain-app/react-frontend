import React, { Component } from 'react';
import '../style/SearchResults.css'

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
                    <div>Test</div>
                    <div>Test</div>
                    <div>Test</div>   
                </div>
            </div>
        );
    }
}

export default SearchResults;