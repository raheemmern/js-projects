function sayMyName(){
    console.log("A");
    console.log("B");
    console.log("D");
    console.log("U");
    console.log("L");
    console.log("R");
    console.log("A");
    console.log("H");
    console.log("E");
    console.log("E");
    console.log("M");
} 
sayMyName() // thats how you execute a function placing paranthesis after the refrence 
// thats how you write a function starting with keyword function then giving a name to it then the syntax (){} define the values in the curly braces

function addTwoNumbers (number1 , number2){
    console.log(number1 + number2);
}; // thats how you can play with values in function 

addTwoNumbers(5 , 5); // here you can place the values of the strings you have provided in the function // output is gonna be 10
addTwoNumbers(5 , "3") // so here one is number and another one is a string so javascript will take both as string output will be 53
addTwoNumbers(5 , "a") // same will happen here the output is gonna be 5a because we havenot put any conditions here so if there is a string it will take the other values as string too
const result = addTwoNumbers(5 , null) // output is gonna be 5 as the other value is null

//    ()       // these are paramethers in the functiom before curly braces while writing a function

// while calling a function the values you pass inside paranthesis are called arguments

console.log("Result :" , result); // output is undefined

function addTwoNumbers (number1 , number2){
    let result = number1 + number2
    return result 
    // you can also return the results directly by using return number1 + number 2
    console.log("Abdul Raheem");  // after the return method no command is gonna work afterwards if i take the line upwards from return then its gonna be printed
};
console.log("Result :" , result); // output gonna be Result : 8    

function userLoginMessage (username = "sam"){ // you can add a default value so the value never gets undefined and id the value got passed it will overwrite this default value
    if (!username){ // this is also a syntax that is equal to username === undefined
        console.log("Please Enter A Username");
        return // so we have applied a if condition here if the username is undefined no value has been given it will ask the user to enter the value and if the value is there it will jump to next line of code that is username just logged in
    }
    if (username === undefined){
        console.log("Please Enter A Username");
        return // so we have applied a if condition here if the username is undefined no value has been given it will ask the user to enter the value and if the value is there it will jump to next line of code that is username just logged in
    }
    return `${username} Just Logged In`     // here we have used string interpolation using `` backtics its the latest syntax and easy to use by using this you can easily concatinate strings with each other and also add variables in between by using ${} dollar and curly braces and placing the variable inside the curly braces
 }
console.log(userLoginMessage("Abdul Raheem")); // out is gonna be Abdul Raheem Just Logged In
console.log(userLoginMessage()); // if you didnot pass any value the output gonna be undefined just logged in it doesnot show null instead it shows undefined because it didnot got defined
























