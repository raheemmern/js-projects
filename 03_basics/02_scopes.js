
{} // Curly braces is basiccally called scope you can see it in if else functions and many more places
// so in objects it is not called as scope but infact when it will come with some other things like in if else functions 
// scope of if else scope of this that function

if (true) {
    let a = 1 // the values provided in the if else statement should not go out of the statement without returning it and thats why let and const doesnot let it happen
    const b = 2
    var c = 3 // but var have a problem with it
}

// global scope is outside code of any function or if else statement and the scope inside if else or function is block scope global scope value can be used in block scope but block scope value should not go outside of block scope


// global scope in browser console is different then the global scope in the code

// console.log(a);
// console.log(b);
// console.log(c);



// example of nested functions and how does those works and how scopes inside nested functions work

function one (){
   const name = "Cop"

    function two (){
      const  username = "none"
        console.log(name); // so basically you can access the value of outer function from inner function but you cannot access the value from inner function to outer function 
    }

    // two()
}
// one()

if (true) {
    const username = "Designs"
    if (username === "Designs")  {
        const wesbite = "Youtube"
        console.log(`Username Is ${username} Website Is ${wesbite}`);
    }
    // console.log(wesbite); // there is going to be a error because its out of its scope 
}
// console.log(username); // same here there is going to be a error



// +++++++++++++++++++++++++ Interesting +++++++++++++++++++++++++++++++//

// function syntax 1 

function addone (num){
   return num + 1
}
console.log(addone(5)) // in this syntax you can log it in before the function when you are not storing it in a variable

// function syntax 2 

const addtwo = function(num2){
    return num2 + 2
}

addtwo(5)  
console.log(addtwo); // if you try to log it before the function then its not gonna work when you are storing it in a variable in this syntax 

















