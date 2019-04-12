//EXAMPLE

//FROM

const getMousePosition = (x, y) => ({
    x: x,
    y: y
  });

//TO - eliminates the need to write x and y twice

const getMousePosition = (x, y) => ({ x, y });

//EXERCISE

const createPerson = (name, age, gender) => {
  "use strict";
  // change code below this line
  return ({name, age, gender});
  // change code above this line
};
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object