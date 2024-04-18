const accountId = 123456 
let accountEmail = "MashoodAli@gmail.com"
var accountPassword = "1234"
accountCity = "RahimYar Khan"
let province; 

// console.log(accountID);//Const is not allowed to change
console.log(accountId);
accountEmail= "Ali@gmail.com";
accountPassword = "123456789";
accountCity = "Lahore";

//👇👇 Console.table we can use when we want to get the output in a proper table form.
console.table([accountId, accountEmail, accountEmail,accountCity ]);

//📖 Summary 
// CONST: The const variables are not allowd to change the value and Const is block scoped. OR you cannot change the CONST variable value in future in the same program.
// LET: Block scopre, can declare before use, variable cannot redeclared.
// VAR: The VAR declaration is globally scoped or function scoped. used in code written for older browsers. 