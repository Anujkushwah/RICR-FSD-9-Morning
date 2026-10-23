
// Part 1
// courses array creation
const courses = ["JAVA", "HTML", "CSS"];

// current courses
console.log(courses);

// add courses using push
courses.push("JavaScript", "React");

// courses after addition
console.log(courses);

// new length of the courses
console.log("Courses length:", courses.length);

// storing removed course
const removedCourse = [courses.pop()];

// updated array after removing courses
console.log(courses);

// storing removed courses
console.log("Removed course:", removedCourse);

// adding courses in the begining
courses.unshift("DSA");

// display courses after adding courses in the begining
console.log(courses);

// course length after addition of course in the beginin
console.log("Courses new length after unshift:", courses.length);

// removing elements from the begining using shift
removedCourse.push(courses.shift());

// removed course using shift
console.log("removed course:", removedCourse[removedCourse.length - 1]);

// display the array after removing course from begining
console.log(courses);



// Part 2
// creating students array
const students = ["Rajesh", "Rani", "Ashi", "Shubham"];

// displaying the created students array
console.log(students);

// removing first name using shift
let removedList = students.shift();

// displaying the removed name from array
console.log("Removing:",removedList);

// displaying the remaining array
console.log(students);

// adding newly registered student
students.push("Vikas");

// adding priority student in the begining
students.unshift("Anuj");

// removing last student name from array
students.push();

// displaying final student list
console.log(students);

// new length of students
console.log("new length of the student is:", students.length);

