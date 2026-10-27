// array number filter
const numbers = [5, 12, 8, 20, 3, 15];

const result = numbers.filter(function (number) {
    return number < 0;
})
console.log(result);



// srray string filter
const names = ["Amit", "Priya", "Rahul", "Neha", "Sandeep"];

const strResult = names.filter((name) => {
    return name.length > 4;
});
console.log(strResult);


const newStrResult = names.filter((name1) => {
    return name1 === "Amit";
});
console.log(newStrResult);


// selecting passing marks
const marks = [35, 72, 28, 90, 45, 18];
const passingMarks = marks.filter((mark) => mark >= 40);
console.log(passingMarks);


// using parameter
const colors = ["Red", "Green", "Blue", "Yellow"];
const result2 = colors.filter((color, index) => index >= 2);
console.log(result2);


// The Original Array Remains Unchanged
const numbers1 = [10, 15, 20, 25, 30];
const result3 = numbers1.filter((number) => number >= 20);
console.log(result3);
console.log(numbers1);


// no elements matches
const numbers3 = [2, 4, 6, 8];
const result4 = numbers3.filter((number) => number > 10);
console.log(result4);
