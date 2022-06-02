/*
  Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers. 
*/

function miniMaxSum(arr) {
  arr.sort((a, b) => a - b);
  const min = arr.slice(0, arr.length - 1);
  const max = arr.slice(1, arr.length);
  const minSum = min.reduce((a, b) => a + b, 0);
  const maxSum = max.reduce((a, b) => a + b, 0);
  return console.log(minSum, maxSum);
}

miniMaxSum([7, 69, 2, 221, 8974]);
