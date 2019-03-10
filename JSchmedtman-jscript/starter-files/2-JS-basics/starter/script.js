//VARIABLES AND DATA TYPES

// var firstName = 'John';
// var lastName = 'Smith';

// console.log(firstName + ' ' + lastName);

// var age = 28;
// var fullAge = true;
// console.log(fullAge);

// var job;
// console.log(job);

// job = 'Teacher';
// console.log(job);

// variable mutation and type coercion
// type coercion is the process of converting data types

// var firstName = 'John';
// var age = 28;

// console.log (firstName + ' ' + age);

// //multi variables on same line
// var job, isMarried;

// job = 'teacher';
// isMarried = false;

// console.log(firstName + ' is a ' + age + ' years old ' + ' he works as a ' + job + ' is he married? ' + ' ' + isMarried);


// VARIABLE MUTATION

//  age = 'twenty eight';
//  job = 'driver';

//  alert(firstName + ' is a ' + age + ' years old ' + ' he works as a ' + job + ' is he married? ' + ' ' + isMarried);

//  var lastName = prompt('what is his last name?') // stored outpu of lastname after code execution
//  console.log(firstName + ' ' + lastName);

// BASIC OPERATORS
// var year, yearJohn, yearMark;

// now = 2018;
// ageJohn = 28;
// ageMark = 33;

// yearJohn =  now - 28;
// yearMark =  now - 33
// console.log(yearJohn);

// console.log(now  %  3);

// LOGICAL OPERATORS
// var johnOlder = ageJohn > ageMark;
// console.log(johnOlder);


//typeof
// console.log(typeof johnOlder);
// console.log(typeof "this is a string");

// OPERATOR PRECEDENCE

// var now =  2018;
// var yearJohn = 1989;
// var fullAge = 18;

// multiple operators
// var isFullAge = (now - yearJohn) >= fullAge;
// console.log(isFullAge);

// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var average = (ageJohn + ageMark) / 2;
// console.log(average);

// multiple assignments

// var x, y;

// x = y =  (3+5) * 4 -6; // 8 * 4 - 6 // 32 - 6 = 26
// console.log(x, y);

//IF-ELSE STAEMENT

// let firstname = 'John';
// let civilStatus = 'single';

// if(civilStatus === 'married') {
//     console.log(firstname + ' is married!');
// } else {
//     console.log(firstname + ' is' + ' ' + civilStatus)
// }

// let isMarried = true;

// if(isMarried) {
//     console.log(firstname + ' is married!');
// } else {
//     console.log(firstname + ' is' + ' ' + civilStatus)
// }

// BOOLEAN LOGIC

// let firstName = 'john';
// let age = 16;

// if(age <13) {
//  console.log(firstName + ' is a boy');
// }  else if (age >= 13 && age <20) {
//     console.log(firstName + ' is a teenager');
// } else if(age >=20 && age <30) {
//     console.log(firstName + ' is a young man');
// } else {
//     console.log(firstName + ' is a man');
// }

//TERNARY OPERATOR

// let firstName = 'John';
// let age = 20;

// age >=18 ? console.log(firstName + ' drinks beer')
// : console.log(firstName + ' drinks juice'); 

// let drink = age >= 18 ? 'beer' : 'juice';

// console.log(drink);

// SWITCH STATEMENT

let job =  'driver';
let firstName = 'John';

switch(job) {
    case 'teacher':
    console.log(firstName + ' teaches kids how to code');
    break;
    case 'designer':
    console.log(firstName + ' designs web applications');
    break;
    case 'driver':
    console.log(firstName + ' drives uber cars');
    break;
}



// let firstName = 'john';
let age = 12;


switch (true) {
 case age <13:
 console.log(firstName + ' is a boy');
 break;
 case age > 13 && age < 20:
 console.log(firstName + ' is a teenager');
 break;
 case age >= 20 && age < 30:
 console.log(firstName + ' is a man');
 break;

}












 

