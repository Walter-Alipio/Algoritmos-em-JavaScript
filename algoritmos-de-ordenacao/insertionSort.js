const books = require("./booksList");
const replace = require("./replace");

function insertSort(list) {
  for (let i = 0; i < list.length; i++) {
    let analysis = i;

    while (analysis > 0 && list[analysis].price < list[analysis - 1].price) {
      replace(list, analysis, analysis - 1);
      analysis--;
    }
  }
  console.table(list);
}

insertSort(books);
