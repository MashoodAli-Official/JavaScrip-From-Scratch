//ANONYMOUS FUNCTION

// An anonymous function in JavaScript is a function that is not explicitly named 
// and is typically used as an expression or passed as an argument to another function.
var square = function(number){
    return number * number;
};
console.log(square(5));

// In this 👆👆 example, we define an anonymous function that takes a number as an argument and 
// returns the square of that number. We then assign this anonymous function to the variable 
// square.

// When we call square(5), it invokes the anonymous function with the argument 5, and it 
// returns the result of 5 squared, which is 25.