"use strict";

const arr1 =
  "63 25 73 1 98 73 56 84 86 57 16 83 8 25 81 56 9 53 98 67 99 12 83 89 80 91 39 86 76 85 74 39 25 90 59 10 94 32 44 3 89 30 27 79 46 96 27 32 18 21 92 69 81 40 40 34 68 78 24 87 42 69 23 41 78 22 6 90 99 89 50 30 20 1 43 3 70 95 33 46 44 9 69 48 33 60 65 16 82 67 61 32 21 79 75 75 13 87 70 33".split(
    " "
  );
const arr = arr1.map((item) => parseInt(item));

// function countingSort(arr) {
//   // Write your code here

//   arr.sort((a, b) => a - b);

//   let arrayFinal = [];
//   for (let i = 0; i <= 100; i++) {
//     let count = 0;
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] === i) count++;
//     }
//     arrayFinal[i] = count;
//   }
//   return console.log(arrayFinal);
// }

function countingSort(arr) {
  // Write your code here
  const arrayOut = [];
  for (let index = 0; index < 100; index++) {
    arrayOut[index] = 0;
  }

  for (let i = 0; i < arr.length; i++) {
    if (i === 0) arrayOut[i] = 0;

    const aux = arr[i];
    arrayOut[aux] = arrayOut[aux] + 1;
  }
  return arrayOut;
}
console.log(countingSort(arr));

//2 0 0 2 1 2 1 0 2 2 1 2 1 2 1 1 2 2 0 3 2 1 1 0 1 1 1 0 2 2
