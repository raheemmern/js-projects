const score = 400 // this a way to define a number where javascript detects it automatically
console.log(score); // output is gonna be 400 and javascript automatically detects it as number

const balance = new Number(100); // this is another way to define a number but this is 100% number manually defined

console.log(balance); // output is gonna be [Number : 100] strictly defined data type number

// Properties and Methods of Numbers
console.log(balance.toString()); // this property is going to convert the number to string
console.log(balance.toFixed(2)); // this property is going to fix the value to 2 numbers after decimals it is really useful
// in big values in ecommerce apps sites where you are going to show minimum numbers to the user

const otherNumber = 223.89999

console.log(otherNumber.toPrecision(4)); // output gonna be 223.9 its gonna kind of round the value and make it precisex

const hunderds = 1000000

console.log(hunderds.toLocaleString()); // output gonna be 1,000,000 this converts it to string and adds commas to make
// the number easier to read


// ++++++++++++++++++    Maths    +++++++++++++++++++++++++++ //

console.log(Math); // this is an object 

console.log(Math.abs(-4)); // this property converts the negative value to plus value but the plus value gonna stay the same

console.log(Math.round(4.77)); // this property rounds off the value to the nearest whole number

console.log(Math.ceil(4.4)); // ceil stands for ceiling meaning upper value its gonna take upper value always 
// in this case its gonna take 5 whole value
console.log(Math.floor(4.9)); // floor means down value its always gonna converts to lower value to whole
// in this case the output will be 4 even though it is 4.9 which roundoff property will round to 5
console.log(Math.min(4, 9 , 2 , 5)); // this is gonna tell us which is the minimum value out there in thsi case its 2
console.log(Math.max(4, 9 , 2 , 5)); // this is gonna tell us which is the minimum value out there in thsi case its 9

console.log(Math.random()); // this is gonna give us random number ranging from 0 to 0.9999
console.log((Math.random()*10)+1 ); // this is going to multiply the random number with 10 and then adds plus 1 into that
console.log(Math.floor(Math.random()*10) + 1); // this is going to floor the number after doing the same steps mentioned abovew

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1 ) ) + min);