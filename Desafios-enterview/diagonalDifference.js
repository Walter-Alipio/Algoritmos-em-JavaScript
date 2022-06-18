"use strict";

const arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

function diagonalDifference(arr) {
  let firstDiagonal = 0;
  let secondDiagonal = 0;
  let arrLength = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    firstDiagonal += arr[i][i];
    secondDiagonal += arr[i][arrLength];
    arrLength--;
  }

  return firstDiagonal > secondDiagonal
    ? firstDiagonal - secondDiagonal
    : secondDiagonal - firstDiagonal;
}

console.log(diagonalDifference(arr));
