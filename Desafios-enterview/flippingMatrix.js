"use strict";

const arr = [
  [112, 42, 83, 119],
  [56, 125, 56, 49],
  [15, 78, 101, 43],
  [62, 98, 114, 108],
];
/*
112 42 83 119

56 125 56 49

15 78 101 43

62 98 114 108
*/
console.table(arr);

function flippingMatrix(matrix) {
  // Write your code here

  let aux = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      aux[j] = matrix[j][i];
    }
    aux.sort((a, b) => a - b);

    for (let j = 0; j < matrix[i].length; j++) {
      aux.sort((a, b) => b - a);
      matrix[j][i] = aux[j];
    }
  }

  matrix.forEach((element) => {
    element.sort((a, b) => b - a);
  });

  let square = matrix.length / 2;
  console.log(square);
  for (let i = 0; i < square; i++) {
    aux.push(matrix[i][i]);
  }
  aux = aux.reduce((a, b) => a + b, 0);

  return matrix;
}

console.table(flippingMatrix(arr));
//414
