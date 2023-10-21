const accountId = 123456  // const mean constant you cant change the value of constant variable once you done assigning a value
let accountEmail = "cop@gmail.com"
var accountPassword =  "pasword"
accountCity = "Lahore"
let accountState;

//accountId = 654321 // allowed

accountEmail = "notcop@gmail.com"
accountPassword = "notpassword"
accountCity = "Karachi"

console.log(accountId);

/* 
Prefer Not To Use Var Variable 
Because Of issues In Block Scope And Functional Scope Always Use Let , Const
You can declare a variable with out using let or var or const but this is not a good way to go 
If you left a variable without adding value it will be left undefined
*/

console.table([accountId, accountEmail, accountPassword, accountCity]);