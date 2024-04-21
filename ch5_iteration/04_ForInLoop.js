// 👇👇 FOR IN LOOP

// The for...in loop in JavaScript is used to go through all the properties of an object, 
// one by one. You specify a variable to represent each property's name, and then you can 
// use that variable to access the property's value. It's handy for working with objects 
// and getting to know what properties they have.

// new 👇👇 object
var person = {
    Name: "John",
    Age: 16,
    BloodGroup: 'A +ve',
};
for (var key in person){
    console.log(key + ": " + person[key]);
};

// In this 👆👆 example 
// In this example, the loop iterates over each property of the person object (name, age, and city), 
// and for each property, it logs both the property name (key) and its corresponding value (person[key]).