// high order functions are predefined functions where you can pass a function inside
// further reading https://www.airpair.com/javascript/posts/mastering-es6-higher-order-functions-for-arrays

// EXAMPLE1
/*FBPosts = name of the array
  post = parametre referencing the index in the array 
  */
// FBPosts.filter(function(post) {
//     return post.thumbnail !== null && post.shares > 100 && post.likes > 500;
//   })


//EXAMPLE2
/* FBPosts = 
  */
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// //number = index position in the array
// const evenNumbers= numbers.filter(number=> {
//    return number % 2 === 0;
// });

// console.log(evenNumbers);

/////////////////////////////////
//EXAMPLE 3

//callback =  nested function
// function sing(callback) {
//     console.log('la la la');
//     callback();
// }
// meow = the callback function     
    // function meow() {
    //     console.log('meow meow');
    // }

   // meow() =  callback()
    // sing(meow);
///////////////////////////////////

//EXERCISE

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  // change code below this line
  const squaredIntegers = arr.filter(realNumber =>
    // if its a whole number and positive
    Number.isInteger(realNumber) && realNumber >= 0 ) // filter end;
  // new array with square root of positive numbers
  const result = squaredIntegers.map(num => Math.pow( num, 2));

  // change code above this line
  return result;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

// JUDIT SHORTER CONCISE VERSIONS

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  // if its a whole number and positive, new array with square root of positive numbers
  return arr.filter( realNumber =>
    Number.isInteger(realNumber) && realNumber >= 0 ).map(num => Math.pow( num, 2));
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

//OR

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  // change code below this line
  const squaredIntegers = arr.filter( realNumber =>
    // if its a whole number and positive, new array with square root of positive numbers
    Number.isInteger(realNumber) && realNumber >= 0 ).map(num => Math.pow( num, 2)) 
  // change code above this line
  return squaredIntegers ;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);