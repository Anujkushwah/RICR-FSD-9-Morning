// greet function displays welcome message.
function greeet() {
    console.log("Welcome!");
}
greeet();


// callback function accept a callback and execute it.
function greet() {
    console.log("Hello, Students!");
}

function processUser(callback) {
    callback();
}
processUser(greet);


// 
function processMessage(callback) {
    callback();
}

processMessage(() => {
    console.log("Message processed successfully!");
});


//
const showMessage = () => {
    console.log("Welcome to JavaScript!");
};

function execute(callback) {
    callback();
}
execute(showMessage);


//
function processNumber(callback) {
    callback(10);
}

const displayNumber = (number) => {
    console.log("Number: " + number);
};
processNumber(displayNumber);




