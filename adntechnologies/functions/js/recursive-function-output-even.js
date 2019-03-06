/* The% operator is used to test whether a number
is even or odd but we have another
method that can be summarized as this:
  0 is even
1 is odd
Any other positive number N is likewise
type than (N - 2).
Write a recursive function isEven () that
corresponds to this description.Recursive 
function is a function that calls itself during
its execution. This enables the function to repeat 
itself several times, outputting the result and the 
end of each iteration. */

function isEven() {
    for (let i =1; i<=100; i++) {
        if(i%2 == 0) {
             console.log(i + " is even");
        } else {console.log( i + " is odd");}
    }
}

isEven();