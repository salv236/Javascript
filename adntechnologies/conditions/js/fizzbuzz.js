// numbers divisble by 3 = fizz
// numbers divisible by 5  = buzz
// numbers divisible by 5 and 3 = fizzbuzz

for (let i = 1; i<=100; i++) {
 if(i%3 ==0 && i%5 == 0) {
    console.log(i + " FIZZBUZZ");
 } else if(i%3 == 0) {
    console.log(i + " FIZZ");
 } else if (i%5 ==0) {
    console.log(i + " BUZZ");
 } else {
     console.log(i + " NO FIZZ OR BUZZ");
 }
}