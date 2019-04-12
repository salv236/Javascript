//EXAMPLE

//ES5
const person = {
    name: "Taylor",
    sayHello: function() {
      return `Hello! My name is ${this.name}.`;
    }
  };

  //ES6
  const person = {
    name: "Taylor",
    // note how : and fucntion keywords are removed
    sayHello() {
      return `Hello! My name is ${this.name}.`;
    }
  };

  //EXERCISE

  // change code below this line
const bicycle = {
    gear: 2,
    setGear (newGear) {
      "use strict";
      this.gear = newGear;
    }
  };
  // change code above this line
  bicycle.setGear(3);
  console.log(bicycle.gear);

  