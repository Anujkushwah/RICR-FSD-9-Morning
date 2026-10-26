

// class work - creating accessing arrays
const courses = ["JAVA", "HTML", "CSS", "JAVASCRIPT"];

console.log(courses);

console.log(courses[0]);

console.log(courses[courses.length-1]);

console.log(courses.length);

const studentDetails = ["Anuj", "33", "true"];

for(var i=0; i<studentDetails.length; i++)
{
    console.log(studentDetails[i]);
}


// class work - updating and removing elements
const course = ["HTML", "JAVA", "JavaScript", "CSS"];
console.log(course);

// HTML to Bootstrap
console.log(course[0]);
course[0] = "Bootstrap";
console.log(course[0]);

// JavaScript to React
console.log(course[2]);
course[2] = "React";
console.log(course[2]);

// create an array mark
const mark = [60, 70, 75, 90];
console.log(mark);

// array length before updating array
console.log(mark.length);

console.log(mark[2]);
mark[2] = 85;
console.log(mark[2]);
console.log(mark);

// array length after updating array
console.log(mark.length);



// class work - push, pop, shift, unshift
const course_name = ["JAVA", "HTML", "JavaScript"];
console.log(course_name);

// adding elements at the end in array
course_name.push("Bootstrat");
console.log(course_name);

// removing last element from array
course_name.pop("HTML");
console.log(course_name);

// removing first element from arrary
course_name.shift();
console.log(course_name);

// adding element at start in arrary
course_name.unshift("DSA");
console.log(course_name);



// creating a course selecting program using JavaScript arrays
const courses_arr = ["JAVA", "DSA", "HTML", "CSS", "JavaScript"];

console.log(courses_arr);

let selectedCourses = courses_arr.slice(1, 3);
console.log(selectedCourses);




