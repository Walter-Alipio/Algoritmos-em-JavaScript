const books = require("../booksList");
const lowerValue = require("../lowerValue");
const change = require("../change");

/* lista em ordem do menor ao maior valor dos livros */

//Algoritmo usando for classico
for (let current = 0; current < books.length; current++) {
  console.log(current);
  let lower = lowerValue(books, current); //verifica o valor de índice do livro mais barato
  change(books, current);
}
console.log(books);
