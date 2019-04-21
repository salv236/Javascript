//EXERCISE

function makeClass() {
  "use strict";
  /* Alter code below this line */
  
  class Thermostat{
    constructor(farenheit){
      this.farenheit = farenheit;
    }
    // get & return farenhieght
    get temperature(){
      return 5 / 9 * (this.farenheit - 32);
    }
    // set and return temperature to celsius
    set temperature(celsius){
      this.farenheit = celsius * 9.0 / 5 + 32;
    }
  }

  /* Alter code above this line */
  return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in F from getter
//get the F value & convert to C using the getter formula
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;  // configured from setter
temp = thermos.temperature; // 26 in C

//EXAMPLE1

class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer(){
    return this._author;
  }
  // setter
  set writer(updatedAuthor){ //updatedAuthor is 'wut'
    this._author = updatedAuthor; // author is now 'wut'
  }
}
const lol = new Book('anonymous');  // using constructor
console.log(lol.writer);  // anonymous (using getter)
lol.writer = 'wut'; // using setter
console.log(lol.writer);  // wut using getter

//EXAMPLE 2  

class Car {
  constructor( hex ) {
    this.color = hex;
  }
  // write the getter
  get shade() {
    //color  = private property as it is routed from the constructor to th getter
    return this.color; 
  }
  set shade(changeColor) {
   this.color = changeColor;
  }
  
}

const ferrari = new Car( red ); // creates instance of a car class called ferrari
console.log(`I love my new ${ferrari.shade = 'black') ferrari`);
