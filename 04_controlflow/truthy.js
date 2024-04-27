const userEmail = "cp@gmail.com"

if (userEmail) {
    console.log("Got User Email");
} else {
    console.log("Didnot Got User Email");
}

const emailUser = [] // output with empty array is got user email assumed as true

if (emailUser) {
    console.log("Got User Email"); 
} else {
    console.log("Didnot Got User Email");
}

const userEmail2 = "" // output with empty string is Didnot got user email assumed as false

if (userEmail2) {
    console.log("Got User Email"); 
} else {
    console.log("Didnot Got User Email");
}

// these are called truthy or falsy value

// falsy values

// false , 0 , -0 , Bigint 0n , "" , null , undefined , NaN // every value other then these are truthy values 

// truthy values

// "0" , "false" , "anything inside a string is a true truthy value" , [] , {} , function(){}


const emptyArray = []

if (emptyArray.length === 0) { // we are checking if the array is empty or not by using the .lenght property
    console.log("Array Is Empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) { // so in this method we are accesing object keys by using Object in capital and .keys and adding parathesis that way it returns the value in array and afterwards we are adding . lenght method to check the value 
    console.log("Object Is Empty");
}

// Nullish Coalescing Operator (??) null undefined


let val1;

val1 = 5 ?? 10

console.log(val1);






