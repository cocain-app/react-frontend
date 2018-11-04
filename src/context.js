import React from 'react';

export const AppContext = React.createContext()

export class AppProvider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            playlist: {
              title: "Test",
              description: "Test Description",
              songs: []
            }
        }
    }

    render() {
        return (
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}