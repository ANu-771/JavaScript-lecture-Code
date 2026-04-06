//import keyword is used to import the exported functions, objects, or values from other files
import {name5, greet5} from './script.js';
console.log(name5);
greet5();
console.log(`Hello our new Employee, ${name5}!`); // Hello, Kamal!

//task 2
import {name6, city} from './script.js';
console.log(name6); // Nimal
console.log(city);

//task 3
import {add} from './script.js';
console.log(add(5, 3)); // 8
console.log(add(10, 20)); // 30

//default function
// import greet9 from './script.js';
// greet9();

//task 1
import multiply9, {num9} from './script.js';
console.log(num9); // 10

console.log(multiply9(4, 3)); // 12

//task 2
import { age4 as userage } from './script.js';
console.log(userage); // 30