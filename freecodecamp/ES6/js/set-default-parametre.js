// further reading https://developer.mozilla.org/en-US/docs/Glossary/IIFE, https://www.youtube.com/watch?v=I5EntfMeIIQ

const increment = (function() {
    "use strict";
    return function increment(number, value = 1) {
      return number + value;
    };
  })(); // immediately Invoked Function Expression
  console.log(increment(5, 2)); // returns 7
  console.log(increment(5)); // returns 6