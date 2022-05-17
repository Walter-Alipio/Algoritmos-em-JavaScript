const books = require("./booksList.js");
const lowerValue = require("./lowerValue.js");
const replace = require("./replace.js");

/* lista em ordem do menor ao maior valor dos livros */

//Algoritmo usando for classico
for (let current = 0; current < books.length; current++) {
  console.log(current);
  let lower = lowerValue(books, current); //verifica o valor de índice do livro mais barato
  replace(books, current, lower);
}
console.table(books);
