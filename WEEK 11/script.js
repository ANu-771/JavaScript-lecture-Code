// string methods
let text = " Hello World ";

console.log(text.length); // length of the string
console.log(text.toUpperCase()); // convert to uppercase
console.log(text.toLowerCase()); // convert to lowercase
console.log(text.trim()); // remove whitespace from both ends
console.log(text.includes("World")); // check if string includes a substring
console.log(text.slice(1, 6)); // extract a part of the 



//template literals

let name = "Alice";
let age = 30;

// using template literals to create a string
let greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting); // output: Hello, my name is Alice and I am 30 years old.

//number methods
let num = 3.14159;

console.log(num.toFixed(2)); // round to 2 decimal places
console.log(parseInt(num)); // convert to integer
console.log(parseFloat(num)); // convert to floating-point number
console.log(Number(num)); // convert to number

console.log(num.toExponential(2)); // convert to exponential notation with 2 decimal places
console.log(num.toString()); // convert number to string
console.log(Number.isInteger(num)); // check if the number is an integer
console.log(Number.isNaN(num)); // check if the value is NaN

//math object

console.log(Math.round(4.6)) // round to the nearest integer
console.log(Math.ceil(4.2)) // round up to the nearest integer
console.log(Math.floor(4.8)) // round down to the nearest integer
console.log(Math.random()) // generate a random number between 0 and 1
console.log(Math.max(1, 5, 3)) // find the maximum value among the arguments
console.log(Math.min(1, 5, 3)) // find the minimum value among the arguments

//dom

