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
myClosure(); // Logs: 'I am outside!'
