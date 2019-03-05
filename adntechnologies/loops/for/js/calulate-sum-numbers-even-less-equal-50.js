// calculate numbers that are even which are less than or equal to 50

let result = 0;
for(let i =0; i<=50; i+=2){   
    //console.log(i);
    if(i%2 == 0){
        result +=i;
    }
}

console.log(result);