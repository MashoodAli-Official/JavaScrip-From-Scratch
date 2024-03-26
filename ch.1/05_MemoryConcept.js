// 🚨 How memory works in JavaScript:

// 👇 Stack memory is used for primitive data types.
// Whenever a variable is declared, it stores a copy of the variable.

// 👇 Heap memory is used for non-primitive or reference data types.
// When an OBJECT, ARRAY, or FUNCTION is declared, it stores the original value reference.

// 👇 Stack memory example
let firstName = "Mashood"; // firstName variable is stored in stack memory
let lastName = firstName;  // lastName variable is assigned a copy of the value stored in firstName (also stored in stack memory)
lastName = 'Ali';   // lastName variable is reassigned a new value ('Ali'), modifying its copy of the original value
console.log(firstName); // Output: Mashood
console.log(lastName); // Output: Ali

// 👇 Heap memory example 
// Declaring a non-primitive data type, an object with properties 'name' and 'email'
let obj = {
    name : "Tom",  // Storing 'name' property in heap memory
    email: "user#email.com", // Storing 'email' property in heap memory
};
// Modifying the value of the 'name' property of the object
obj.name = 'Felton'; // Changing the value stored in heap memory for the 'name' property
console.log(obj); // Output: { name: 'Felton', email: 'user#email.com' }
