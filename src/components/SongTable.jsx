import React, { Component } from "react"

import "../style/SongTable.css"

class SongTable extends Component {
  render() {
    return (
      <div className="songTable">
        <div className="header">
          <div className="headerGrid">
            { this.props.headers.map(header => (
              <span>{ header }</span>
            )) }
          </div>
          <div className="seperator"></div>
        </div>
        <div className="songRows">
          { this.props.children }
        </div>
      </div>
    )
  }
}

export default SongTable