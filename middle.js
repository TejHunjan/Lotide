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
    //includes checks if the arg you pass into it exists anywhere in the array
    if(array.includes(false)){
      return false;
    }else{
      return true;
    } 
  }


  const assertArraysEqual = function(array1, array2){

    if (eqArrays(array1, array2)) {
      console.log('Pass');
    } else {
      console.log('Fail');
    }
      
  };


  // taking a list of numbers. each of those have a position and a value.  we have to determine the number of item on the list, which could vary. 
  // if there are less than or equal to two items in the list we want to create an empty list representation. If there are two or more items and the total number is even we want to create a new list with the middle two numbers, and if the total number is odd we want to create a new list with one number. 
  
  const middle = function(array) {
    // let midNum = [];
    let length = array.length;
    let isEven = length % 2 === 0;
    console.log('this is isEven', isEven)
    if(length <= 2) {
      return [];
    }
      else if (isEven){
        let middleIndex = Math.floor((length -1) / 2);
        let midValTwo = (array.length / 2)
      let middleValues = [array[middleIndex],array[midValTwo]];
    
      return middleValues;
      }
      //creating a new list with middle two numbers
     else {  
      let middleIndex = (length - 1) / 2 ;
      let middleValue = array[middleIndex]
      return [middleValue];
      // [1, 2 ,3, 4, 5]
      // create new list with single number
    }
    //  return midNum;

  };

module.exports = middle;

  console.log(middle([]))
  console.log(middle([2, 3, 4]))
  console.log(middle([4, 5, 6, 7]))