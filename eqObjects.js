const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍🏼 Assertion Passed: ${actual} === ${expected}`);

  } else if (actual !== expected) {
    console.log(`👎🏼 😥 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let array1 = Object.keys(object1);
  let array2 = Object.keys(object2);
  if(array1.length !== array2.length){
    return false;
  }else{
    let answer;
    // the value for each key in one object is the same as the value in each key of the other object
    // sooo lets create another array to push the values to
    let array3 = []
      // looping through array 1 and if it has the same keys as array 2 then the values are being 
      // pushed to the third array
    for(let i = 0; i < array1.length; i ++){
      // check to see if array 2 incl. any of the keys in array 1
      if(array2.includes(array1[i])){
        array3.push(array1[i]);
      }
  }
  // checking to see that the values of the keys in both objects match
    for(let i = 0; i < array3.length; i++){
      if(object1[array3[i]] ===object2[array3[i]]){
        answer = true;
      }else
        answer = false;
    }
    return answer;
  }
};





const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };

console.log(eqObjects(ab, abc));


  










