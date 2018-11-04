import React, { Component } from "react"

import "../style/Reccomendations.css"

class Reccomendations extends Component {
  constructor(props) {
    super(props)

    this.state = {
      expanded: true
    }
  }

  collapse() {
    this.setState({
      expanded: false
    })
  }

  expand() {
    this.setState({
      expanded: true
    })
  }

  render() {
    return (
      <div className="Reccomendations_wrapper">
        { this.state.expanded && <div className="Reccomendations_pseudo" /> }
        <div className="Reccomendations">
          <h2>Recomended Songs based on <a href="#">{this.props.base}</a>
            { this.state.expanded ? (
              <span className="close" onClick={() => this.collapse()}>▼</span>
            ) : (
              <span className="expand" onClick={() => this.expand()}>▲</span>
            ) }
          </h2>

          { this.state.expanded ? (
            <div className="wrapper">
              <div className="view">
                { this.props.children }
              </div>

              {
                //TODO: Enable scrolling
                false && <span className="next">></span>
              }
            </div>
          ) : (<div />) }

        </div>
      </div>
    )
  }
}

export default Reccomendations
