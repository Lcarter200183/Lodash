const _ = require("lodash");
const animalArray = ["duck", "tiger", "bear", "monkey"];

//Converts all elements in array into a string separated by separator.
console.log(_.join(animalArray, [(separator = ",")]));

//Flattens array a single level deep.
console.log(_.flatten(animalArray));

//The inverse of _.toPairs; this method returns an object composed from key-value pairs.
console.log(_.fromPairs(animalArray));
