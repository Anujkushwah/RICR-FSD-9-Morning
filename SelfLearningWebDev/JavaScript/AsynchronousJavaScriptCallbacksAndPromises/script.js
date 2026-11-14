
// Understanding Synchronous JavaScript
console.log("First");
console.log("Second");
console.log("Third");


// function to calculate total price
function calculateTotal(price, quantity) {
    return price * quantity;
}

console.log("Calculation started...");

const total = calculateTotal(200, 3);

console.log("Total = ", total);
console.log("Calculation finished.");



// A simple asynchronous example using
console.log("Start");

setTimeout(() => {
    console.log("Timer finished");
}, 2000);

console.log("End");




// Synchronous versus asynchronous execution
// synchronous
console.log("Prepare");
console.log("Cook");
console.log("Serve");

// asynchronous
console.log("Prepare");

setTimeout(() => {
    console.log("Cook");
}, 1000);

console.log("Serve");




// When should you use synchronous code?
const htmlMarks = 80;
const cssMarks = 75;
const jsMarks = 90;

const totalT = htmlMarks + cssMarks + jsMarks;

console.log("Total marks:", totalT);
console.log("Calculation complete");


// When should you use asynchronous behavior?
console.log("Request started");

setTimeout(() => {
    console.log("Information received");
}, 1500);

console.log("Page can continue working");






