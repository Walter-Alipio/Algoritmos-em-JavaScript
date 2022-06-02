const operations = ["push", "push", "push", "pop"];
const x = [1, 2, 3, 1];

function maxMin(operations, x) {
  x.sort((a, b) => a - b);
  const storage = [];
  const elements = [];

  let countPush = 0;
  let countPop = 0;
  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === "push") {
      countPush++;
    } else if (operations[i] === "pop") {
      countPop++;
    }
  }

  for (let index = 0; index < countPush; index++) {
    elements.push(index + 1);
    storage.push(elements[0] * elements[index]);
  }
  for (let i = 1; i <= countPop; i++) {
    let index = elements.indexOf(i);
    elements.splice(index, 1);
    storage.push(elements[0] * elements[elements.length - 1]);
  }

  return storage;
}

//1,2,3,6
//

console.log(maxMin(operations, x));
console.log(maxMin(["pop", "push", "push", "pop", "push"], [1, 2, 3, 1, 4]));
