import React, { Component } from 'react';
import '../style/SongRow.css';

class SongRow extends Component {
    constructor(props){
        super(props);

        this.state = {
            selected: this.props.selected,
            id: this.props.id
        }
    }

    getButton = type => {
        switch(type){
            case "create":
                    //TODO: Change to Link
                return (
                    <div className="create">
                        Create
                    </div>
                );
            case "dropdown":
                    //TODO: Change to dropdown menu
                return (
                    <div className="dropdown">
                        ...
                    </div>
                );
            case "add":
                //TODO: Change to dropdown menu
                return (
                    <div className="create">
                        Add
                    </div>
                );
            default:
                return
        }
    }

    render() {
      console.log(this.props);
        return (
            <div className={`rowWrapper ${this.props.selected ? 'selected' : ''}`}>
                <div className={"songRow"}>
                    <div className="mainData">
                        <div className="coverImage" src={this.props.coverURL}></div>
                        <div className="songData">
                            <span className="songTitle">{this.props.title}</span>
                            <span className="songArtist">{this.props.artist}</span>
                        </div>
                    </div>
                    <span className="meta">{this.props.duration}</span>
                    <span className="meta">{this.props.bpm}</span>
                    <span className="meta">{this.props.musicalKey}</span>
                    <div className="rowButton">
                        {this.getButton(this.props.type)}
                    </div>
                </div>
            </div>
        );
    }
}

export default SongRow;