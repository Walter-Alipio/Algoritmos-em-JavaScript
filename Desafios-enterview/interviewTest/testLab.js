/*
  Escreva uma função que imprima números de 1 a 100. Para os números múltiplos de 3, imprima "Token" ao invés do número e para números múltiplos de 5, imprima "Lab". Para números que são múltiplos de 3 E 5, imprima "TokenLab".

*/

// function tokenLab() {
//   for (let i = 0; i < 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("TokenLab");
//       continue;
//     }
//     if (i % 3 === 0) {
//       console.log("Token");
//       continue;
//     }
//     if (i % 5 === 0) {
//       console.log("Lab");
//       continue;
//     }
//     console.log(i);
//   }
// }

// tokenLab();

/*

Dado um array de Product, com diversos produtos diferentes, escreva uma função que devolva um array de produtos com o preço convertido para Real.
A moeda (currency) pode ser  ‘dollar’, ‘euro’ ou ‘real’.
Pode considerar o valor de conversão como uma constante, para cada moeda.

Você pode escrever a função na linguagem que estiver mais confortável, só levando em consideração a mesma estrutura do Product, que pode ser uma classe ou não (apenas um JSON por exemplo).

*/

function convertCurrency(array) {
  const currencyBr = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(number);

  array.forEach((element) => {
    element.currency = currencyBr(element.currency);
  });

  return array;
}
