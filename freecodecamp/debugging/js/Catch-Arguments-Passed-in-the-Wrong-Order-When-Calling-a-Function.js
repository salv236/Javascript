//EXERCISE - https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/debugging/catch-missing-open-and-closing-parenthesis-after-a-function-call

function getNine() {
    let x = 6;
    let y = 3;
    return x + y;
  }
  
  let result = getNine(); // was missing ()
  console.log(result);