const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍🏼 Assertion Passed: ${actual} === ${expected}`);
    return true;

  } else if (actual !== expected) {
    console.log(`👎🏼 😥 Assertion Failed: ${actual} !== ${expected}`);
    return false;
  }
};

//forEach loops through the entire array without stopping
// it does not return a new array automatically but we can create an empty array and push to it
// forEach is a higher order function it takes an anonymous callback function that takes arguments
// the first argument is require 'item' and it refers to the current item being processed in the array 
// the second argument is optional and it refers to the index which is a number on the first loop it will be 0 then 1 then 2 and so on

const eqArrays = function(array1, array2){
let array = [];
  array1.forEach(function(item, index){
    // item is array1[index] and we are comparing to array2[index]
    if(item === array2[index]){
      array.push(true);
    }else{
      array.push(false);
    } 
  })
  //includes looks for if the arg you pass into it exists anywhere in the array
  if(array.includes(false)){
    return false;
  }else{
    return true;
  } 
}


// console.log(eqArrays([1, 2, 3], [1, 2, 3]));

// console.log(assertEqual(eqArrays([1, 2, 5], [1, 2, 3]), true)); 

const assertArraysEqual = function(eqArrayscb, expected){
  if (eqArrayscb === expected) {
    console.log(`👍🏼 Assertion Passed: ${eqArrayscb} === ${expected}`);

  } else if (eqArrayscb !== expected) {
    console.log(`👎🏼 😥 Assertion Failed: ${eqArrayscb} !== ${expected}`);
  }
}

console.log(assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3],), true));