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
  