const studentPromise = new Promise(function (resolve, reject) {
    const studentName = "Aarav";

    if (studentName) {
        resolve("Student information is ready");
    } else {
        reject("Student information is unavailable");
    }
});

console.log(studentPromise);