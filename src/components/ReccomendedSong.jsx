import React, { Component } from "react"

import "../style/ReccomendedSong.css"

class ReccomendedSong extends Component {
  constructor(props){
    super(props)

    this.state = {
      hovered: false,
      playing: false
    }

    this.audioRef = React.createRef()
  }

  handleMouseEnter() {
    this.setState({
      hovered: true
    })
  }

  handleMouseLeave() {
    this.setState({
      hovered: false
    })

    this.stopAudioPlayback()
  }

  startAudioPlayback() {
    this.audioRef.current.play()

    this.setState({
      playing: true
    })
  }

  stopAudioPlayback() {
    this.audioRef.current.pause()

    this.setState({
      playing: false
    })
  }

  render() {
    return (
      <div className="ReccomendedSong"
        onMouseEnter={() => this.handleMouseEnter()}
        onMouseLeave={() => this.handleMouseLeave()}>
        { this.state.hovered ? (
          <div className="overlay">

            { this.state.playing ? (
              <span className="pause" onClick={() => this.stopAudioPlayback()}>||</span>
            ) : (
              <span className="play" onClick={() => this.startAudioPlayback()}>►</span>
            ) }

            <span className="add">+</span>
          </div>
        ) : (
          <div></div>
        ) }

        <div className="container">
          <img src={this.props.coverUrl} alt="Cover" />
          <div className="meta">
            <h4>{this.props.title}</h4>
            <p>
              <span>{this.props.artist}</span>
              <span>·</span>
              <span>{this.props.bpm}</span>
              <span>·</span>
              <span>{this.props.musicalKey}</span>
            </p>
          </div>
        </div>

        <audio controls loop ref={this.audioRef}>
          <source src={this.props.previewUrl} type="audio/mpeg" />
        </audio>
      </div>
    )
  }
}

export default ReccomendedSong
