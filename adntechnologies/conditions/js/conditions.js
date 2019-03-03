//compare 3 numbers 

var num1 = 5;
var num2 = 25;
var num3 = 75;

// num1 < num2
if (num1 < num2 && num1 < num3) {
    document.write(num1 + " is less than " + num2 + " and " + num3 );  
} else if (num1 > num2 && num1 > num3) {
    document.write(num1 + " is greather than " + num2 + " and " + num3 );
} else {
    document.write(num1 + " is not greater or less than " +num2 + " and " +  num3 + "\n" );
}

//num 2 > num 3 & num 1

if(num2 > num3 && num2 > num1) {
    document.write(num2 + " is greater than " + num3 + " and" + num1);
} else if(num2 < num3 && num2 < num1 ) {
    document.write(num2 + " is less than " +num3 + " and" + num1);
} else {
    document.write(num2  + " is not greater or less than " + num3 + " but is greater " +  num1 + "\n" );
}

//num3 > num1 & num3 > num2
if(num3 > num1 && num3 > num2) {
 document.write(num3 + " is greathe than " + num1 + " and greather than " + num2);
} else if (num3 < num1 && num3 < num2) {
 document.write(num3 + " is less than " + num1 + "less than " + num2);
} else {
    document.write(num3 + " is not less or greater than " + num1 + " and" +  num2 + "\n" );
}


