// var teamJohn = 89 + 120 + 103;
// var teamJohnAverage = teamJohn /3;

// var teamMike = 116 + 94 + 123;
// var teamMikeAverage = teamMike /3;

// if(teamJohnAverage > teamMikeAverage) {
//     console.log( 'John\'s team wins it an average score of ' + teamJohnAverage);
// } else if (teamMikeAverage > teamJohnAverage) {
//     console.log( 'Mike\'s team wins it an average score of ' + teamMikeAverage);
// } else {
//     console.log('Both teams at the end of the game tie');
// }



var teamJohn = 89 + 120 + 103;
var teamJohnAverage = teamJohn /3;

var teamMike = 116 + 94 + 123;
var teamMikeAverage = teamMike /3;

var teamMary = 97 + 134 + 105;
var teamMaryAverage = teamMary /3;

if( teamMaryAverage > teamJohnAverage && teamMaryAverage > teamMikeAverage) {
    console.log( 'Mary\'s team wins it an average score of ' + teamJohnAverage);
} else if (teamMaryAverage > teamJohnAverage && teamMaryAverage < teamMikeAverage) {
    console.log( 'Mike\'s team wins it an average score of ' + teamMikeAverage);
} else {
    console.log('Both teams at the end of the game tie');
}

/* 
  mary > john  && mary > mike
    mary > john  && mary < mike
  jonh >  mary && john > mike
    jonh >  mary && john < mike
  mike > mary & mike > john
    mike > mary & mike < john
*/