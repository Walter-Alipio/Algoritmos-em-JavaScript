function change(list, analysis) {
  let itemAnalysis = list[analysis]; //guarda o conteúdo da posição atual
  let itemPreviews = list[analysis - 1]; //guarda o conteúdo da posição que contem o menor preço

  list[analysis] = itemPreviews; //passa o conteúdo de menor preço para posição atual
  list[analysis - 1] = itemAnalysis; //passa o conteúdo da posição atual para posição menor preço
}

module.exports = change;
