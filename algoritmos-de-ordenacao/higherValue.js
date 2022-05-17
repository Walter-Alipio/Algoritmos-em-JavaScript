const books = require("./booksList.js");

let expensiver = 0;

/*O looping percorre a lista salvando o indice do livro mais caro*/
for (let current = 0; current < books.length; current++) {
    if (books[current].price > books[expensiver].price) expensiver = current;
}

console.log(
    `O livro mais barato custa ${books[cheaper].price} e o titulo é ${books[cheaper].title}`
);
console.log(
    `O livro mais caro custa ${books[expensiver].price} e o titulo é ${books[expensiver].title}`
);
