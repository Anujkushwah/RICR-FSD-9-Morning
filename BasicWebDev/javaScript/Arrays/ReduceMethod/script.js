//
const numbers = [10, 20, 30, 40];
const total = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
console.log(total);


//
const numbers1 = [5, 10, 15];
const total1 = numbers1.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 100);
console.log(total1);


// Calculating the Product of Numbers
const numbers3 = [2, 3, 4];
const product = numbers3.reduce((acc, number) => {
    return acc * number;
}, 1);
console.log(product);

// count passing marks
const marks = [35, 65, 80, 28, 90];
const passingCount = marks.reduce((count, mark) => {
    return mark >= 40 ? count + 1 : count;
}, 0);
console.log(passingCount);