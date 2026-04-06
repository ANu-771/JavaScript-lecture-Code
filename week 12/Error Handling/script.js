try{
    let x = y; //error
} catch(error){
    console.log("Error occurred");
}


// ES6 features

// let & const
// let - value can be changed but not redeclared
// const - value cannot be changed or redeclared

// template literals
let name1 = "Kamal";
console.log(`Hello, ${name1}!`); // Hello, John!

// destructuring
//extrat values from objects and arrays
let person = {
    name: "Nimal",
    age: 25,
    address: "GALLE"
};

const {name, age, address} = person;
console.log(`Hello, ${name}!, You are ${age} and live in ${address}.`); // Hello, Nimal! You are 25 years old and live in Galle.


//spread operator
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]

//rest operator
function sum(...num){
    return num.reduce((a, b) => a + b, 0);
}

//caling the function
let result1 = (sum(1, 2, 3)); // 6
let result2 = (sum(4, 5)); // 9

console.log(result1); // undefined
console.log(result2); // undefined

//default parameters
function greet(name = "Guest"){
    console.log(`Hello, ${name}!`);
}

greet(); // Hello, Guest!
greet("Kamal"); // Hello, Kamal!

//DEFALUT PARAMETERS TASK 1
function sendMessage(msg = "Welcome..!"){
    console.log(msg);
}

sendMessage(); // Welcome..!
sendMessage("Hello..!"); // Hello, World! 

//task 2
function multiply(a, b = 1){
    return a * b;
}
console.log(multiply(5)); // 5
console.log(multiply(6, 2)); // 12

function totalPrice(price, tax = 0.1){
    return price + (price * tax);
}

console.log(totalPrice(100)); // 110
console.log(totalPrice(100, 0.2)); // 120

// import and export js files
// export - to make functions, objects, or values available for use in other files
// import - to use functions, objects, or values from other files

export const name5= "Kamal";
export function greet5(){
    console.log("Hello im from file 1!");
}

//task 2
export const name6 = "Nimal";
export const city = "Galle";

//task 3
export function add(a, b){
    return a + b;
}

//defalut function
//default export - only one default export per file, can be imported without curly braces
// export default function greet9(){
//     console.log("Hello, im a default function!");
// }

//task 1
export const num9 = 10;

export default function multiply9(a, b){
    return a * b;
}

//task 2
export const age4 = 30;
