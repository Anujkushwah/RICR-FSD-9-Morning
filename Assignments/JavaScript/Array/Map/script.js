const marks = [10, 20, 25, 35, 15];

const mark = marks.map(function (mark) {
    return mark * mark;
});

console.log(mark);
console.log(marks);


const mark1 = marks.map((mark, index) => {
    return `Subject ${index + 1}: ${mark}`;
});
console.log(mark1);


console.log(marks);
console.log(mark);
console.log(mark1);

// map callbacks the function by return statement
// map returns the new array hence, original array remains unchanged



// Part 2
//
const products = ["Laptop", "Desktop", "Tablet", "Mobile"];

//
const prices = [30000, 50000, 33000, 20000];

//
const pricesWithTax = prices.map((price) => {
    return price + price * 0.18;
});
console.log("Prices with Tax:", pricesWithTax);
console.log("Original prices:", prices);


// doubt in the combining both arrays need to clear with Raj sir
const result = products.map((product, index, OrgPrice, PriWithTax) => {
    return `${product},${OrgPrice},${PriWithTax}`;
});
console.log(result);

//
const result2 = products.map((products, index) => {
    console.log(` ${index + 1} | ${products}`);
});

// keep original arrays unchanged
console.log(products);
console.log(prices);


