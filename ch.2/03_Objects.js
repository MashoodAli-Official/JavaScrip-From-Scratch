// 🚨 OBJECTS IN JAVASCRIPT

// 👇 Singleton Object
// Singleton objects are created using Object.create() method.
// This method creates a new object with the specified prototype object.
const singletonObject = Object.create(null);

// 👇 Literal Objects
// Object declaration with key-value pairs.
const newUser = {
    userName: "Mashood",
    age: 18,
    location: "Dubai",
    email: "email@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
};

// ⚠️  In JavaScript, there are two different ways to access object properties and methods.

console.log(newUser.age); // 👆 Accessing by dot notation
// Output => 18

console.log(newUser['age']); // ✌️ Accessing by bracket notation
// Output => 18

// Changing the property of the object
newUser.age = 1;
console.log(newUser.age); // Output => 1