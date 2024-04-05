// FUNCTIONS IN JAVASCRIPT

// Define a function to add two numbers
function addTwoNumbers(number1, number2) {
    // Parameters 'number1' and 'number2' are inputs to the function
    console.log(number1 + number2); // Display the sum of the numbers
    return number1 + number2; // Return the sum of the numbers
  }
  
  // Calling the function with arguments 3 and 4, which will log and return the sum
  addTwoNumbers(3, 4); // Expected output: 7
  
  // Calling the function with arguments 5 and 6, storing the return value in 'result'
  const result = addTwoNumbers(5, 6); // The sum is returned and stored in 'result'
  console.log(result); // Log the result, expected output: 11
  
  // Define a function to display a login message
  function loginMessage(username) {
    // Check if the 'username' parameter is not provided
    if (username === undefined) {
      console.log('Please enter username'); // Prompt to enter a username if none is provided
      return; // Exit the function
    }
    // Use string interpolation to create a login message
    return `${username} just logged in`; // Return the login message
  }
  
  // Testing the loginMessage function without providing a username
  console.log(loginMessage()); // Expected output: Please enter username
  
  // Testing the loginMessage function with a username
  console.log(loginMessage("Mashood")); // Expected output: Mashood just logged in  