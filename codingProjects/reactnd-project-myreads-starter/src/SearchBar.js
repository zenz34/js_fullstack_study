import React, { Component } from "react";
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";

//  need   change Link : del text, use a className

class SearchBar extends Component {
    render() {
        return (
            <div className="search-books-bar">
                <Link to="/" className="close-search">
                    Back
                </Link>
                <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        onChange={this.props.inputOnChangeHandler}
                        value={this.props.searchInput}
                    />
                </div>
            </div>
        );
    }
}

export default SearchBar;
