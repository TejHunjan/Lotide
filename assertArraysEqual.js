
const eqArrays = require('./eqArrays')

  const assertArraysEqual = function(array1, array2){

    if (eqArrays(array1, array2)) {
      console.log('Pass');
    } else {
      console.log('Fail');
    }
      
  };
  
  // assertArraysEqual([1, 2, 3], [1, 2, 3]);

  module.exports = assertArraysEqual;

