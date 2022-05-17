const books = require("../booksList");
const lowerValue = require("../lowerValue");

/* lista em ordem do menor ao maior valor dos livros */

//usando for...of
for (let [indice, book] of books.entries()) {
    let lower = lowerValue(books, indice);

    books[indice] = books[lower];
    books[lower] = book;
}

console.log(books);
