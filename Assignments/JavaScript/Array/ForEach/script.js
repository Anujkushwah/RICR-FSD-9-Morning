
// Part 1
// Create a JavaScript program to generate a student course report using forEach().
// creating an array
const courses = ["JAVA", "DSA", "HTML", "CSS", "JavaScript", "Bootstrap", "OOP"];

// for each to display the array
courses.forEach((course) => {
    console.log(course);
});


// for each with numbering
courses.forEach(function (courses, index) {
    console.log(`${index + 1}. ${courses}`);
});


// calculating the total of all marks
const marks = [100, 66, 74, 49, 83, 77, 79, 61];
let total = 0;
marks.forEach((marks) => {
    total = total + marks;
});
console.log("Total of all Marks:", total);

// Here we used index parameter to show the position number of the course element and the element against the number start with 1 instead of zero.




// Part 2
// Create a JavaScript program to generate a product price report using forEach().

// creating an array
const products = ["Laptop", "Desktop", "Mobile", "TVision", "Tablet"];

// creating corresponding product price array
const prices = [62949, 80110, 25890, 28720, 55910];


// display the product and corresponding price with index
products.forEach(function (products, index) {
    const prodPrice = prices[index];
    console.log(`${index + 1} | ${products} | ${prodPrice}`);
});


// calculate the total price of all products
let totalCalculatedPrice = 0;
prices.forEach((newPrice) => {
    totalCalculatedPrice = newPrice + newPrice;
});
console.log(totalCalculatedPrice);

// displaying the original arrays showing that no changes in the original arrayrs
console.log(products);
console.log(prices);


// using arrow functon for callbacks
products.forEach((products, index) => {
    console.log(`${index} | ${products}`);
});
