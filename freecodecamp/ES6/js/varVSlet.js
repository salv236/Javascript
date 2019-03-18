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

// function letTest() {
//     let x = 1;
//     if (true) {
//         // restricted to the if statement
//         let x = 2;  // different variable
//       console.log(x);  // 2
//     }
//     console.log(x);  // 1
//   }

//   letTest();





/* function inside the for loop will run AFTER the for loop is finished it’s last iteration. Because that’s where 
you call it, at the bottom inside the console.log. Inside the if statement you just assigned the function to 
printNumTwo but it won’t run until you don’t call it, it just sits there waiting :)
The value of ‘i’ is 3 after the for loop has finished and that’s when you call the function, so it makes 
printNumTwo = 3 (edited) Sorry I used arrow function, it’s the same just less typing :smiley:
If you don’t use function inside the for loop, just an ‘=‘ it will be 2*/

// var printNumTwo;

// for (var i = 0; i < 3; i++) {
//   console.log('value i in for iterations: ' + i)
//   if (i === 2) {
//     console.log('inside if: ' + i);
//     printNumTwo = () => {
//       return i;
//     }
//   }
//   console.log('end of for: ' + i)
// }

// console.log('i value outside of for loop: ' + i)

// console.log('final printNumTwo value' + printNumTwo());





//   function checkScope() {
//     "use strict";
//       var i = "function scope";
//       if (true) {
//         i = "block scope";
//         console.log("Block scope i is: ", i);
//       }
//       console.log("Function scope i is: ", i);
//       return i;
//     }
    
//     checkScope();

    // CODE INVOLVES HOISTING

/*for(var i = 0, i<3;i++) carries out like this: 
i === 0, is it less than 3? yes i ===1 
now i === 1, is it less than 3? yes i ===2
 now i === 2, is it less than 3? yes i ===3now then stopped. is this correct?*/
    //var printNumTwo;
//for (var i = 0; i < 3; i++) {
 // i now calls the function "printNumTwo" is i (currently 2) less than 3? yes print 3
//     if(i === 2){
//     printNumTwo = function() {
//       return i; //hoisted variable
//     };
//   }
// }
// console.log(printNumTwo());



// 'use strict';
// let printNumTwo;
// for (let i = 0; i < 3; i++) {
//   if (i === 2) {
//     //printNumTwo becomes an anonymous function
//     printNumTwo = function() {
//       return i;
//     };
//   }
// }
//console.log(printNumTwo()); // value is returned as it calls the function where variable is locally scoped 
// returns 2
//console.log(i); // cannot access i as i is locally scoped inside the function, console log is outside the function
// returns "i is not defined"



function checkScope() {
  "use strict";
     let i = "function scope";
    if (true) {
     let i = "block scope";
      console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
  }