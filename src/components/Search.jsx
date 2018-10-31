import React, { Component } from 'react';

class Search extends Component {
    constructor(props){
        super(props)

        this.state = {
            data: {},
            loading: false,
            errors: {},   
        }
    }

    componentDidUpdate(prevProps,prevState){
        if(prevState.data !== this.state.data){
            this.props
                .submit(Object.assign(this.state.data))
        }
    }

    onChange = e => {
        this.setState({
            ...this.state,
            data: {
                ...this.state.data, [e.target.name]: e.target.value
            }
        })
        //show song name suggestions
    }

    onSubmit = e => {
        e.preventDefault();

        this.setState({
            ...this.state,
            isLoading: true
        })
        this.props
            .submit(Object.assign(this.state.data))
    }

    render() {
        const {data} = this.state;
        const {suggestions} = this.props

        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input 
                        id="songTitle"
                        name="songTitle"
                        type="text" 
                        placeholder="song title"
                        value={data.songTitle}
                        onChange={this.onChange}
                        autoComplete="off"
                    />
                    <input type="submit" value="Search"/>
                    {
                        Object.values(suggestions).map((song) => 
                        <ul key={song.ID}>{JSON.stringify(song)}</ul>
                        )
                    }
                </form>    
            </div>
        );
    }
}

export default Search;