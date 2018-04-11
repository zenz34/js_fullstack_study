import React, { Component } from "react";

class SearchBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <input
                type="text"
                onChange={this.props.onChHandler}
                text={this.props.val}
            />
        );
    }
}

export default SearchBar;
