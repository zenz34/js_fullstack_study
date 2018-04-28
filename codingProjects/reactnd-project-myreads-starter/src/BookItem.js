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
                            onChange={e => {
                                //console.log("BookItem Select onChange");
                                //console.log(e.target.value);
                                this.setState(
                                    { selection: e.target.value },
                                    () => {
                                        this.props.onSelectOptionHandler(
                                            this.props.book,
                                            this.state.selection
                                        );
                                    }
                                );
                            }}
                        >
                            <option value="moveTo" disabled>
                                Move to...
                            </option>
                            {shelfNameArr.map(shelf => (
                                <option value={shelf.shelfServerValue}>
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

// onClick={() => {
//     console.log("BookItem onClick");
//     this.props.onSelectOption(
//         this.props.book,
//         shelf.shelfServerValue
//     );
// }}

{
    /* <div>
    {this.props.book.title} + {this.props.book.imageLinks.thumbnail}{" "}
    + {authorsStr} + {this.props.book.shelf}
</div> */
}

// <option value="currentlyReading" selected={"currentlyReading" === this.props.book.shelf} defaultValue={} onClick={e => {
//         this.props.onSelectOption(this.props.book, e.target.value);
//     }}>
//     Currently Reading
// </option>
// <option value="wantToRead" selected={"wantToRead" === this.props.book.shelf} onClick={e => {
//         this.props.onSelectOption(this.props.book, e.target.value);
//     }}>
//     Want to Read
// </option>
// <option value="read" selected={"read" === this.props.book.shelf} onClick={e => {
//         this.props.onSelectOption(this.props.book, e.target.value);
//     }}>
//     Read
// </option>
// <option value="none" onClick={e => {
//         this.props.onSelectOption(this.props.book, e.target.value);
//     }}>
//     None
// </option>
