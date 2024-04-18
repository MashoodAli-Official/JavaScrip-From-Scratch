// 🚨 OBJECTS IN JAVASCRIPT - PART 3

// Introduction to Destructuring in Objects
// Destructuring allows you to unpack values from arrays, or properties from objects, into distinct variables.

// Define an object representing a course.
const course = {
    name: 'JavaScript',
    price: '1000',
    courseInstructor: 'internet',
};

// Destructuring the 'courseInstructor' property from the 'course' object.
// This creates a new variable named 'courseInstructor' and assigns to it the value from course.courseInstructor.
const { courseInstructor } = course;

// Log the value of 'courseInstructor' to the console.
// Expected output: 'internet'
console.log(courseInstructor);

