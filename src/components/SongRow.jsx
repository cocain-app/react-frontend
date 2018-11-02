import React, { Component } from 'react';
import '../style/SongRow.css';

class SongRow extends Component {
    constructor(props){
        super(props);

        this.state = {
            selected: this.props.selected,
            id: this.props.song.id
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
        const {selected} = this.state;
        const {type} = this.props;
        const {title, artist, dur, bpm, key, coverURL} = this.props.song;

        return (
            <div className={`rowWrapper ${selected ? 'selected' : ''}`}>
                <div className={"songRow"}>
                    <div className="mainData">
                        <div className="coverImage" src={coverURL}></div>
                        <div className="songData">
                            <span className="songTitle">{title}</span>
                            <span className="songArtist">{artist}</span>
                        </div>
                    </div>
                    <span className="meta">{dur}</span>
                    <span className="meta">{bpm}</span>
                    <span className="meta">{key}</span>
                    <div className="rowButton">
                        {this.getButton(type)}
                    </div>
                </div>
            </div>
        );
    }
}

export default SongRow;