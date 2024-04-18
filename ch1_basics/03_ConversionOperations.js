// 🚨 Conversion operations

// 👇 String to number conversion
let stringNumber = "123";
let convertedNumber = Number(stringNumber);
console.log(convertedNumber);
// output ➡️ 123

// 👇 number to String conversion
let number = 456;
let convertedString = String(number);
console.log(convertedString);
// output ➡️ 456
console.log(typeof(convertedString));
// output ➡️ String 

// 👇 conversion string to boolean 
let boolean = "true";
let convertedBoolen = Boolean(boolean);
console.log(convertedBoolen);
// output ➡️ true
console.log(typeof(convertedBoolen));
// output ➡️ boolean

// 👇 conversion from boolean to number
let numBoolean = true;
let convertedToNumber = Number(numBoolean);
console.log(convertedToNumber);
// output ➡️ 1
console.log(typeof(convertedToNumber));
// output ➡️ number

// 👇 conversion from number to boolean
let booleanNum = 0;
let convertedToBoolean = Boolean(booleanNum);
console.log(convertedToBoolean);
// output ➡️ false
console.log(typeof(convertedToBoolean));
// output ➡️ boolean