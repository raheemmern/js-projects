
/* JavaScript is a dynamically typed language. This means that in JavaScript,
you don't have to declare the data type of a variable when you create it, and 
the data type of a variable can change during the execution of the program */

// Types Of Data

// Primitive

// Total 7 Types : String , Number , Boolean , null , undefined , symbol , BigInt

const score = 100 // here i have not told javascript that its a string , number or boolean
const score:number = 100 // in typescript you have to define a variable like that with the data type defined
const score:string = "Raheem" // its a string and the data type has already been defined

let score = 100.3 // and numbers in javascript are numbers even with decimal its not like float like its called float in python

const tempOutside = null     // null is empty its not equal to 0 its empty 

let yourEmail = undefined ; let myEmail; // both are equal and undefined

const id = symbol(1,2,3); // this is how you define a symbol 
const yourId = symbol(1,2,3); // even the values are same but symbols are unique

console.log(id === yourId); // output is false even though both have same value inside

const bigNumber = 356789076343665460956n // thats how you define a BigInt by placing a n at the end of the number


// Reference (Non Primitive)

// Total 3 Types : Arrays , Objects , Functions

const heros = ["Ironman", "Superman", "Spiderman" , 12345]; /* this is how you define a array by using []
and can store it inside a variable like in this case i have stored it inside heros variable */

let myObject = {
    name : "Abdul Raheem",
    age : 22,
    city : "Chichawatni",
    loggedin : true,
} /* thats how you can define a ovject by using curly braces {} and can also store it inside a variable 
and value can be string number boolean any data type */

const myFunction = function (){
    console.log("Hello World")
} // thats how you define a function by using function and () brackets and curly braces {} 

// read the documentation to check what data type you will get in each command 
// https://262.ecma-international.org/5.1/#sec-11.4.3