const listaLivros = require("./arrays");
("use strict");
//nesse algoritmo divide
function mergeSort(array) {
  if (array.length > 1) {
    const middle = Math.floor(array.length / 2);
    //usando recursividade para ordenação
    const part1 = mergeSort(array.slice(0, middle));
    const part2 = mergeSort(array.slice(middle, array.length));
    array = ordered(part1, part2);
  }
  return array;
}

//função que retorna 1 único array ordenado
function ordered(part1, part2) {
  let actualPositionPart1 = 0;
  let actualPositionPart2 = 0;
  const result = [];

  while (
    actualPositionPart1 < part1.length &&
    actualPositionPart2 < part2.length
  ) {
    let productAtualPart1 = part1[actualPositionPart1];
    let productAtualPart2 = part2[actualPositionPart2];

    if (productAtualPart1.preco < productAtualPart2.preco) {
      result.push(productAtualPart1);
      actualPositionPart1++;
    } else {
      result.push(productAtualPart2);
      actualPositionPart2++;
    }
  }

  return result.concat(
    actualPositionPart1 < part1.length
      ? part1.slice(actualPositionPart1)
      : part2.slice(actualPositionPart2)
  );
}

console.log(mergeSort(listaLivros));
