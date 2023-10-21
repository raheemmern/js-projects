console.log(2 > 1); // 2 is greater then 1 or not?
console.log(2 >= 1); // 2 is greater then or equal to 1 or not?
console.log(2 < 1); // 2 is lesser then 1 or not?
console.log(2 == 1); // 2 is equal to 1 or not?
console.log(2 != 1); // 2 is not equal to 1 or not?

// avoid all these type of conversions that are mentioned below as it can put you under confusion always practice clean code

console.log("2" > 1); // output is true never check comparison between different data types
console.log("02" > 1); // output is true

console.log(null > 0); // ouput is false
console.log(null == 0); // output is false
console.log(null >= 0); // output is true
/* the reason is that equality operator check == and comparisons operator > >= < <= work differently
comparisons operator convert null to number treating it as 0 
while  equality operator == doesnot convert null to a number thats why they work differntly */

console.log(undefined > 0);
console.log(undefined >= 0);
console.log(undefined < 0);
console.log(undefined <= 0);
// the output for all the undefined is false becuase there is no value assigned so the computer doesnot know

// strict check === it checks for the value and also check for the data type if its same or not

console.log("2" === 2); // output will be false as the first data type is string and second one is a number 
