// Immediately invoked function expressions (IIFE)

// 👇👇👇*****Definition*****👇👇👇
// An Immediately Invoked Function Expression (IIFE) in JavaScript is a 
// function that runs as soon as it is defined. It's a common pattern 
// used for creating new scopes and protecting variables from the global 
// scope, especially useful in older JavaScript code before the introduction 
// of block-scoped variables (let and const).

// 👇👇👇 Unnamed IIFE Function 
(function(){
    var message = 'This is unnamed IIFE function';
    console.log(message);// output => This is unnamed IIFE function
})();
// The first pair of parentheses ( contains the function declaration, which turns it into an expression.
// The second pair of parentheses () at the end of the function expression invokes the function right after it’s defined.

// You can also pass arguments to an IIFE like this:
(function (name){
    var message1 = "My name is " + name;
    console.log(message1);
})("Mashood"); //output => This is unnamed IIFE function
//In this case, "John" is passed as an argument to the IIFE, which then prints "Hello, John" to the console.