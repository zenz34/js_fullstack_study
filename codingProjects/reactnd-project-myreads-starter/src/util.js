import * as BooksAPI from "./BooksAPI";

export const utilUpdateShelfOfBook = (book, shelf, origArr) => {
    BooksAPI.update(book, shelf).then(res =>
        console.log("changeShelfOfBook result:   " + JSON.stringify(res))
    );

    let newArr = origArr.map(bookItem => {
        if (bookItem.id === book.id) {
            bookItem.shelf = shelf;
        }
        return bookItem;
    });

    return newArr;
};
