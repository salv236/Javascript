//EXERCISE - https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/debugging/catch-off-by-one-errors-when-using-indexing
function countToFive() {
    let firstFive = "12345";
    let len = firstFive.length;
    // Fix the line below
    for (let i = 0; i <len; i++) {
    // Do not alter code below this line
      console.log(firstFive[i]);
    }
  }
  
  countToFive();