// 🚨 STRINGS DATA TYPE

const firstName = "Mashood";
const lastName = " Ali";
console.log(firstName.concat(lastName)); //output=> Mashood Ali,  Simple example of Concatenation 
console.log(`My name is ${firstName} ${lastName}`); //output=> My name is Mashood Ali,  we can also use this method for concatenation. 

const newGame = new String('NeedForSpeed');

console.log(newGame.charAt(0)); //character access method
console.log(newGame.length); //output: 11
console.log(newGame.toUpperCase()); //output: NEEDFORSPEED, the toUpperCase method converts the whole variable into uppercase. 
console.log(newGame.charAt(2)); //output: e, the charAt method checks the character by mentioning the character index. 
console.log(newGame.indexOf('S')); //output: 4, we can check the character index by mentioning the character. 

const newString = newGame.substring(0,9);
console.log(newString); //output: NeedForSp, 

const newStringA = newGame.slice(1, 8);
console.log(newStringA);//output: eedForS

const newStringB = "    Mashood    "; //Trim method will remove the whitespace from both beginning and end of the variable. 
console.log(newStringB.trim()); // output: Mashood 

const newStringC = newGame.replace('N', 'F'); // The replace method will change variable value.
console.log(newStringC); //output: FeedForSpeed

const newStringD = newGame.includes('New');
console.log(newStringD); //output: false

console.log(newGame.split('')); //splitting the string into an array of characters
//output: 'N', 'e', 'e', 'd', 'F', 'o', 'r', 'S','p', 'e', 'e', 'd'

