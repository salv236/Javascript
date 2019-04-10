let a = 8, b = 6;
(() => {
  "use strict";
  // swapping of values using destructuring
  [a,b] = [b, a];
  
  // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8