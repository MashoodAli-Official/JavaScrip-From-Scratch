// 👇👇👇 CONTROL FLOW USING IF ELSE AND NESTED IF ELSE 

// ******If else control flow.*******
let age = 18;

if (age >= 18) {
    console.log("You are an adult."); // 🚨 output => You are an adult.
} else {
    console.log("You are a minor.");
}

// The condition checks if the age variable is greater than or equal to 18.
// If the condition is true (i.e., age is 18 or more), it prints "You are an adult."
// If the condition is false (i.e., age is less than 18), it prints "You are a minor."


// ******If else if control flow ********
let scroe = 90;

if (scroe >= 90){
    console.log(" A Grade"); // 🚨 output => A Grade
} else if (scroe >= 80){
    console.log("B Grade");
}else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
};

// Multiple conditions are checked in sequence.
// The first condition that evaluates to true will execute its associated block of code and skip the rest.
// This script checks a score and assigns a grade based on its value. Each else if provides a new condition to check if the previous conditions were false.