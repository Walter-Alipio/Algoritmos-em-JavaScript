/*
  Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567"
*/

const test1 = "Hello world123 567";
const test2 = "fun&!! time_$#@ ";

const LongestWord = (sen) => {
  const arr = sen.match(/[a-zA-Z0-9]+/g); //Retorna um array com elementos que satisfazem a regex.

  /* abro o array a onde existem os acentos e filtro um novo array usando regex para tirar espaços vazios*/
  //const arr = [...array.split(/[.,!;:?]/g)].filter((item) => /\S/.test(item));

  arr.sort((a, b) => b.length - a.length);

  return console.log(`The longest word is ${arr[0]}`);
};

LongestWord(test1);
LongestWord(test2);
