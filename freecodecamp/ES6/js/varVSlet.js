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

    // CODE INVOLVES HOISTING

/*for(var i = 0, i<3;i++) carries out like this: 
i === 0, is it less than 3? yes i ===1 
now i === 1, is it less than 3? yes i ===2
 now i === 2, is it less than 3? yes i ===3now then stopped. is this correct?*/
    var printNumTwo;
for (var i = 0; i < 3; i++) {
 // i now calls the function "printNumTwo" is i (currently 2) less than 3? yes print 3
    if(i === 2){
    printNumTwo = function() {
      return i; //hoisted variable
    };
  }
}
console.log(printNumTwo());