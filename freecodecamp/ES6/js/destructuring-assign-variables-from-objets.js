/* further reading https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
                  https://codeburst.io/es6-destructuring-the-complete-guide-7f842d08b98f
                  https://wesbos.com/destructuring-objects/
                  https://javascript.info/destructuring-assignment#object-destructuring */

//EXAMPLE 1 - OBJECT DESTRUCTURING

let me = {

  firstName: 'salvatore',
  lastName : 'saia',
  dob: '20/06/78',
  status:  'single'

}

// object destructured properties left of =
let {firstName, lastName, dob, status} = me;

console.log('my name is ' + firstName + ' and my last name is ' +lastName+ ' my date of birth is ' + dob + ' my current status is ' + status);

// EXAMPLE 2 - ARRAY  DESTRUCTURING

let cities = ['Brussels', 'Amsterdam', 'London'];

let[Belgium, Netherlands, UK] = cities;

console.log('the camital of Belgium is ' + Belgium + ' the  capitol of the Netherlands is ' +Netherlands + ' the capital of England is ' + UK);

// EXAMPLE 3 -  RENAMING OBJECT PROPERTIES

let hobbies = {
  s: 'bodybuilding',
  t: 'japan',
  m: 'US'
};

let{s: sport, t: travel, m: market} = hobbies;

console.log('favorite sport: ' + sport + ' favorite country: ' + travel+ ' favorite financial market: ' + market);

//EXAMPLE 4 SKIPPING ARRAY ITEMS WITH DESTRUCTURING

let people = ['salvatore', 'joe', 'ro'];

let[,, sister] = people;

console.log(sister);

//EXAMPLE 5 - NESTED OBJECT DESTRUCTURING

const wes = {
  first: 'Wes',
  last: 'Bos',
  links: {
    social: {
      twitter: 'https://twitter.com/wesbos',
      facebook: 'https://facebook.com/wesbos.developer',
    },
    web: {
      blog: 'https://wesbos.com'
    }
  }
};
// extract properties twitter & facebook
const { twitter, facebook } = wes.links.social;
console.log(twitter, facebook);

//EXAMPLE 6 - SWAPPING VARIABLES

let width = 300;
let height = 400;
const landscape = true;

console.log(`${width} x ${height}`); // 300 x 400

if (landscape) {
    // Swap the variables - width becomes height & height becomes width
    [width, height] = [height, width];
  
    console.log(`${width} x ${height}`); // 400 x 300
}

// EXAMPLE 7 - OBJECT DESTRUCTING VARIABLE ASSIGNMENT

let country = 'Canada';
let firstname = 'John';
let lastname = 'Doe';

const student = {
    firstname: 'Glad',
    lastname: 'Chinda',
    country: 'Nigeria'
};

// Reassign firstname and lastname using destructuring
/*Enclose in a pair of parentheses, since this is an assignment expression
use of (target specific properties in an object) in destructure statement to avoid
extracting from let declarations */
({ firstname, lastname } = student);

// country remains unchanged (Canada)
console.log(firstname, lastname, country); // Glad Chinda Canada


  // EXERCISE

  const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
  };
  
  function getTempOfTmrw(avgTemperatures) {
    "use strict";
    // change code below this line
    const{tomorrow: tempOfTomorrow } = avgTemperatures ; // destructuring and assigning new variable
    // change code above this line
    return tempOfTomorrow;
  }
  
  console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79
