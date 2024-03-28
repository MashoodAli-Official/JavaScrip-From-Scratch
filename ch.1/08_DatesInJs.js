// 🚨 DATES IN JAVASCRIPT

let myDate = new Date();
console.log(myDate); //output => 2024-03-28T12:46:15.774Z
console.log(myDate.toString()); //output => Thu Mar 28 2024 12:47:53 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); //output => Thu Mar 28 2024
console.log(myDate.toLocaleString()); //output => 3/28/2024, 12:49:25 PM
console.log(typeof myDate); //output => object. date is object

let myCreatedDate = new Date(2024, 3, 28); 
console.log(myCreatedDate); // output => 2024-04-28T00:00:00.000Z
console.log(myCreatedDate.toDateString()); //output => Sun Apr 28 2024

let myTimeStamp = Date.now();
console.log(myTimeStamp); //output => 1711630697313, time in mili seconds

let getDate = new Date();
console.log(getDate); //output=> 2024-03-28T13:01:01.719Z
console.log(getDate.getMonth()); //output=> 2 . months are starting from ZERO
console.log(getDate.getDay()); //output=> 4 . same like months week days also starting from ZERO
