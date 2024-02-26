let x;

// Array
// Mutable
// Array is data structure, collection of items
// Store multiple values in a single variable
// Used to organize and store data
const myArray = [];

// myArray = [1] // can not be reassigned but can be mutated

// add elements to an array by index

myArray[0] = 12;
myArray[1] = 'Hello';
myArray[2] = true;
myArray[3] = null;
myArray[4] = undefined;

// Array Literal
const numbers = [12, 45, 33, 29, 39, 102];
const mixed = [12, 'Hello', true, null];

// Array Constructor
const fruits = new Array('apple', 'grape', 'orange');

// Get value by index
x = numbers[0];

x = numbers[0] + numbers[3];

x = `My favorite fruit is an ${fruits[2]}`;

x = numbers.length

let lastItem = numbers[numbers.length - 1];

delete numbers[0];

fruits[2] = 'pear';

// length is not read-only
fruits.length = 2;

fruits[3] = 'strawberry';

// Using the length as the index will always add on the the end
fruits[fruits.length] = 'blueberry';


fruits.push('peach', 'rasberry');

x = fruits;

console.log(x);

// Destructuring - allows you to extract values from arrays 
// and assign them to variables in a concise and readable way.

// The order of variables corresponds to the order of elements in the array
const colors = ['red', 'green', 'blue', 'purple', 'yellow'];

// Destructuring assignment
const [firstColor , secondColor, thirdColor, ...rest] = colors;

// Using the extracted values
console.log(firstColor);  // Output: 'red'
console.log(secondColor); // Output: 'green'
console.log(thirdColor);  // Output: 'blue'
console.log(rest);        // Output: ['purple', 'yellow']

