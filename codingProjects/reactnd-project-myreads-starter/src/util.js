export const changeShelfOfBook = (book, shelf, that, statePropName) => {
    BooksAPI.update(book, shelf);
    //getBooks();
    console.log("changeShelfOfBook");
    console.log(book);
    that.setState(prevState => {
        let arr = prevState[statePropName].map(bookItem => {
            if (bookItem.id === book.id) {
                bookItem.shelf = shelf;
            }
            return bookItem;
        });
        return { statePropName: arr };
    });
};
