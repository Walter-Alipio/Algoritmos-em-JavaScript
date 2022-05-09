const books = require("../booksList");
const lowerValue = require("../lowerValue");

/* lista em ordem do menor ao maior valor dos livros */

//Utilizando forEach
books.forEach((_, indice) => {
    let lower = lowerValue(books, indice);

    let currentBook = books[indice];
    let lowerPriceBook = books[lower];

    books[indice] = lowerPriceBook;
    books[lower] = currentBook;
});

console.log(books);
