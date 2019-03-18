

function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    // change code below this line
  Object.freeze(MATH_CONSTANTS); // prevents alue from being mutated in other words delete, add, update data
  
    // change code above this line
    try {
      MATH_CONSTANTS.PI = 99;
    } catch( ex ) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  const PI = freezeObj();