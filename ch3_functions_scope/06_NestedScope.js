//Nested Scope and closure 

function one(){
    const userName = "Mashood"
    
    function two (){
        const website = "MyWebsite"
        console.log(userName);
    }
    // console.log(website);
    two()
};
one();

// 👇👇Simple example of closure function
// In JavaScript, a closure is a function that references variables in the outer scope from its inner scope. The closure preserves the outer scope inside its inner scope.
function outerFunction() {
    var outerVariable = 'I am outside!';

    function innerFunction() {
        console.log(outerVariable); // Access variable from the outer scope
    }

    return innerFunction;
}

var myClosure = outerFunction(); // myClosure is now a reference to innerFunction
// myClosure(); // Logs: 'I am outside!'



// 👇👇 **************************************👇👇
// In this example:
// The outerFunction contains an inner function innerFunction.
// The innerFunction can access variables defined in the outerFunction, such as outerVariable.
// When outerFunction is called, it also calls innerFunction, which then prints out the values of outerVariable and innerVariable demonstrating the nested scope.

function outerFunction() {
    let outerVariable = "I'm from the outer function";

    function innerFunction() {
        let innerVariable = "I'm from the inner function";
        console.log(outerVariable);
        console.log(innerVariable);
    }

    innerFunction();
}

outerFunction();