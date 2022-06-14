const booksList = require("./orderLIst");

function find(array, from, until, searchValue) {
  const midle = Math.floor((from + until) / 2);
  const actual = array[midle];

  if (from > until) {
    return -1;
  }

  if (searchValue === actual.preco) {
    return midle;
  }

  if (searchValue < actual.preco) {
    return find(array, from, midle - 1, searchValue);
  }

  if (searchValue > actual.preco) {
    return find(array, midle + 1, until, searchValue);
  }
}

console.log(find(booksList, 0, booksList.length - 1, 20));

/*Importante destacar que a lista ja se encontra ordenada, assim usamos uma função recursiva que vai quebrando a lista em partes menores até achar o resultado*/
