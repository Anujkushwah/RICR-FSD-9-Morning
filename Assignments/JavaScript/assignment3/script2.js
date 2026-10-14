
var city = "Bhopal";

let score;

score = 100;

const country = "India";

console.log(city);
console.log(score);
console.log(country);

// we can change the value of city as it is not declared as const
city = "Vidisha";
console.log("City name changed from Bhopal to " + city);

/*
we can not assign any other value to const variable below 
is the example it will give us the complie time error
*/
country = "China";


