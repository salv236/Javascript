// further reading https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

  // EXERCISE

  const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
  let arr2;
  (function() {
    "use strict";
    arr2 = [...arr1]; // change this line
  })();
  console.log(arr2);

