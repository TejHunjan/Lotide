const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍🏼 Assertion Passed: ${actual} === ${expected}`);

  } else if (actual !== expected) {
    console.log(`👎🏼 😥 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string){
  // creating and empty object
  let count = {};
  // using split to turn the string into an array and then using forEach to loop over the string
  
  let array = string.split('');
   for (const letter of array){
      count[letter] ? count[letter]++ : count[letter] = 1;

}
  return count;
}

console.log(countLetters('purple'));

console.log(assertEqual(countLetters('purple'), { p: 2, u: 1, r: 1, l: 1, e: 1 }));