import React, { Component } from "react";
import BookItem from "./BookItem";

class BookShelf extends Component {
    constructor(props) {
        super(props);
        // shelf + books    =>  filter
        // onSelectOption={this.changeShelfOfBook}
        //  should I just put the map() in render or I put it in the constructor and willReceiveProps event?
    }

    componentWillReceiveProps(nextProps) {}
    render() {
        let books = this.props.books;
        console.log("BookShelf");
        console.log(Array.isArray(books));
        return (
            <ol className="books-grid">
                {books.map(item => (
                    <li key={item.title}>
                        <BookItem
                            book={item}
                            onSelectOptionHandler={this.props.onSelectOption}
                        />
                    </li>
                ))}
            </ol>
        );
    }
}

export default BookShelf;
