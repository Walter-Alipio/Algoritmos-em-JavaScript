/*

Have the function PrimeTime(num) take the num parameter being passed and return the string true if the parameter is a prime number, otherwise return the string false. The range will be between 1 and 2^16.

*/
const num = [11, 110, 2 ** 16];

function primeTime(num) {
  if (num <= 1) return false;

  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      count++;
    }
  }

  return count === 2 ? true : false;
}

console.log(primeTime(num[0]));
console.log(primeTime(num[1]));
console.log(primeTime(num[2]));
