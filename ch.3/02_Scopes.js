// This is a global variable because it is declared outside any function
var globalVar = "I am global";

function exampleFunction() {
    // This is a local variable, only accessible within this function
    var localVar = "I am local";
  
    console.log(globalVar); // Accessible here, will log: I am global
    console.log(localVar);  // Also accessible here, will log: I am local
}

exampleFunction();

console.log(globalVar); // Still accessible here, logs: I am global

// Uncommenting the following line would throw an error because localVar is not accessible outside its function
// console.log(localVar);
