import React, { Component } from 'react';
import '../style/Search.css'

class Search extends Component {
    constructor(props){
        super(props)

        //state - data = input from form
        this.state = {
            data: {},
            loading: false,
            errors: {},   
        }
    }

    //TRIGGER: state/props change
    componentDidUpdate(prevProps,prevState){
        //if searchQuery changed
        if(prevState.data !== this.state.data){
            //search for songs using props func
            this.props
                .submit(Object.assign(this.state.data));
            //TODO: catch error or missing results
        }
    }

    //TRIGGER: search input changed
    onChange = e => {
        //[e.target.name] - returns name of field (-> useful for multible search fields)
        this.setState({
            ...this.state,
            data: {
                ...this.state.data, [e.target.name]: e.target.value
            }
        })
    }

    //TRIGGER: click on submit button
    onSubmit = e => {
        e.preventDefault();

        //TODO: display and update loading state
        this.setState({
            ...this.state,
            isLoading: true
        })
        //search for songs using props func
        this.props
            .submit(Object.assign(this.state.data))
        //TODO: catch error or missing results
    }

    render() {
        //state/props shortcuts
        const {data} = this.state;

        return (
            <nav>
                <div className="logo">

                </div>
                <div className="searchBar">
                    <form onSubmit={this.onSubmit}>
                        <input 
                            id="songTitle"
                            name="songTitle"
                            className="searchInput"
                            type="text" 
                            placeholder="Search for a song ..."
                            value={data.songTitle}
                            onChange={this.onChange}
                            autoComplete="off"
                        />
                    </form>    
                </div>
            </nav>
        );
    }
}

export default Search;