/* write a function that converts farenheight to celcius */

function convertToFarenheight(celcius) {
  
    var tempF = ( celcius -32) *5/9;

    return tempF;
}

console.log(convertToFarenheight(12));



/* write a function that converts celcius to farenheight */

    function convertToCelcius(fheight) {
   
    var tempC = (fheight *9 /5) + 32;
     return tempC;
   }

   convertToCelcius(20);

   console.log("Temperature in Celcius is " + convertToCelcius(20) + " Temperature in farenheight is " + convertToFarenheight(10));


