// immediately invoked function expressions (IIFE)

(function world (){ // named (IIFE) this one is a named (IIFE) because it has a name
    console.log(`Hello World`);
})(); // to remove the pollution of global scope we used (IIFE)
 
// you have to place semi colon after every immediate invoked function otherwise the next one gonna show error

// world();


( (name) => { // without name (IIFE)  while writing two (IIFE) you need to place Semi Colon After 1st (IIFE)
    console.log(`Hello World 2 ${name}`);
} )("Cop Designs"); // the paranthesis at the end are also very important

