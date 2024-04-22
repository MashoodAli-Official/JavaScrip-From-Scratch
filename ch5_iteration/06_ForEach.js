// FOR EACH LOOP
// In JavaScript, the forEach() method is used to iterate over elements in an array. 
// It provides a convenient way to perform an action on each element of the array 
// without the need for a traditional for loop. 

const numbers = [1,2,3,4,5,6,7,8];
numbers.forEach(function (number, index){
    console.log("Index" + index + ":" + number);
});

// In this 👆👆 example, the callback function provided to forEach() receives each element 
// (number) and its corresponding index (index) from the numbers array. The function 
// logs each element along with its index to the console.