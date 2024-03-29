// 🚨 ARRAYS IN JAVASCRIPT
const myArray = [0, 1, 2, 3, 4, 5, 6];
console.log(myArray[2]); // Output => 2
// In Arrays, when making copies, it creates shallow copies.
// Shallow copy of any object shares the same reference.

const myArray2 = ["Mashood", "Ali"];
console.log(myArray2[0]); // Output => Mashood

// 👇 ARRAY METHODS

myArray.push(7); // Adds a new element at the end of the array.
console.log(myArray); // Output => [0, 1, 2, 3, 4, 5, 6, 7]

myArray.push(8); // Adds a new element at the end of the array.
console.log(myArray); // Output => [0, 1, 2, 3, 4, 5, 6, 7, 8]

myArray.pop(); // Removes the element at the end of the array.
console.log(myArray); // Output => [0, 1, 2, 3, 4, 5, 6, 7]

myArray.unshift(10); // Replaces the first element of the array with the new given element.
console.log(myArray); // Output => [10, 1, 2, 3, 4, 5, 6, 7]

myArray.shift(); // Removes the first element of an array.
console.log(myArray); // Output => [1, 2, 3, 4, 5, 6, 7]

console.log(myArray.includes(9)); // Output => false. Checks if the array contains the specified element.

console.log(myArray.indexOf(3)); // Output => 2

const newArr = myArray.join(); // Join method converts the array into a string.
console.log(newArr); // Output => "1,2,3,4,5,6,7"

// SLICE METHOD
const myArr1 = myArray.slice(1, 7); // In slice method, the 1st argument is the start index (inclusive) and the 2nd argument is the end index (exclusive).
console.log(myArr1); // Output => [ 1, 2, 3, 4, 5, 6 ]

// SPLICE METHOD
const myArr2 = myArray.splice(1, 3); // In splice method, the 1st argument is the start index and the 2nd argument is the number of elements to remove.
console.log(myArr2); // Output => [ 1, 2, 3 ]