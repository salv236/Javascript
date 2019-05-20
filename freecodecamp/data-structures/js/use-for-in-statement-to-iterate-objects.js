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
    for(obj in users) {
      console.log(users[obj]);
      // if the online property === true output the value
     if(users[obj].online === true){
       return users[obj];
       //console.log(obj);
     } 
  
    // change code above this line
  }

}
  console.log(countOnline(users));