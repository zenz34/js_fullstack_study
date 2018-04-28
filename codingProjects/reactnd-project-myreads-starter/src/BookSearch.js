import React, { Component } from "react";
import SearchBar from "./SearchBar";
import BookShelf from "./BookShelf";
import * as BooksAPI from "./BooksAPI";
import { utilUpdateShelfOfBook } from "./util";

class BookSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResult: [],
            searchQuery: ""
        };
    }

    inputOnChangeHandler = e => {
        this.setState({ searchQuery: e.target.value }, () => {
            // console.log("BookSearch");

            /* use e.target.value    can not find value property, cause it's a async callback, e and e.target are not in scope*/
            BooksAPI.search(this.state.searchQuery).then(
                books => {
                    console.log(books);
                    if (books === undefined || !Array.isArray(books)) {
                        this.setState({ searchResult: [] });
                    } else {
                        this.setState({ searchResult: books });
                    }
                },
                rejected => this.setState({ searchResult: [] })
            );
        });
    };

    changeShelfOfBook = (book, shelf) => {
        let newBooksArr = utilUpdateShelfOfBook(
            book,
            shelf,
            this.state.searchResult
        );

        this.setState({
            searchResult: newBooksArr
        });
    };

    render() {
        return (
            <div className="search-books">
                <SearchBar
                    searchInput={this.state.searchQuery}
                    inputOnChangeHandler={this.inputOnChangeHandler}
                />
                <div className="search-books-results">
                    {this.state.searchResult.length !== 0 && (
                        <BookShelf
                            books={this.state.searchResult}
                            onSelectOption={this.changeShelfOfBook}
                        />
                    )}
                </div>
            </div>
        );
    }
}
export default BookSearch;
