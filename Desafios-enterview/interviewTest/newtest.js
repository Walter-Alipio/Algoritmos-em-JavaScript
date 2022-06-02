const str = ["xyz", "foo", "of"];

function equals(arr) {
  const arrSemRep = [];
  const remDup = (s) =>
    s
      .split("")
      .filter((e, i, f) => f.indexOf(e) == i)
      .sort()
      .join("");

  for (let i = 0; i < arr.length; i++) {
    const strOrdenada = remDup(arr[i]);
    arrSemRep.push(strOrdenada);
  }

  let count = 0;

  for (let j = 0; j < arrSemRep.length; j++) {
    for (let k = 0; k < arrSemRep.length; k++) {
      if (j < k && arrSemRep[j] == arrSemRep[k]) {
        count++;
      }
    }
  }

  return count;
}

console.log(equals(str));
