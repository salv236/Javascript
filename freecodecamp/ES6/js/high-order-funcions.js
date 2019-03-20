// high order functions are predefined functions where you can pass a function inside

/*FBPosts = name of the array
  post = parametre referencing the index in the array 
  */
// FBPosts.filter(function(post) {
//     return post.thumbnail !== null && post.shares > 100 && post.likes > 500;
//   })


/* FBPosts = 
  */
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// //number = index position in the array
// const evenNumbers= numbers.filter(number=> {
//    return number % 2 === 0;
// });

// console.log(evenNumbers);

//EXERCISE

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  // change code below this line
  const squaredIntegers = arr;
  squaredIntegers.filter((number)=> number(Math.sqrt));
  // change code above this line
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);