// let catName;
// let quote;
// function catTalk() {
//   "use strict";

//   catName = "Oliver";
//   quote = catName + " says Meow!";

// }
// catTalk();



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