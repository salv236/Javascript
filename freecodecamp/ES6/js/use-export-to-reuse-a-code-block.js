
//EXAMPLES

const capitalizeString = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  export { capitalizeString } //How to export functions.
  export const foo = "bar"; //How to export variables.

  const capitalizeString = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const foo = "bar";
  export { capitalizeString, foo }

//EXERCISE

"use strict";

export const foo = "bar";
export const bar = "foo";