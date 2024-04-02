// 1. Function Declaration
function add(a, b) {
    // Adds two numbers and returns the result
    return a + b;
  }
  console.log('Function Declaration:', add(2, 3)); // Outputs: 5
  
  // 2. Function Expression
  const subtract = function(a, b) {
    // Subtracts 'b' from 'a' and returns the result
    return a - b;
  };
  console.log('Function Expression:', subtract(5, 2)); // Outputs: 3
  
  // 3. Arrow Function (ES6)
  const multiply = (a, b) => {
    // Multiplies 'a' by 'b' and returns the result
    return a * b;
  };
  const divide = (a, b) => a / b; // With implicit return
  console.log('Arrow Function:', multiply(4, 5)); // Outputs: 20
  console.log('Arrow Function with Implicit Return:', divide(10, 2)); // Outputs: 5
  
  // 4. Immediately Invoked Function Expression (IIFE)
  (function() {
    console.log('IIFE:', 'This runs right away!');
  })();
  
  // 5. Callback Functions
  function greeting(name, callback) {
    console.log('Callback Function:', 'Hello, ' + name);
    callback();
  }
  greeting('Alice', function() {
    console.log('This is a callback function being executed.');
  });
  
  // 6. Default Parameters (ES6)
  function greet(name = 'Guest') {
    console.log('Function with Default Parameters:', 'Hello, ' + name + '!');
  }
  greet(); // Outputs: Hello, Guest!
  greet('John'); // Outputs: Hello, John!
  