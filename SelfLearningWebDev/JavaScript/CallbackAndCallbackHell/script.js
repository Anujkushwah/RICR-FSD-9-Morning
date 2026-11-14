// callback function
function greetStudent(name, callback) {
    console.log("Hello, " + name);
    callback();
}

function showCompletion() {
    console.log("Greeting completed!");
}

greetStudent("Aman", showCompletion);




// Using an anonymous function as a callback
function calculateTotal(price, callback) {
    const total = price * 2;
    callback(total);
}

calculateTotal(100, function (result) {
    console.log("Total amount:", result);
});



// Passing data to a callback
function getStudentName(callback) {
    const studentName = "Priya";
    callback(studentName);
}

getStudentName(function (name) {
    console.log("Student:", name);
});




// Callbacks in Asynchronous Operations
// Using callbacks with setTimeout()
console.log("Start");

setTimeout(function () {
    console.log("Task completed");
}, 2000);

console.log("End");



// Using a callback to complete a task
function showReminder(callback) {
    setTimeout(function () {
        callback();
    }, 1000);
}

showReminder(function () {
    console.log("Time to take a break!");
});



// Callbacks can receive results
function calculateMarks(marks, callback) {
    const total = marks[0] + marks[1] + marks[2];
    callback(total);
}

calculateMarks([80, 75, 90], function (result) {
    console.log("Total marks:", result);
});



// Callback Hell
// What is callback hell?
function prepareFood(callback) {
    setTimeout(function () {
        console.log("Food prepared");
        callback();
    }, 500);
}

function serveFood(callback) {
    setTimeout(function () {
        console.log("Food served");
        callback();
    }, 500);
}

prepareFood(function () {
    serveFood(function () {
        console.log("Meal completed");
    });
});



// Why does callback hell happen?
getStudent(function (student) {
    calculateScore(student, function (score) {
        prepareSummary(score, function (summary) {
            displayResult(summary);
        });
    });
});


