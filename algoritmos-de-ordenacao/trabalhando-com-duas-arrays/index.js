const { edGalho, edFolha } = require("./arrays");

function joinList(list1, list2) {
  let finalList = [];
  let actualList1 = 0;
  let actualList2 = 0;
  let actual = 0;

  //iterando as duas arrays que já estão ordenadas e trazendo seu conteúdo a um unico array

  while (actualList1 < list1.length && actualList2 < list2.length) {
    let productActualList1 = list1[actualList1];
    let productActualList2 = list2[actualList2];

    if (productActualList1.preco < productActualList2.preco) {
      finalList[actual] = productActualList1;

      actualList1++;
    } else {
      finalList[actual] = productActualList2;
      actualList2++;
    }

    actual++;
  }
  //Conferindo se ainda há conteúdo na actualList1, se houver, adiciona ao final da lista
  while (actualList1 < list1.length) {
    finalList[actual] = list1[actualList1];
    actualList1++;
    actual++;
  }
  //Conferindo se ainda há conteúdo na actualList2, se houver, adiciona ao final da lista
  while (actualList2 < list2.length) {
    finalList[actual] = list2[actualList2];
    actualList2++;
    actual++;
  }

  return finalList;
}

console.table(joinList(edGalho, edFolha));
