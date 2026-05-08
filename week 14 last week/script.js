// console.log("Start");

// setTimeout(() => {
//     console.log("Runs after 3 seconds");
// }, 3000);

// console.log("End");

//setInterval

const id = setInterval(() => {
    console.log("Running.....");
}, 1000);

setTimeout(() => {
    clearInterval(id);
    console.log("Stopped");
}, 5000);