//EXAMPLE

//ES5

var SpaceShuttle = function(targetPlanet){
    this.targetPlanet = targetPlanet;
  }
  var zeus = new SpaceShuttle('Jupiter');

  // ES6

  class SpaceShuttle { //class replaces var
    /* constructor replaces function keyword, consructor invoked when new is called 
    to create a new object */
    constructor(targetPlanet){ 
      this.targetPlanet = targetPlanet;
    }
  }
  const zeus = new SpaceShuttle('Jupiter');

  
  
  //EXERCISE - NB: class keyword in js not to be confused with OOP in JS it is a function type.

  function makeClass() {
    "use strict";
    /* Alter code below this line */
  class vegetable {
    // constructor is invoked when new keyword is called to create a new object
  constructor(name) {
    this.name = name;
  }
  }
    /* Alter code above this line */
    return Vegetable;
  }

 // OBJECT INSTANTIATION

  const Vegetable = makeClass();
  const carrot = new Vegetable('carrot'); // carrot referred from name parametre
  console.log(carrot.name); // => should be 'carrot'


  //EXERCISE - REFACTORED WITH ONLY CLASS DECLARATION

  class Vegetable {
    constructor(name){
      this.name = name;
    }
  }

  /* Alter code above this line */
  //return Vegetable;
//}
//const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'

  