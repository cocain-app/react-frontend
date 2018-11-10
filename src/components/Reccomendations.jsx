import React, { Component } from "react"

import "../style/Reccomendations.css"

class Reccomendations extends Component {
  constructor(props) {
    super(props)

    this.state = {
      expanded: true,
      remainingScroll: 0
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

  onScroll = (e) => {
    let remainingScroll = (e.target.scrollWidth - e.target.clientWidth) - e.target.scrollLeft
    this.setState({
      ...this.state,
      remainingScroll: remainingScroll
    })
  }

  render() {
    return (
      <div className="Reccomendations_wrapper">

        {(this.props.children === undefined || (this.props.children && this.props.children.length === 0)) && (
          <div className="Reccomendations">
            <div className="placeholder">
              <h2>No reccomendations found</h2>
              <p>Unfortuneatly we don't have any record of fitting songs.</p>
            </div>
          </div>
        )}

        {this.props.children !== undefined && (
          <div className="Reccomendations">
            <h2>
              <p>Recomended Songs based on <a href="#">{this.props.base}</a></p>
              { this.state.expanded ? (
                <span className="close" onClick={() => this.collapse()}>
                  <i class="material-icons">expand_more</i>
                </span>
              ) : (
                <span className="expand" onClick={() => this.expand()}>
                  <i class="material-icons">expand_less</i>
                </span>
              ) }
            </h2>

            { this.state.expanded ? (
              <div className="wrapper">
                <div
                  onScroll={(e) => this.onScroll(e)}
                  className={`view ${this.state.remainingScroll < 300 ? "no-fade" : "fade"}`}>
                  { this.props.children }
                </div>
              </div>
            ) : (<div />) }

          </div>
        )}
      </div>
    )
  }
}

export default Reccomendations
