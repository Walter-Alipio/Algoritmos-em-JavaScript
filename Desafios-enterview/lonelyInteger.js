"use strict";

function lonelyInteger(a) {
  a.sort((a, b) => a - b);

  let lonely;
  for (let i = 0; i <= a.length; i++) {
    let count = 0;

    for (let j = 0; j < a.length; j++) {
      if (a[i] === a[j]) {
        count++;
      }
    }
    //guarda o elemento que se repetiu uma única vez
    if (count === 1) {
      lonely = a[i];
    }
  }

  return console.log(lonely);
}

lonelyInteger([1, 2, 3, 4, 3, 2, 1]);
lonelyInteger([1, 4, 3, 4, 3, 2, 1]);
lonelyInteger([1, 4, 3, 4, 3, 2, 1, 2, 5]);
