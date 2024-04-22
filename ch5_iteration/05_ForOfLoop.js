
// FOR-OF LOOP
// The for...of loop in JavaScript is used to iterate over the elements of an iterable object, 
// such as arrays, strings, maps, sets, and more. It provides a simpler syntax compared to 
// other loops like for or forEach.

const numbers = [1,2,3,4,5];
for (const number of numbers){
    console.log(number);
};

// In this 👆👆 example, number represents each element of the numbers array, and the 
// loop will log each number to the console.

const text = "HELLO MY NAME IS MASHOOD";
for (const char of text){
    console.log(char);
};
// In this 👆👆 example, This loop will log each character of the string "Hello" to the console.