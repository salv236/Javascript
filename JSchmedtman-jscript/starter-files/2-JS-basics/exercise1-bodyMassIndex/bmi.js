// weight

// let markMass = 75;
// let johnMass = 82;

// //height
// let johnHeight = 175;
// let markHeight = 190;

// //bmi

// let bmiForJohn = johnMass / (johnHeight * johnHeight);
// let bmiForMark = markMass /(markHeight * markHeight);

// let heaviest =  bmiForMark > bmiForJohn;

// console.log('is Mark\'s BMI larger than John\'s ' + ' ' + heaviest);

// REFACTORED WITH IF/ELSE


let markMass = 75;
let johnMass = 82;

//height
let johnHeight = 175;
let markHeight = 190;

//bmi

let bmiForJohn = johnMass / (johnHeight * johnHeight);
let bmiForMark = markMass /(markHeight * markHeight);

if(bmiForMark > bmiForJohn) {
    console.log('mark is heavier');
} else {
    console.log('John is heavier');
}
