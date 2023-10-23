// Singleton
// Object.create

// Object Literals
const jsUser = {
    name : "Abdul Raheem",
    "Full Name" : "Abdul Raheem",
    age : 21,
    email : "raheemmern@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Tuesday"]
}  // this is how you can declare an object you can add string,numbers,booleans,array,another object inside object

// How to access a object there are two ways mentioned down below

console.log(jsUser.email); // so this is the first way you can access the object by writing the variable name then dot
// and then add the value you want to access but you can only access the value that is not string variable

console.log(jsUser["email"]); // this is how you can access the object the other way and its more efficient
// you can also access string varibles through this