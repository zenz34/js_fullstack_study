import React, { Component } from "react";
import { shelfNameArr } from "./config";

class BookItem extends Component {
    constructor(props) {
        super(props);
        console.log("BookItem");
        console.log(this.props.book);
        // this.props.book:  title  imageLinks.thumbnail  authors[]  shelf
        // onSelectOption
        this.state = {
            // url?
            selection:
                this.props.book.shelf === undefined
                    ? "none"
                    : this.props.book.shelf
        };
    }

    onChangeHandler = e => {
        this.setState({ selection: e.target.value }, () => {
            //  call changeShelfOfBook func, pass in current book and new selected shelf
            this.props.onSelectOptionHandler(
                this.props.book,
                this.state.selection
            );
        });
    };

    render() {
        let authorsStr;

        if (this.props.authors) {
            let authors = this.props.authors;
            authorsStr = authors.join(", ");
        }
        return (
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                            width: 128,
                            height: 192,
                            backgroundImage:
                                this.props.book.imageLinks === undefined
                                    ? "none"
                                    : `url(${
                                          this.props.book.imageLinks.thumbnail
                                      })`
                        }}
                    />
                    <div className="book-shelf-changer">
                        <select
                            value={this.state.selection}
                            onChange={this.onChangeHandler}
                        >
                            <option value="moveTo" disabled>
                                Move to...
                            </option>
                            {shelfNameArr.map(shelf => (
                                <option
                                    value={shelf.shelfServerValue}
                                    key={shelf.shelfServerValue}
                                >
                                    {shelf.displayName}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{authorsStr}</div>
            </div>
        );
    }
}

export default BookItem;
