// example of a arrow anonymous function (inline function)

const myFunc = () => {
    const myVar = "value";
    return myVar;
  }



  //When there is no function body, and only a return value, arrow function syntax allows you to omit the keyword return
  const myFunc = () => "value"


// EXERCISE

const magic = () => {
    "use strict";
    return new Date();
  };

  magic();


