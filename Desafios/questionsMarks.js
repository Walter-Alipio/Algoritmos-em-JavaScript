/*
  Have the function QuestionsMarks(str) take the str string parameter, which will contain single digit numbers, letters, and question marks, and check if there are exactly 3 question marks between every pair of two numbers that add up to 10. If so, then your program should return the string true, otherwise it should return the string false. If there aren't any two numbers that add up to 10 in the string, then your program should return false as well.

  For example: if str is "arrb6???4xxbl5???eee5" then your program should return true because there are exactly 3 question marks between 6 and 4, and 3 question marks between 5 and 5 at the end of the string.
  
*/
const test1 = "arrb6???4xxbl5???eee5";
const test2 = "aa6?9";
const test3 = "acc?7??sss?3rr1??????5";

function questionMarks(str) {
  //quebra em um array separando os blocos entre os dígitos
  const array = str.split(/\d+/);
  //testa se os elementos contem 3 ou mais "?"
  const arr = array.map((element) => /(\?){3,}/.test(element));

  return arr.includes(true) ? true : false;
}

console.log(questionMarks(test1));
console.log(questionMarks(test2));
console.log(questionMarks(test3));
