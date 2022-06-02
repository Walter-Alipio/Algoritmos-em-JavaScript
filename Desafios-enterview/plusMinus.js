"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
  let negative = 0;
  let positive = 0;
  let zero = 0;
  const n = arr.length;

  arr.forEach((element) => {
    element < 0 ? negative++ : "";
    element > 0 ? positive++ : "";
    element === 0 ? zero++ : "";
  });

  return [positive, negative, zero].forEach((item) => {
    console.log((item / n).toFixed(6));
  });
}

function main() {
  const n = parseInt(readLine().trim(), 10);

  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));
  console.log(arr);
  plusMinus(arr);
}
