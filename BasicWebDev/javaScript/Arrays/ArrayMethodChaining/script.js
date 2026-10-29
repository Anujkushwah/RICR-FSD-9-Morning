// without method chaining
const numbers = [2, 5, 8, 11, 14];
const filteredNumbers = numbers.filter((number) => number > 5);
const doubledNumbers = filteredNumbers.map((number) => number * 2);
console.log(doubledNumbers);


// with method chaining
const result = numbers
    .filter((number) => number > 5)
    .map((number) => number * 2);
console.log(result);



// 
const marks = [25, 45, 60, 35, 80];
const result1 = marks
    .filter((mark) => mark >= 40)
    .map((mark) => mark + 5);
console.log(result1);


//
const prices = [100, 250, 400, 150, 500];
const result2 = prices
    .filter((price) => price >= 200)
    .map((price) => price * 0.9);
console.log(result2);


// Order and result of metho chaining
const numbers1 = [2, 5, 8, 11];

const result6 = numbers1
    .filter((n) => n > 5)
    .map((n) => n * 2);

const result7 = numbers1
    .map((n) => n * 2)
    .filter((n) => n > 5);
console.log(result6);
console.log(result7);


//
const numbers5 = [1, 2, 3];
const result10 = numbers5
    .map((n) => n * 2)
    .filter((n) => n > 2);
console.log(result10);