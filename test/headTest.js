const assertEqual = require('../assertEqual');

{
  if (actual === expected) {
    console.log(`👍🏼 Assertion Passed: ${actual} === ${expected}`);

  } else if (actual !== expected) {
    console.log(`👎🏼 😥 Assertion Failed: ${actual} !== ${expected}`);
  }
};

head = function(array){
 
 return array[0];
};

// head([5,6,7])

assertEqual(head([5,6,7]), 5); 
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), 5); 