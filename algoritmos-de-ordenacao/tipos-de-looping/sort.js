const books = require("../booksList");

/* lista em ordem do menor ao maior valor dos livros */

//refatorando para usar o método sort usando algoritmo de ordenação presente no V8
books.sort((a, b) => {
  return a.price - b.price;
});

console.log(books);
