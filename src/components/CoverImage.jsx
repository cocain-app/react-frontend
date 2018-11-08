import React, { Component } from "react"

import "../style/CoverImage.css"

class CoverImage extends Component {
  constructor(props){
    super(props)

    this.state = {
      hovered: false,
      playing: false
    }

    this.audioRef = React.createRef()
  }

  handleMouseEnter(e) {
    this.setState({
      hovered: true
    })
  }

  handleMouseLeave(e) {
    this.setState({
      hovered: false
    })

    this.stopAudioPlayback(e)
  }

  startAudioPlayback(e) {
    e.preventDefault()
    e.stopPropagation()

    this.audioRef.current.play()

    this.setState({
      playing: true
    })
  }

  stopAudioPlayback(e) {
    e.preventDefault()
    e.stopPropagation()

    this.audioRef.current.pause()

    this.setState({
      playing: false
    })
  }

  render() {
    return (
      <div className="CoverImage"
        onMouseLeave={(e) => this.handleMouseLeave(e)}
        onMouseEnter={(e) => this.handleMouseEnter(e)}>
        { this.state.hovered && <div className="overlay">
          { this.state.playing ? (
            <span className="pause" onClick={(e) => this.stopAudioPlayback(e)}>
              <i class="material-icons">pause</i>
            </span>
          ) : (
            <span className="play" onClick={(e) => this.startAudioPlayback(e)}>
              <i class="material-icons">play_arrow</i>
            </span>
          ) }
        </div> }

        <img src={this.props.imageUrl} alt=""/>
        <audio controls loop ref={this.audioRef}>
          <source src={this.props.previewUrl} type="audio/mpeg" />
        </audio>
      </div>
    )
  }
}

export default CoverImage
