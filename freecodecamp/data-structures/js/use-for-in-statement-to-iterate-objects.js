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
  // iterator count used to calc no: of online  -true
  let count = 0;
  // obj =  entire objet, user = child objects i.e. Alain, Jeff e.t.c.
  for (let user in obj) {
    // if online is true increment the online true calc
    if (obj[user].online === true) {
      count++;
    }
  }
  return count;
  // change code above this line
}
  console.log(countOnline(users));