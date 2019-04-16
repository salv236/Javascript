// EXAMPLE

let greetings = ['whats up?', 'hello', 'see ya!'];

// pop removes last entry within index
greetings.pop(); 
// now equals ['whats up?', 'hello']

// shift removes first entry with an array
greetings.shift();
// now equals ['hello']

//EXERCISE

function popShift(arr) {
    let popped = arr.pop(); // change this line
    let shifted = arr.shift(); // change this line
    return [shifted, popped];
  }
  
  // do not change code below this line
  console.log(popShift(['challenge', 'is', 'not', 'complete']));

