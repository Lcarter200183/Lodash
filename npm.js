const _ = require("lodash");
const animalArray = ["duck", "tiger", "bear", "monkey"];

console.log(_.join(animalArray, [(separator = ",")]));
console.log(_.flatten(animalArray));
console.log(_.fromPairs(animalArray));
