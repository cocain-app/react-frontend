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
        const {data, loading, errors} = this.state;

        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <label>
                        Find suggestions:
                        <input 
                            id="songTitle"
                            name="songTitle"
                            type="text" 
                            placeholder="song title"
                            value={data.songTitle}
                            onChange={this.onChange}
                             />    
                    </label>
                    <input type="submit" value="Search"/>
                </form>    
            </div>
        );
    }
}

export default Search;