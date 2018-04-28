import React, { Component } from "react";
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";
import * as BooksAPI from "./BooksAPI";
import { utilUpdateShelfOfBook } from "./util";
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
    // changeShelfOfBook = (book, shelf) => {
    //     BooksAPI.update(book, shelf).then(res =>
    //         console.log("changeShelfOfBook   " + res)
    //     );
    //     //getBooks();
    //     console.log("changeShelfOfBook");
    //     console.log(book);
    //     this.setState(prevState => {
    //         let arr = prevState.booksArray.map(bookItem => {
    //             if (bookItem.id === book.id) {
    //                 bookItem.shelf = shelf;
    //             }
    //             return bookItem;
    //         });
    //         return { booksArray: arr };
    //     });
    // };

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
                                    books={this.state.booksArray.filter(
                                        book =>
                                            book.shelf === "currentlyReading"
                                    )}
                                    onSelectOption={this.changeShelfOfBook}
                                />
                            </div>
                        </div>
                        <div>
                            <h2>Want To Read</h2>
                            <BookShelf
                                books={this.state.booksArray.filter(
                                    book => book.shelf === "wantToRead"
                                )}
                                onSelectOption={this.changeShelfOfBook}
                            />
                        </div>
                        <div>
                            <h2>Read</h2>
                            <BookShelf
                                books={this.state.booksArray.filter(
                                    book => book.shelf === "read"
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
