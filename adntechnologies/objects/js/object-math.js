/* calcluate the sum of numbers using an array */

function addArray() {
 
    let total = 0;
    let numbers = [34, 21, 89, 112];

 for (let i=0; i<=numbers.length-1; i++) {
     total += numbers[i];
 }

 console.log(total);
 
}

addArray();

