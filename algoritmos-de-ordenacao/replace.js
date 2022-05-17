function replace(list, higher, lower) {
  let itemAnalysis = list[higher]; //guarda o conteúdo da posição atual
  let itemPreviews = list[lower]; //guarda o conteúdo da posição que contem o menor preço

  list[higher] = itemPreviews; //passa o conteúdo de menor preço para posição atual
  list[lower] = itemAnalysis; //passa o conteúdo da posição atual para posição menor preço
}

module.exports = replace;
