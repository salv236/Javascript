//EXAMPLE 1

const a = {
    start: { x: 5, y: 6},
    end: { x: 6, y: -9 }
  };

  // nested destructured statement 
  const { start : { x: startX, y: startY }} = a;
  console.log(startX, startY); // 5, 6


  //EXERCISE

  const LOCAL_FORECAST = {
    today: { min: 72, max: 83 },
    tomorrow: { min: 73.3, max: 84.6 }
  };
  
  function getMaxOfTmrw(forecast) { //parametre represents LOCAL_FORECAST
    "use strict";
    // change code below this line
    const {tomorrow: {max:maxOfTomorrow}} = forecast   //extraction with destruction from nested object
    // change code above this line
    return maxOfTomorrow;
  }
  
  console.log(getMaxOfTmrw(LOCAL_FORECAST)); // should be 84.6
