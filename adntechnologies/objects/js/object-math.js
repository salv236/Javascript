/* calcluate the sum of numbers using an array */

function addArray() {
 
    let total = 0;
    let numbers = [34, 21, 89, 112];  // indexes 0 - 3

 /* start at 0 ,  numbers.length stops at 4 index number 4 does not exist,
 there are 3 elements hence the reason why numbers.length-1 is needed otherwise loop doesnt work!
*/
 
    for (let i=0; i<=numbers.length-1; i++) {
     total += numbers[i];
 }

 // console.log(numbers.length-1); 
 console.log(total);
 
}

addArray();

