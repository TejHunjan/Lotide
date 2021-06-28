const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍🏼 Assertion Passed: ${actual} === ${expected}`);

  } else if (actual !== expected) {
    console.log(`👎🏼 😥 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const letterPositions = function(sentence){

  const results = {};
  const array = sentence.split('');
  for(let i = 0; i < array.length; i++){

    results[array[i]] = i;

  }
  return results;
}

console.log(letterPositions('hello'));