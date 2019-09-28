//EXAMPLE

function greaterThanTen(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 10) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }
  
  greaterThanTen([2, 12, 8, 14, 80, 0, 1]);
  // returns [12, 14, 80]

  //EXERCISE

  function filteredArray(arr, elem) {
    let newArr = [];
    // change code below this line
   for(let i=0; i<arr.length; i++) {
     if(arr[i]=== 3) {
       arr.filter(num => arr.splice(i,1));
       newArr = arr[i];
     }
   }
    // change code above this line
    return newArr;
  }
  
  // change code here to test different cases:
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

  //solution provided by freecodecamp

  function filteredArray(arr, elem) {
    let newArr = [];
    // change code below this line
    
   for (let i = 0; i < arr.length; i++) { 
      if (arr[i].indexOf(elem)==-1){ //Checks every parameter for the element and if is NOT there continues the code
            newArr.push(arr[i]); //Inserts the element of the array in the new filtered array
              };
            };
  
    // change code above this line
    return newArr;
  };
  // change code here to test different cases:
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

  
  
  // solutions provided by judit

  /*- loop through each nested array
- inside the for loop filter the nested array to remove "elem"
- still inside the for loop but after filter, check if the filtered array length 
is the same as the original nested array, which means the "elem" was not inside of 
it so we can push it into newArr*/

  function filteredArray(arr, elem) {
    let newArr = [];
    // change code below this line
    for (let index = 0; index < arr.length; index++) {
        // extract values that are not 3
      const filtered = arr[index].filter(num => num !== elem);
      // get all numbers that are not 3 and push them into the empty created array
      if (filtered.length === arr[index].length) newArr.push(arr[index]);
    }
    // change code above this line
    return newArr;
  }
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));


  function filteredArray(arr, elem) {
    let newArr = [];
    // change code below this line
    for (let index= 0; index < arr.length; index++) {
      let filteredNestedArr = [];
      for (let nested = 0; nested < arr[index].length; nested++) {
        if (arr[index][nested] === elem) break;
        filteredNestedArr.push(arr[index][nested]);
      }
      if (filteredNestedArr.length === arr[index].length) newArr.push(arr[index]);
    }
    // change code above this line
    return newArr;
  }
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));


  /*- loop through each nested array
- inside the for loop filter the nested array to remove "elem"
- still inside the for loop but after filter, check if the filtered array 
length is the same as the original nested array, which means the "elem" was 
not inside of it so we can push it into newArr*/
  function filteredArray(arr, elem) {
    let newArr = [];
    // change code below this line
    for (let index = 0; index < arr.length; index++) {
        if (!arr[index].includes(elem)) {
            newArr.push(arr[index]);
        } 
        }
  }
    console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));