const bookslist = require("./arrays");
const changePlaces = require("./findSmaller");

function quickSort(array, left, right) {
  if (array.length > 1) {
    let actualIndex = splitOrArray(array, left, right);
    if (left < actualIndex - 1) {
      quickSort(array, left, actualIndex - 1);
    }
    if (actualIndex < right) {
      quickSort(array, actualIndex, right);
    }
  }
  return array;
}

function splitOrArray(array, left, right) {
  console.log(array);
  console.log(`Esquerda: ${left} e Direita: ${right}`);

  let pivot = array[Math.floor((left + right) / 2)];
  let actualLeft = left;
  let actualRight = right;

  while (actualLeft <= actualRight) {
    while (array[actualLeft].preco < pivot.preco) {
      //Da esquerda para direita
      actualLeft++;
    }
    while (array[actualRight].preco > pivot.preco) {
      //Da direita para a esquerda
      actualRight--;
    }

    if (actualLeft <= actualRight) {
      changePlaces(array, actualLeft, actualRight);
      actualLeft++;
      actualRight--;
    }
  }
  return actualLeft;
}

console.log(quickSort(bookslist, 0, bookslist.length - 1));
