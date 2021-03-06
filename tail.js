// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`👍🏼 Assertion Passed: ${actual} === ${expected}`);

const assertEqual = require("./assertEqual");

//   } else if (actual !== expected) {
//     console.log(`👎🏼 😥 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const tail = function(array) {
  return array.slice(1);

};

const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words).length; // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual((tail(words).length),2);
module.exports = tail;