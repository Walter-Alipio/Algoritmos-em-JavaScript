const books = require("../booksList");
const lowerValue = require("../lowerValue");

/* lista em ordem do menor ao maior valor dos livros */

//refatorando para usar o metodo sort usando algoritmo de ordenação presente no V8
books.sort((a, b) => {
    return a.price - b.price;
});

console.log(books);
