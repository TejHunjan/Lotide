const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

const eqObjects = function(object1, object2) {
  let array1 = Object.keys(object1);
  let array2 = Object.keys(object2);
  if(array1.length !== array2.length){
    return false;
  }else{
    let answer;

    let array3 = []
    
    for(let i = 0; i < array1.length; i ++){
   
      if(array2.includes(array1[i])){
        array3.push(array1[i]);
      }
  }

    for(let i = 0; i < array3.length; i++){
      if(object1[array3[i]] ===object2[array3[i]]){
        answer = true;
      }else
        answer = false;
    }
    return answer;
  }
};

const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect;
  // if (actual === expected) {
  //   console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);

  // } else if (actual !== expected) {
  //   console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  // }
  let array1 = Object.keys(actual);
  let array2 = Object.keys(expected);
  if(array1.length !== array2.length){
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }else{
    let answer;

    let array3 = []
    
    for(let i = 0; i < array1.length; i ++){
   
      if(array2.includes(array1[i])){
        array3.push(array1[i]);
      }
  }

    for(let i = 0; i < array3.length; i++){
      if(actual[array3[i]] === expected[array3[i]]){
        answer = `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
      }else
        answer = `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
    }
    console.log(answer);
  }

};

assertObjectsEqual({ b: 2, a: '1' }, { b: 2, a: '1' });
// console.log(`Example label: ${inspect(actual)}`);
