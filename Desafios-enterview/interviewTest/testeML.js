// function makeItBark(name) {
//   function Dog(name) {
//     this.name = name;
//     this.bark = function () {
//       return this.name + " says woof hey";
//     };

//   }

//   let scooby = new Dog(name);

//   return scooby.bark();
// }

// console.log(makeItBark("Scooby"));

// (function () {
//   var a = (b = 5);
//   c = 3;
// })();

// console.log(c);

function countAnimals(listOfAnimals, animalToCount = undefined) {
  if (listOfAnimals.length === 0) {
    return "É necessária uma lista de animais";
  }

  if (animalToCount !== undefined) {
    let countAnimal = 0;
    for (let i = 0; i < listOfAnimals.length; i++) {
      if (listOfAnimals[i] === animalToCount) countAnimal++;
    }
    return countAnimal;
  }

  return listOfAnimals.length;
}
const animals = [
  "sheep",
  "pig",
  "sheep",
  "goat",
  "chicken",
  "sheep",
  "sheep",
  "cow",
  "goat",
  "cow",
  "cow",
  "pig",
];
console.log(countAnimals(animals));

console.log(countAnimals(animals, "pig"));

console.log(countAnimals(animals, "parrot"));

console.log(countAnimals([]));
