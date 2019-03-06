/* calcluate the sum of numbers using an array */

function addArray() {
 
    let total = "";
    let numbers = [34, 21, 89, 112];

 for (let i=0; i<=numbers.length; i++) {
     //let number = console.log(numbers[i]) ;
     total += numbers[i];
 }

 console.log(total);
 
}

addArray();

