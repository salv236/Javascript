//EXERCISE

function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ['is','fun']; 
    // spread operators combined usage to append strings
    let result = ['learning',...fragment, ...sentence];
    return result;
  }
  
  // do not change code below this line
  console.log(spreadOut());

