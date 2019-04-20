//EXERCISE

function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Thermostat {
    constructor(Farenheight) {
    this.Farenheight = Farenheight;
    }
  }

  get Celsius() {
   return this.Farenheight;
  }

  set Celsius(newValue) {
   this.newValue = Farenheight;
  }

  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
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




