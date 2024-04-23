// Singleton // Literals Declaration Se Singleton Nhi Banta Hy // Constructor sy agr bany to singleton bany ga // interview quest !important
// Object.create   // is a constructor method and is used to make singleton objects

// Object Literals
const mySym = Symbol("key1")

const jsUser = {
    name : "Abdul Raheem",
    "Full Name" : "Abdul Raheem",
    [mySym] : "key1" , // to write a symbol in an object you need to put in inside brackets
    age : 21 ,
    email : "raheemmern@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Tuesday"]
}  

// this is how you can declare an object you can add string,numbers,booleans,array,another object inside object

// So the left side is the keys like name, "Full Name", and the right side are the values of those keys like "Abdul Raheem"


// How to access a object there are two ways mentioned down below

console.log(jsUser.email); // so this is the first way you can access the object by writing the variable name then dot
// and then add the value you want to access but you can only access the value that is not string variable

console.log(jsUser["email"]); // this is how you can access the object the other way and its more efficient
// you can also access string varibles through this

console.log(typeof jsUser[mySym]); // the type of this is symbol so thats how you can declare a symbol and then access it

jsUser.email = "mernraheem@gmail.com" // thats how you can change the value inside the object
Object.freeze(jsUser) // you can freeze the object by using this method so no one can change the value of that object
jsUser.email = "mernraheem@hotmail.com" // you will not get any error but new changes will not be made


jsUser.greeting = function(){
    console.log("Hello Js User");
}

jsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`); // thats how you can access a object inside a function by using this and dot then
    // property you want to access like here i have accessed name
}

console.log(jsUser.greeting); // output is function(anonymous)]
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo()); // output is undefined
