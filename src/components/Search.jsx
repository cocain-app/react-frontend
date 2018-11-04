import React, { Component } from "react"
import { withRouter } from "react-router-dom"

import { AppContext } from "../context"

import "../style/Search.css"

class Search extends Component {
  constructor(props){
    super(props)

    this.searchInputRef = React.createRef()
  }

  onInput = (e, context) => {
    context.search.onInput(e)

    if(e.target.value === "" && context.playlist.songs.length > 0) {
      this.props.history.push("/playlist/")
      return
    }

    if(this.props.history.location.pathname !== "/") {
      this.props.history.push("/")
    }
  }

  componentDidMount() {
    if(this.props.history.location.pathname === "/") {
      this.searchInputRef.current.focus()
    }
  }

  render() {
    return (
      <AppContext.Consumer>
        {(context) => (
          <nav>
            <div className="logo">

            </div>
            <div className="searchBar">
              <form>
                <input
                  ref={this.searchInputRef}
                  id="songTitle"
                  name="songTitle"
                  className="searchInput"
                  type="text"
                  placeholder="Search for a song ..."
                  value={ context.search.query }
                  onInput={ (e) => this.onInput(e, context) }
                  autoComplete="off"
                />
              </form>
            </div>
          </nav>
        )}
      </AppContext.Consumer>
    )
  }
}

export default withRouter(Search)