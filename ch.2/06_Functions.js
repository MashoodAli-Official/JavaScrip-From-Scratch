// This script defines a function to calculate the area of a rectangle and demonstrates its use.

// Define a function named 'calculateRectangleArea'
// It takes two parameters: 'length' and 'width', representing the dimensions of the rectangle.
function calculateRectangleArea(length, width) {
  /*
  This function calculates the area of a rectangle.
  It takes two arguments:
  - length (number): The length of the rectangle.
  - width (number): The width of the rectangle.
  
  Returns:
  - The area of the rectangle as a number.
  */
  
  // Calculate the area by multiplying 'length' and 'width'
  // This operation follows the formula for rectangle area: Area = length * width.
  const area = length * width;
  
  // Return the calculated area to the function caller.
  return area;
}

// The following code demonstrates how to use the 'calculateRectangleArea' function.

// Define values for 'length' and 'width' for demonstration purposes.
const length = 5;
const width = 3;

// Call the 'calculateRectangleArea' function with 'length' and 'width'.
// Store the result (area of the rectangle) in a variable named 'area'.
const area = calculateRectangleArea(length, width);

// Output the result to the console.
// This shows the practical use of the function and prints the calculated area.
console.log(`The area of the rectangle is: ${area}`);
