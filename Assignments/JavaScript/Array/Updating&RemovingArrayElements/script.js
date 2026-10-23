// Part 1
const marks = [99, 78, 85, 33, 56];

const courses = ["JavaScript", "HTML", "CSS"];

console.log("student marks before:", marks);
console.log("marks length before:", marks.length);
marks[0] = 55;
marks[3] = 100;
console.log("students marks after:", marks);
console.log("marks length after:", marks.length);

console.log("courses before:", courses);
console.log("course length before:", courses.length);
courses[0] = "JAVA";
courses[2] = "React";
console.log("courses after:", courses);
console.log("course length after:", courses.length);


// Part2
const products = ["Mobile", "Laptop", "Smart Watch", "Desktop"];
console.log("Products before updating:", products);
products[1] = "Dell Laptop";
console.log("Products after updating:", products);
console.log("products length is:",products.length);

products[5] = "Fridge";

console.log(products);
console.log(products.length);

console.log(products[4]);

// when we replace the element the existing element removed and new element updated.
// however, when we assigin a value beyond the current end of an array the value will be added after last index.
