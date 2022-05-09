const books = require("../booksList");
const lowerValue = require("../lowerValue");

/* lista em ordem do menor ao maior valor dos livros */

//usando for...in
for (let i in books) {
    console.log(i);
    let lower = lowerValue(books, i);

    let currentBook = books[i];
    let lowerPriceBook = books[lower];

    books[i] = lowerPriceBook;
    books[lower] = currentBook;
}

console.log(books);
