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
  
}

const ferrari = new Car( red );
console.log(`I love my new ${ferrari.shade) ferrari`);