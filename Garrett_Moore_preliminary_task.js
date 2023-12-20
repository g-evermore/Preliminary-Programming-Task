/*
Azalea Health Preliminary Programming Task
Completed by Garrett Moore
Dec 19, 2023
 */

let a = [1,2,3,5,6];
let b = [2,3,4,5,6];
let c = [4,5,6,7,8];

let d = [2,4,6,8,10];
let e = [1,3,5,7,9];
let f = [55,100,200];

function getSmallestCommonInt(array0, array1, array2) {
  //Helper function returns boolean value for whether a number is shared across arrays
  function isCommonInt(element){
    return array0.indexOf(element) !== -1 && array1.indexOf(element) !== -1 && array2.indexOf(element) !== -1;
  }
  //Iterating over the elements of first array, returning the first integer found common among the arrays
  for (let i = 0; i < array0.length; i++){
    if (isCommonInt(array0[i])){
      return array0[i];
    }
  }
  //Returns false if no shared integer is found
  return false;
}

console.log(getSmallestCommonInt(a, b, c)); // Answer is 5
console.log(getSmallestCommonInt(d, e, f)); // Answer is false