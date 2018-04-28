import React, { Component } from "react";
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";

//  need   change Link : del text, use a className

class SearchBar extends Component {
    render() {
        return (
            <div>
                <Link to="/">Back</Link>
                <input
                    type="text"
                    onChange={this.props.inputOnChangeHandler}
                    value={this.props.searchInput}
                />
            </div>
        );
    }
}

export default SearchBar;
