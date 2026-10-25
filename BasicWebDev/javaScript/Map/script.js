const numbers = [2, 4, 6, 8];

// 
const doubledNumbers = numbers.map(function(number) {
    return number * 2;
});
console.log("Doubled Nubers:",doubledNumbers);
console.log("Original Numbers:",numbers);



// Converting Numbers into Squares
const squares = numbers.map((number) => {
    return number * number;
});
console.log("Square of numbers:",squares);



// Converting names to upper case
const names = ["amit", "priya", "rahul"];

const upperNames = names.map((name) => {
    return name.toUpperCase();
});
console.log(upperNames);


// Calculating Prices with Tax
const prices = [100, 200, 300];

const pricesWithTax = prices.map((price) => {
    return price + price * 0.10;
});
console.log(pricesWithTax);


// Using the Index in a Callback
const marks = [70, 80, 90];

const result = marks.map((mark, index) => {
    return `Subject ${index + 1}: ${mark}`;
});
console.log(result);



// Why the return Statement Matters
const result2 = numbers.map((number) => {
    number * 2;
});
console.log(result2);
// if we did not write return then the callback will not be called

// below result is with return statement
const result3 = numbers.map((number) => {
    return number * 2;
});
console.log(result3);


// 
