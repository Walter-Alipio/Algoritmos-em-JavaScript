/*
  Have the function FindIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements: the first element will represent a list of comma-separated numbers sorted in ascending order, the second element will represent a second list of comma-separated numbers (also sorted). Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order. If there is no intersection, return the string false.

*/

const example1 = ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"];
const example2 = ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"];

function findIntersection(strArr) {
  const firstElement = strArr[0].split(",");
  const secondElement = strArr[1].split(",");
  const newArray = [];

  for (let i = 0; i <= firstElement.length; i++) {
    for (let j = 0; j < secondElement.length; j++) {
      if (firstElement[i] === secondElement[j]) {
        newArray.push(firstElement[i]);
      }
    }
  }

  if (!newArray.length) {
    return false;
  }
  return newArray.join();
}

console.log(findIntersection(example1));
console.log(findIntersection(example2));
console.log(findIntersection(["1,2,3,4", "5,6,7,8"]));
