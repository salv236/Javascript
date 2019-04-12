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

  
  
  //EXERCISE

  function makeClass() {
    "use strict";
    /* Alter code below this line */
  class vegetable {
  constructor(name) {
    this.name = name;
  }
  }
    /* Alter code above this line */
    return Vegetable;
  }
  const Vegetable = makeClass();
  const carrot = new Vegetable('carrot'); // carrot from name parametre in constructor
  console.log(carrot.name); // => should be 'carrot'


  