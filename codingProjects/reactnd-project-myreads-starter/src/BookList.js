import React, { Component } from "react";
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";
import * as BooksAPI from "./BooksAPI";
import { utilUpdateShelfOfBook } from "./util";
import {
    CURRENTLYREADING_FILTER_STR,
    WANTTOREAD_FILTER_STR,
    READ_FILTER_STR
} from "./config";
import * as _ from "lodash";

class BookList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            booksArray: []
        };
    }

    getBooks() {
        BooksAPI.getAll().then(books => {
            this.setState({ booksArray: books });
        });
    }

    componentDidMount() {
        this.getBooks();
    }
    changeShelfOfBook = (book, shelf) => {
        let newBooksArr = utilUpdateShelfOfBook(
            book,
            shelf,
            this.state.booksArray
        );

        this.setState({ booksArray: newBooksArr });
    };

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>My Reads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">
                                Currently Reading
                            </h2>
                            <div className="bookshelf-books">
                                <BookShelf
                                    books={_.sortBy(
                                        this.state.booksArray.filter(
                                            book =>
                                                book.shelf ===
                                                CURRENTLYREADING_FILTER_STR
                                        ),
                                        "title"
                                    )}
                                    onSelectOption={this.changeShelfOfBook}
                                />
                            </div>
                        </div>
                        <div>
                            <h2>Want To Read</h2>
                            <BookShelf
                                books={_.sortBy(
                                    this.state.booksArray.filter(
                                        book =>
                                            book.shelf === WANTTOREAD_FILTER_STR
                                    ),
                                    "title"
                                )}
                                onSelectOption={this.changeShelfOfBook}
                            />
                        </div>
                        <div>
                            <h2>Read</h2>
                            <BookShelf
                                books={_.sortBy(
                                    this.state.booksArray.filter(
                                        book => book.shelf === READ_FILTER_STR
                                    ),
                                    "title"
                                )}
                                onSelectOption={this.changeShelfOfBook}
                            />
                        </div>
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">Search</Link>
                </div>
            </div>
        );
    }
}

export default BookList;
