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
  
  
  const assertArraysEqual = function(eqArrayscb, expected){
    if (eqArrayscb === expected) {
      console.log(`👍🏼 Assertion Passed: ${eqArrayscb} === ${expected}`);
  
    } else if (eqArrayscb !== expected) {
      console.log(`👎🏼 😥 Assertion Failed: ${eqArrayscb} !== ${expected}`);
    }
  }
  
  // console.log(assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3],), true));
//.filter - automatically returns a new array
// needs a return statement that can be equated to true or false
// it's looking for something that can be equated to true or false, if it's true it will be included in the new array, if it's false it will be ignored.
  const without = function(array1, array2){
    let arraya = array1.filter(function(item){
      // if array2 doesn't include the item it is being pushed to arraya
      return !array2.includes(item);
    })
    let arrayb = array2.filter(function(item){
       // if array1 doesn't include the item it is being pushed to arrayb
      return !array1.includes(item);
    })
    // taking the two new arrays that we created with filter and combining them
    arrayc = arraya.concat(arrayb);
    // returning the combined array
    return arrayc;
  }

  console.log(without([1, 3, 4, 6], [1, 2, 5, 6])); //[2, 3, 4, 5]

  console.log(assertArraysEqual(eqArrays([1, 3, 4, 6], [1, 2, 5, 6]), false));