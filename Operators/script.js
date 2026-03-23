// Arithmetic Operators
let a = 10;
let b = 3;

console.log("a + b = " + (a + b));
console.log(a % b);

// Comparison Operators
let x = 5;

console.log(x == "5");
console.log(x === "5");
console.log(x === 5);

// Logical Operators
let age = 20;

console.log(age > 18 && age < 30);
console.log(age < 18 || age > 30);
console.log(!(age > 18));

//conditional statements
let marks = 60;

if (marks >= 75) {
    console.log("Grade: A");
} else {
    console.log("Grade: B");
}


//switch statement
let day = 2;

switch (day) {
    case 1: console.log("Monday");
        break;
    case 2: console.log("Tuesday");
        break;
    case 3: console.log("Wednesday");
        break;
    case 4: console.log("Thursday");
        break;
    case 5: console.log("Friday");
        break;
    case 6: console.log("Saturday");
        break;
    case 7: console.log("Sunday");
        break;
    default: console.log("Invalid day");
}


//loop statements

//for loop
for (let i = 1; i <= 5; i++) {
    console.log("Iteration: " + i);
}

//while loop
console.log("while loop")

let i = 1;

while (i <= 5) {
    console.log("Value of i: " + i);
    i++;
}

//do-while loop
let q = 1;
do {
    console.log("Count: " + q);
    q++;
}
while (q <= 5);


//loop control statements
//break statement
// This will print numbers from 1 to 2 and then break out of the loop when i equals 3

for (let i = 1; i <= 10; i++) {
    if (i === 3) {
        break;
    }
    console.log(i);
}

//continue statement
// This will print numbers from 1 to 10, but skip the number 5

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log("Value of i: " + i);
}

//Class Assignment
//Smart number analyzer
//prints numbers to 1 to 20
for (let i = 1; i <= 20; i++) {
    console.log(i);
}

//prints even numbers from 1 to 20
console.log("Even numbers from 1 to 20:");
for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log("Even " + i);
    }
}

//if divisible by 3, print "multiple of 3"
for (let i = 1; i <= 20; i++) {
    if (i % 3 == 0) {
        console.log(i + " is a multiple of 3");
    }
}

//if devisible, by both print "even and multiple of 3"
console.log("Even numbers that are also multiples of 3 from 1 to 20:");
for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0 && i % 3 == 0) {
        console.log(i + " is Even & Multiple of 3");
    }
}

//skip number 13 using continue statement
console.log("skipping number 13:");

for (let i = 1; i <= 20; i++) {
    if (i == 13) {
        continue;
    }
    console.log(i);
}

//question 2
let marksList = [80, 65, 40, 0, 90];

for (let i = 0; i < marksList.length; i++) {
    if (marksList[i] == 0) {
        console.log("invalid marks");
        break;
    }
    else if (marksList[i] >= 75) {
        console.log("Grade: A");
    } else if (marksList[i] >= 50) {
        console.log("Grade: B");
    } else {
        console.log("Grade: Fail");
    }
}

//question 3
// Simple login attempt

let attempts = ["123","","admin","","","admin123"];

for (let i = 0; i < attempts.length; i++) {

    let password = attempts[i];

    if (password === "") {
        console.log("Empty password, try again");
        continue;
    }

    if (password === "admin123") {
        console.log("Login successful");
        break;
    } else {
        console.log("Try Again");
    }
}

//functional declaration
function add(a,b){
    return a + b;
}
console.log(add(5, 3));

//functional expression
const add2 = function(a, b){
    return a + b;
}
console.log(add2(15, 3));

//global scope
// This variable is in the global scope and can be accessed anywhere in the code
let name8 = "Andrew";

function show(){
    console.log("Hello, " + name8);
}

show(); // Output: Hello, Andrew

//funtion scope
function test(){
    let p = 10;
    console.log(p);
}

test(); // Output: 10
// console.log(p); // Error: p is not defined

//block scope
if (true) {
    let g = 20;
    const m = 54; 
}

// console.log(g); // Error: q is not defined
// console.log(m); // Error: m is not defined

//var and let difference
// Using var
if (true) {
    var xb = 75;
}
console.log(xb); // Output: 10

//hoisting with var
console.log(w);
var w = 98; // Output: undefined (due to hoisting)
console.log(w); // Output: 98


//hoisting with let
// console.log(v);
// let v= 78; // Output: ReferenceError: Cannot access 'v' before initialization


// function hoisting
greet(); // Output: Hello, World!
function greet() {
    console.log("Hello, World!");
}