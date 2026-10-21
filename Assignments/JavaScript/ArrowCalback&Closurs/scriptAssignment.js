//1. welcome arrow function
const welcome = () => {
    console.log("Welcome!");
}
welcome();


//2. greet function with name parameter
const greet = (name) => {
    console.log("Welcome", name);
}
greet("Anuj");


//3. add arrow function with two parameters that returns their sum using an explicit return statement.
const add = (a, b) => {
    return a + b;
}
let result = add(5, 8);
console.log(result);


//4. square arrow function that returns the square of a number using implicit return.
const square = (a) => {
    return a*a;
}
let squResult = square(10);
console.log(squResult);


//5. call each function with sutable arguments and || 6. display the returned value using console.log 
welcome();
greet("Anuj Kushwah!")
console.log(add(10, 50));
console.log(square(5));


// calculateTotal arrow function with price and quantity parameters.
const calculateTotal = (price, quantity)=>{
let finalPrice = price*quantity;
    return finalPrice;
}
console.log(calculateTotal(7, 50));

let storedValue = calculateTotal(10,12);
console.log(storedValue);


const getMessage = (name)=>{
console.log("Hello", name, "welcome to the FSD programe where we learn the complete WebDevelopment.");
}
getMessage("Anuj K");
