//ARROW FUNCTION IN JAVASCRIPT

//***** 👇👇THIS KEYWORD 👇👇******/
// In JavaScript, the this keyword refers to an object.
// Which object depends on how this is being invoked (used or called).
// The this keyword refers to different objects depending on how it is used:
const user = {
    userName: "Mashood",
    price: 2000,
    
    welcomeMessage: function(){
        //THIS keyword is using for current context refer.
        console.log(`${this.userName}, welcome to website.`);
    }
}
user.welcomeMessage(); //output=> Mashood, welcome to website.
user.userName = "Ali";
user.welcomeMessage(); //output => Ali, welcome to website.

//👇👇 ARROW FUNCTION 👇👇
const addTwo = (num1 , num2) =>{
    return num1 + num2
};
console.log(addTwo(2,4)); //output => 6 
