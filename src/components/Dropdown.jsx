import React, { Component } from 'react';

import '../style/Dropdown.css'

export const DropdownItem = ({children}) => (
    <li className="DropdownItem">{children}</li>
)

export const DropdownGroup = ({children}) => (
    <li className="DropdownGroup">{children}</li>
)

export const DropdownTarget = ({children, clickHandler}) => (
    <span onClick={() => clickHandler()}>
        { children }
    </span>
)

class Dropdown extends Component {
    constructor(props) {
        super(props);

        this.state = {
            expanded: true
        }
    }

    toggle() {
        this.setState({
            expanded: !this.state.expanded
        })
    }

    render() {
        return (
            <div className={`Dropdown ${this.props.start ? "start" : ""} ${this.props.end ? "end" : ""}`}>
                <DropdownTarget clickHandler={() => this.toggle()}>
                    { this.props.children[0] }
                </DropdownTarget>

                { this.state.expanded && (
                    <div className={`wrapper`}>
                        <div className="menu">
                          { this.props.children.slice(1) }
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default Dropdown;
