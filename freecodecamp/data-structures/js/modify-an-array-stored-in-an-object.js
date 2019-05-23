let user = {
    name: 'Kenneth',
    age: 28,
    data: {
      username: 'kennethCodesAllDay',
      joinDate: 'March 26, 2016',
      organization: 'freeCodeCamp',
      friends: [
        'Sam',
        'Kira',
        'Tomo'
      ],
      location: {
        city: 'San Francisco',
        state: 'CA',
        country: 'USA'
      }
    }
  };
  
  function addFriend(userObj, friend) {
    // change code below this line
       // store path to friends array
       const output = userObj.data.friends;
       //insert additiona string in friends
       output.push(friend);
 
       return output;
 
    // change code above this line
 
  }
 
  console.log(addFriend(user, 'Pete')); 