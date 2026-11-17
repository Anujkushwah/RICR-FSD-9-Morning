const studentPromise = new Promise(function (resolve, reject) {
    const studentName = "Aarav";

    if (studentName) {
        resolve("Student information is ready");
    } else {
        reject("Student information is unavailable");
    }
});

console.log(studentPromise);




// Pending state of a promise
const resultPromise = new Promise((resolve, reject) => {
    // The outcome has not been decided yet.
});

console.log(resultPromise);



// Fulfilled state of a promise
const resultPromise1 = new Promise((resolve, reject) => {
    resolve("Student result is ready");
});

console.log(resultPromise1);



// Rejected state of a promise
const resultPromise2 = new Promise((resolve, reject) => {
    reject("Student result could not be loaded");
});

console.log(resultPromise2);




// From pending to fulfilled
const marksPromise = new Promise((resolve, reject) => {
    resolve(85);
});



// From pending to rejected
const marksPromise1 = new Promise((resolve, reject) => {
    reject("Marks are unavailable");
});



// Can a settled Promise change state again?
const taskPromise = new Promise((resolve, reject) => {
    resolve("Task completed");
    reject("Task failed");
});





