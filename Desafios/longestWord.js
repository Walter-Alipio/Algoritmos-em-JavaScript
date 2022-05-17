/*
  Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567"
*/

const phrase = "Hello world123 567";

const LongestWord = (sen) => {
  let count = 0;

  const arr = sen.split(" ");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > arr[count].length) count = i;
  }

  return console.log(arr[count]);
};

LongestWord(phrase);
