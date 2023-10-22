
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


// +++++++++++++++++ Memory Types ++++++++++++++ //

// Stack (Primitive) , Heap (Non-Primitive/Reference)

// Stack Memory Type Example

let myYoutubeName = "Abdul Raheem";

let anOtherYoutubeName = myYoutubeName ;

anOtherYoutubeName = "Chai Or Code" ;

console.log(myYoutubeName); // output is Abdul Raheem
console.log(anOtherYoutubeName); // output is Chai Or Code  it is because the stack memory gives you a copy of original file
// when you make changes to a new variable it doesnot effect the original value unlike Heap memory

// Heap Memory Type Example

let userOne = {
    email : "raheemmern@gmail.com",
    name : "Raheem"
} // this is an object

console.log(userOne); //output is the same

let userTwo = userOne

userTwo.email = "raheestack@gmail.com"  // thats how you access the properties in an ovject by typing 
// the name of variable.property like email,name 

// now here the real value of userone email that is "raheemmern@gmail.com" is gonna change as its Heap memory type 
// so the changes will reflect upon the real file 

console.log(userOne.email); // output of email is changed now as we can have changed the value of it 
console.log(userTwo.email); // output is gonna be changed and also the original file