// 1. Creating Strings primitives
let greeting = "Hello, World!"; // Using double quotes
let message = 'JavaScript Basics'; // Using single quotes
let backticks = `Strings in JavaScript`; // Using backticks (template literals)

// String object
let str = new String("Hello, World!");

// 2. String Length
let length = greeting.length; // Getting the length of a string


// 3. Concatenation
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName; // Concatenating strings with the + operator
let templateFullName = `${firstName} ${lastName}`; // Using template literals for concatenation

console.log(templateFullName);
// 4. Accessing Characters
let firstCharacter = greeting[0]; // Accessing the first character (zero-based index)
let lastCharacter = greeting[greeting.length - 1]; // Accessing the last character

// 5. String Methods
let uppercaseMessage = message.toUpperCase(); // Convert to uppercase
let lowercaseMessage = message.toLowerCase(); // Convert to lowercase
let indexOfWorld = greeting.indexOf("World"); // Find the index of a substring
let slicedGreeting = greeting.slice(0, 5); // Extract a substring
let substring = greeting.substring(0, 5); // Extract a substring
let includes = greeting.includes("World");
let startsWith = greeting.startsWith("Hello");
let endsWith = greeting.endsWith("!");
let trim = '    Hello, World!    '.trim();

let indexOf = greeting.indexOf("World");
let lastIndexOf = greeting.lastIndexOf("World");
let replace = greeting.replace("World", "Universe");
let split = message.split(" ")

// Chaining Methods
let reverseWords = message.split(" ").reverse().join(" ");

// 6. String Comparison
let string1 = "apple";
let string2 = "orange";
let areEqual = string1 === string2; // Comparing strings for equality

// 7. Escape Characters
// Escape notation link: https://www.geeksforgeeks.org/what-are-escape-characters-in-javascript/
let escapedString = "This is a \"quoted\" string"; // Using escape characters
let quotes = "This is a 'quoted' string";
let quotes2 = 'This is a "quoted" string';
let quotes3 = `This is a 'quoted' string`;

let newLine = "Hello,\nWorld!";

// 8. String Template Literals
let age = 25;
let templateString = `My name is ${firstName}, and I am ${age} years old.`; // Using template literals with variables

// 9. String Manipulation
let replacedString = message.replace("JavaScript", "Web Development"); // Replace a substring

// 10. String Conversion
let numberAsString = String(42); // Convert a number to a string


// Outputting Results
// console.log("Greeting:", greeting);
// console.log("String Length:", length);
// console.log("Full Name:", fullName);
// console.log("Template Full Name:", templateFullName);
// console.log("First Character:", firstCharacter);
// console.log("Last Character:", lastCharacter);
// console.log("Uppercase Message:", uppercaseMessage);
// console.log("Lowercase Message:", lowercaseMessage);
// console.log("Index of 'World':", indexOfWorld);
// console.log("Sliced Greeting:", slicedGreeting);
// console.log("Are Equal:", areEqual);
// console.log("Escaped String:", escapedString);
// console.log("Template String:", templateString);
// console.log("Replaced String:", replacedString);
// console.log("Number as String:", numberAsString);
