const name = "Abdul Raheem"
const age = 21

console.log("Hello My Name Is " + name + " And My Age Is " + age   ); // this is how you can concatinate variables but this is an old way 
// and complicated 

 console.log(`Helly My Name Is ${name} And My Age Is ${age}`); // output is gonna be same but 
// this is called string interpolation that you can use by writing backtick `` and then entering the variable by using
// ${} dollar sign + curly braces and insert the variable name inside the curly braces

const gameName = new String("Abdul Raheem") // this is another way to define a string

//                               String Methods 

console.log(gameName[0]); // this is gonna give us the first letter of the string that starts at 0 and this a propert length

console.log(gameName.__proto__); // output is gonna be and object {}

console.log(gameName.length); // this is gonna give us the character lenght that is placed insid the string

console.log(gameName.toUpperCase()); // its gonna convert the value to uppercase but in stack memory 

console.log(gameName.charAt(2)); // this tells us that which character is at position 2

console.log(gameName.indexOf('R')); // this tells us on  which position the character R is 

const newString = gameName.substring(0 , 4) ; // this method is gonna cutt of the string values from 0 to 3 , 4 will not be included
// and you cannot put negative - value in the sub string its just gonna ignore that

const anotherString = gameName.slice(-8 , 5) // you can put negative value in slice 

const newStringOne = "     Hello World     " // the value is gonna be printed with spaces 

console.log(newStringOne.trim()) // this is gonna trim the starting and ending spaces from the value

const url = "abdulraheem.com/raheem%20first" // %20 represnt dash - in browser language

console.log(url.replace('%20' , '-')); // this method is gonna replace the %20 with dash - 

console.log(url.includes('raheem')); // you can use this includes method to check if the variable have that value or not

console.log(gameName.split('-')); // this is gonna split the values to different strings on the basis of dash
// you can use space or anyother word 











