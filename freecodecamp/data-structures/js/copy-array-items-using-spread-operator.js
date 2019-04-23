EXERCISE

function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
      // change code below this line
      newArr.push(...arr);
      // change code above this line
      num--;
    }
    return newArr;
  }
  
  // change code here to test different cases:
  console.log(copyMachine([true, false, true], 2));

  /* 2 is >=1 it will output true,false,true at the 1st iteration
     1>=1 so  at the next iteration it becomes true,false,true true,false,true
     0 !>=1 so it exits the program. */