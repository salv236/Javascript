// let catName;
// let quote;
// function catTalk() {
//   "use strict";

//   catName = "Oliver";
//   quote = catName + " says Meow!";

// }
// catTalk();


/* 
var  = Global which is available throughout the code.
let =  limited to a code black cannot be redeclared
const = values cannot be overridden
*/

function letTest() {
    let x = 1;
    if (true) {
        // restricted to the if statement
        let x = 2;  // different variable
      console.log(x);  // 2
    }
    console.log(x);  // 1
  }

  letTest();

  function checkScope() {
    "use strict";
      var i = "function scope";
      if (true) {
        i = "block scope";
        console.log("Block scope i is: ", i);
      }
      console.log("Function scope i is: ", i);
      return i;
    }
    
    checkScope();