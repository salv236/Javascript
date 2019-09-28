//EXERCISE - https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/debugging/use-caution-when-reinitializing-variables-inside-a-loop/

/* 1. `m` is 3, `n` is 2, `newArray` is empty
   2. we start the first outer iteration, `i` is 0, we create `row`, it's empty (edited) 
   3. we step into the inner iteration, `j` is 0, we push a `0` into `row`, so it's `[0]` (edited) 
   4. we do another inner iteration, `j` is 1, we push a `0` into `row`, so it's `[0, 0]`
   5. we check for another inner iteration, `j` is 2 but because `j < n` --> `2 < 2` is false, 
   6. `row` is `[0, 0]`, we push this into `newArray` so it's `[[0, 0]]`
   7. we continue with an outer iteration, `i` is 1, we create `row` again, it's empty
   8 - 10. is the same as 3 - 5.
   9. - row` is `[0, 0]`, we push this into `newArray` so it's `[[0, 0], [0, 0]]`
   12. we continue with an outer iteration, `i` is 2, we create `row` again, it's empty
   13 - 15 is the same as 3 - 5
   16. - row` is `[0, 0]`, we push this into `newArray` so it's `[[0, 0], [0, 0], [0, 0]]
   17. we check for another inner iteration, `i` is 3 but because `i < m` --> `3 < 3` is false, 
   we don't do another inner iteration, move outside
   18. return `newArray` which is `[[0, 0], [0, 0], [0, 0]]`
*/

function zeroArray(m, n) {
    // Creates a 2-D array with m rows and n columns of zeroes
    let newArray = [];
    
    for (let i = 0; i <m; i++) {
      // Adds the m-th row into newArray
        let row = [];
      for (let j = 0; j <n; j++) {
        // Pushes n zeroes into the current row to create the columns
     
        row.push(0);
      }
      // Pushes the current row, which now has n zeroes in it, to the array
      newArray.push(row);
    }
    return newArray;
  }
  
  let matrix = zeroArray(3, 2);
  console.log(matrix);