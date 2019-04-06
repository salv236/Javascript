// further reading https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters

//Example
function multiply(multiplier, ...theArgs) {
    return theArgs.map(function(element) {
      return multiplier * element;
    });
  }
  
  var arr = multiply(2, 1, 2, 3); 
  console.log(arr); // [2, 4, 6]


  // EXERCISE

  const sum = (function() {
    "use strict";
    return function sum(...args) {
      //const args = [ x, y, z ];
      return args.reduce((a, b) => a + b, 0);
    };
  })();
  console.log(sum(1, 2, 3)); // 6

