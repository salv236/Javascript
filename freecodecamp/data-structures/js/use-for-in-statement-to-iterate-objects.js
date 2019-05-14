 // EXAMPLE

 for (let user in users) {
    console.log(user);
  };
  
  // logs:
  Alan
  Jeff
  Sarah
  Ryan
 
 //EXERCISE

 let users = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function countOnline(obj) {
    // change code below this line
    for(user in users) {
       if (users.hasOwnProperty(obj) === true) {
         return obj;
       }
    } 
  
    // change code above this line
  }
  
  console.log(countOnline(users));