import React, { Component } from "react"
import { withRouter } from "react-router-dom"

import { AppContext } from "../context"

import "../style/Search.css"

class Search extends Component {
  constructor(props){
    super(props)

    this.state = {
      progressIndicators: [],
    }

    this.searchInputRef = React.createRef()
  }

  onInput = (e, context) => {

    let progressIndicatorType = 0
    if(this.state.progressIndicators.length > 0) {
      progressIndicatorType = parseInt(
        this.state.progressIndicators[this.state.progressIndicators.length - 1]
      ) + 1

      if(progressIndicatorType === 5){
        progressIndicatorType = 0
      }
    }

    let newState = Object.assign({}, this.state)
    newState.progressIndicators.push(progressIndicatorType)
    this.setState(newState)

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
                  value={ context.search.query }
                  onInput={ (e) => this.onInput(e, context) }
                  autoComplete="off"
                />
                <label htmlFor="songTitle" className="searchInputLabel">
                  <span>Search</span>

                  {context.search.query && <div className="progressIndicators">
                    { this.state.progressIndicators.map(n => (
                      <div key={n} className={`progressIndicator color-${n}`}></div>
                    )) }
                  </div>}

                </label>
              </form>
            </div>
          </nav>
        )}
      </AppContext.Consumer>
    )
  }
}

export default withRouter(Search)