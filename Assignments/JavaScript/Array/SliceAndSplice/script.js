
// Part 1

// creating course list
const courses = ["JAVA", "OOP", "DSA", "HTML", "CSS", "JavaScript"];
console.log(courses);

// storint values in new array using slice(1,4)
const newCourseArr = [courses.slice(1, 4)];

// using slice(2)
const newCourseArr2 = courses.slice(2);

// using negative index
const negativeIndex = courses.slice(-2);

// displaying each extracted array
console.log(newCourseArr);
console.log(newCourseArr2);
console.log(negativeIndex);
console.log(courses);



// Part 2
// creating a new courses list
const courses2 = ["Hindi", "English", "Math", "Science", "Social Science"];

// Courses2 array
console.log(courses2);

// storing removed courses
let remCourses2 = courses2.splice(1, 2);

// removed courses
console.log(remCourses2);

// updated courses2 array
console.log(courses2);

// adding elements using splice
courses2.splice(1, 0, "Computer Science", "Physics");

// updated array
console.log(courses2);

// replacing array
courses2.splice(4, 1, "Chemistry");

// updated array
console.log(courses2);

// splice can modify the array by adding and removing the elements from array with the exact position by using splice(1,0) for addition of elements with setting 0 to delete element and replacing elements setting index value to delete and add.


