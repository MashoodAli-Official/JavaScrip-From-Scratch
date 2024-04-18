// 🚨 NUMBERS DATA MATHS

const score = 800;
console.log(score);

// There are different methods/properties for the NUMBER data type.
const balance = new Number(200);
console.log(balance); // Output => 200

console.log(balance.toString().length);
console.log(balance.toFixed(2)); // Output => 200.00

const numberA = 23.3490;
console.log(numberA.toPrecision(3)); // Output => 23.3

const numberB = 1000000; // Converting into local numbers.
console.log(numberB.toLocaleString()); // Output => 1,000,000
console.log(numberB.toLocaleString('en-PK')); // Output => 1,000,000

// There are also different methods/properties in MATH. Especially for scientific calculations.
console.log(Math);
console.log(Math.abs(-4)); // Output => 4. Converting into absolute values like -4 to 4.
console.log(Math.round(4.3)); // Output => 4. Round off to the nearest integer.
console.log(Math.ceil(4.2)); // Output => 5. Round off to the nearest higher integer.
console.log(Math.floor(4.3)); // Output => 4. Round off to the nearest lower integer.
console.log(Math.min(4, 8, 3, 9)); // Output => 3. Find the minimum value.
console.log(Math.max(4, 10, 3, 88, 19)); // Output => 88. Find the maximum value.
console.log(Math.random()); // Output => 0.561664500781776. Generate a random number between 0 and 1.
console.log((Math.random() * 10) + 1); // Output => 1.0557055245354054. Generate a random number between 1 and 11.
console.log(Math.floor((Math.random() * 10)) + 1); // Output => 6. Generate a random number rounded off to the nearest lower integer between 1 and 10.

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Random output => 15. To generate a random number between 10 and 20, we subtract min from max and add 1 to the total value. Then, we add the min value again. This ensures we get a random value between 10 and 20.