//EXERCISE - https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/debugging/catch-unclosed-parentheses-brackets-braces-and-quotes

let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) =>  previous + current); //muti params requires ()
console.log(`Sum of array values is: ${arraySum}`);