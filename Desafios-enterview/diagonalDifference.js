"use strict";

const arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

function diagonalDifference(arr) {
  let firstDiagonal = 0;
  let secondDiagonal = 0;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    firstDiagonal += arr[i][i];
    count++;
  }
  count = count - 1;

  for (let i = 0; i < arr.length; i++) {
    secondDiagonal += arr[i][count];

    count--;
  }
  if (firstDiagonal > secondDiagonal) {
    return firstDiagonal - secondDiagonal;
  }
  return secondDiagonal - firstDiagonal;
}

console.log(diagonalDifference(arr));
