const booksPrice = [25, 15, 30, 50, 45, 20];

let cheaper = 0;

/*O looping percorre a lista salvando o indice do livro mais barato*/
for (let current = 0; current < booksPrice.length; current++) {
    if (booksPrice[current] < booksPrice[cheaper]) cheaper = current;
}

console.log(`O livro mais barato custa ${booksPrice[cheaper]}`);
