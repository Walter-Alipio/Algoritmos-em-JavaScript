const books = require("./booksList.js");

function lowerValue(arrProducts, initialPosition) {
    let cheaper = initialPosition;

    /*O looping percorre a lista salvando o indice do livro mais barato*/
    for (
        let current = initialPosition;
        current < arrProducts.length;
        current++
    ) {
        if (arrProducts[current].price < arrProducts[cheaper].price)
            cheaper = current;
    }

    return cheaper;
}

module.exports = lowerValue;
