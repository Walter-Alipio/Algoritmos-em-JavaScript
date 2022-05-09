const books = require("./booksList");
const change = require("./change");

function insertSort(list) {
  for (let i = 0; i < list.length; i++) {
    let analysis = i;

    while (analysis > 0 && list[analysis].price < list[analysis - 1].price) {
      change(list, analysis);
      analysis--;
    }
  }
  console.log(list);
}

insertSort(books);
