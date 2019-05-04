//EXERCISE

function quickCheck(arr, elem) {
  // change code below this line

  for(let i=0; arr<=elem.length; i++) {
     if(elem === arr[i]) {
       return indexOf(elem);
     }
  }

  // change code above this line
}

// change code here to test different cases:
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));


  //ANSWER

  function quickCheck(arr, elem) {
    if(arr.indexOf(elem)>=0) {
      return true;
    }
    return false;
  }
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms')); 

