
// charat()
const language = "JavaScript";
// 
console.log(language.charAt(0));
console.log(language.charAt(4));
console.log(language.charAt(9));

// at()
console.log(language.at(0));
console.log(language.at(-1));
console.log(language.at(-2));




// slice()
const text = "JavaScript";

console.log(text.slice(0, 4));
console.log(text.slice(4, 10));
console.log(text.slice(4));
console.log(text.slice(-6));

// substring()
console.log(text.substring(0, 4));
console.log(text.substring(4, 10));
console.log(text.substring(4));



// indexof()
const text1 = "Learn JavaScript";

console.log(text1.indexOf("Java"));
console.log(text1.indexOf("Script"));
console.log(text1.indexOf("Python"));


//
const text2 = "hello hello";

console.log(text2.indexOf("hello"));
console.log(text2.indexOf("hello", 1));

// last indexof()
console.log(text2.lastIndexOf("hello"));
console.log(text2.lastIndexOf("l"));




// include()
const email = "student@example.com";

console.log(email.includes("@"));
console.log(email.includes("gmail"));


// startswith and endswith
const filename = "assignment.pdf";

console.log(filename.startsWith("assignment"));
console.log(filename.endsWith(".pdf"));
console.log(filename.endsWith(".jpg"));


// replcing and changing text
// replace()
const message = "HTML is useful. HTML is popular.";

console.log(message.replace("HTML", "JavaScript"));

// it doesnt change or update the variable it only gives a result where replace is used.
console.log(message);

// replaceall()
console.log(message.replaceAll("HTML", "JavaScript"));

// toUpperCase()
const text3 = "JavaScript Methods";
console.log(text3.toUpperCase());

// toLowerCase()
console.log(text3.toLowerCase());


// remove whitespaces and combining strings
// trim()
const name = "   Rahul Sharma   ";
console.log(name.trim());


// trimStart() and trimEnd()
const text4 = "   Hello   ";

console.log(text4.trimStart());
console.log(text4.trimEnd());



// concate
const first = "Hello";
const second = "Students";

console.log(first.concat(" ", second));

// repeat()
console.log("Hi ".repeat(3));
console.log("*".repeat(5));


// split()

// below is the syntax
// string.split(separator);

// split() example
const subjects = "HTML,JavaScript,React";
console.log(subjects.split(","));


// split a santance by space
const sentence = "JavaScript is useful";
console.log(sentence.split(" "));


// split into individual basic characters
const word = "CODE";
console.log(word.split(""));


// no separator
console.log("HTML CSS JS".split());


