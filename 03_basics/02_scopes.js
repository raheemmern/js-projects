
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

console.log(a);
console.log(b);
console.log(c);

