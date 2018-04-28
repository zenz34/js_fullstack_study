import React, { Component } from "react";
import SearchBar from "./SearchBar";
import BookShelf from "./BookShelf";
import * as BooksAPI from "./BooksAPI";

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
        console.log("changeShelfOfBook2   shelf");
        console.log(shelf);
        console.log(book);
        BooksAPI.update(book, "wantToRead").then(res =>
            console.log("changeShelfOfBook333333   " + JSON.stringify(res))
        );
        //getBooks();
        console.log("changeShelfOfBook");
        console.log(book);
        this.setState(prevState => {
            let arr = prevState.searchResult.map(bookItem => {
                if (bookItem.id === book.id) {
                    bookItem.shelf = shelf;
                }
                return bookItem;
            });
            return { searchResult: arr };
        });
    };

    render() {
        return (
            <div>
                <SearchBar
                    searchInput={this.state.searchQuery}
                    inputOnChangeHandler={this.inputOnChangeHandler}
                />
                {console.log(
                    "BookSearch this.state.searchResult.length" +
                        this.state.searchResult.length
                )}
                {this.state.searchResult.length !== 0 && (
                    <BookShelf
                        books={this.state.searchResult}
                        onSelectOption={this.changeShelfOfBook}
                    />
                )}
            </div>
        );
    }
}
export default BookSearch;
