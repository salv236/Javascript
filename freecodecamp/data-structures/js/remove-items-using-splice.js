// EXAMPLE

let array = ['today', 'was', 'not', 'so', 'great'];
// splice is not zero inde based
array.splice(2, 2);
// remove 2 elements beginning with the 3rd element
// array now equals ['today', 'was', 'great']

//EXERCISE

function sumOfTen(arr) {
    // change code below this line
    arr.splice(3,2,1);
    // change code above this line
    return arr.reduce((a, b) => a + b);
  }
  
  // do not change code below this line
  console.log(sumOfTen([2, 5, 1, 5, 2, 1]));

