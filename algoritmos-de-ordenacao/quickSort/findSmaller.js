const bookslist = require("./arrays");

//Encontra elementos com valor menor do que o especificado pelo pivô
function findSmaller(pivot, array) {
  let smallers = 0;

  for (let i = 0; i < array.length; i++) {
    let actualProduct = array[i];

    if (actualProduct.preco < pivot.preco) {
      smallers++;
    }
  }

  changePlaces(array, array.indexOf(pivot), smallers);

  return array;
}

//Faz a troca de posição entre o elemento de menor e maior valor
function changePlaces(array, from, to) {
  const element1 = array[from];
  const element2 = array[to];

  array[to] = element1;
  array[from] = element2;
}

//agora os elementos serão separados a esquerda ou direita do pivô, menores de uma ldo maiores do outro
function splitOnPivot(array) {
  let pivot = array[Math.floor(array.length / 2)];
  console.log(pivot);

  findSmaller(pivot, array);
  let smallerValues = 0;

  for (let i = 0; i < array.length; i++) {
    let actual = array[i];
    if (actual.preco <= pivot.preco && actual !== pivot) {
      changePlaces(array, i, smallerValues);
      smallerValues++;
    }
  }

  return array;
}

module.exports = changePlaces;
//console.log(findSmaller(bookslist[2], bookslist));
//console.log(splitOnPivot(bookslist));
