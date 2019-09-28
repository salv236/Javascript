 // EXAMPLE

 users.hasOwnProperty('Alan');
'Alan' in users;
// both return true
 
 //EXERCISE

 let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function isEveryoneHere(obj) {
    // change code below this line
   if(users.hasOwnProperty('Alan') && users.hasOwnProperty('Jeff')
   && users.hasOwnProperty('Sarah') && users.hasOwnProperty('Ryan')) {
     return true;
   } return false;
    // change code above this line
  }
  
  console.log(isEveryoneHere(users));

