/*further reading - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
                    https://codeburst.io/javascript-what-are-template-literals-5d08a50ef2e3
                    https://flaviocopes.com/javascript-template-literals/#interpolation*/

//EXERCISE

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
  };
  // arr represents the index value in the array object  
  function makeList(arr) {
    "use strict";
  
    // uisng map to loop each individual element
    const resultDisplayArray = arr.map(item => `<li class="text-warning">${item}</li>`);
    // change code above this line
  
    return resultDisplayArray;
  }
  /**
   * makeList(result.failure) should return:
   * [ `<li class="text-warning">no-var</li>`,
   *   `<li class="text-warning">var-on-top</li>`, 
   *   `<li class="text-warning">linebreak</li>` ]
   **/
  const resultDisplayArray = makeList(result.failure);