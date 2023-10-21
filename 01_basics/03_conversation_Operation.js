let score = "33"

console.log(typeof score); // you can check the data type like this or the second type by using parenthesis
console.log(typeof(score)); // second way to check data type by using paranthesis

let valueInNumber = Number(score) /* you can use either String or Number to change the data type
by writing String for string and Number for number but always write it in first uppercase letter */

console.log(typeof valueInNumber);

console.log(valueInNumber);

// "33" => 33 easily getting converterted into number data type
// "33abc" => NaN not getting converted to number fully NaN = Not A Number
// true => 1; false => 0;

let isLoggedIn = "hitesh";

let booleanLoggedIn = Boolean(isLoggedIn);
console.log(isLoggedIn);

// 0 => false , 1 => true
// "" => false                by converting a empty string to boolean value was false
// "Abdul Raheem" => true     by converting a valued string to boolean value was true

let someNumber = 33;

let stringNumber = String(someNumber);

console.log(stringNumber);
console.log(typeof stringNumber);

// ************Operations************ //

let value = 3
let negValue = -value
console.log(negValue); // output => -3

console.log(2+2); // 2 + 2 => 4 to plus a value
console.log(2-2); // 2 - 2 => 0 to minus a value
console.log(2*2); // 2 * 2 => 4 to multiply a vlue
console.log(2**2); // 2 ** 2 => to get  the power of 2
console.log(2/2); // 2 / 2 => to divide the value
console.log(2%2); // 2 % 2  => to get the remainder value

let str1 = Hello"
let str2 = "Raheem"
let str3 = str1 + str2
console.log(str3); // output is Hello Raheem

console.log("1" + 2); // output is gonna be 12 it didnot contatinate as one is a string and other is a number
console.log(1 + "2"); // output is gonna be 12 it didnot contatinate as one is a number and other is a string
console.log("1" + 2 + 2); // output is 122 it took all as string
console.log(1 + 2 + "2"); /* output is 32 because the code always gets excuted from left to right
 so it add 1 into 2 and then execute 2 as string */
 
console.log(+true); // output is 1
console.log(+""); // output is 0

let num1, num2 , num3

num1 = num2 = num3 = 2+2 // do not write these types of tricky codes always write clean and easy to read code

let gameCounter = 100
gameCounter++; // post fix operator
++gameCounter; // pre fix operator
console.log(gameCounter); // output is gonna be 101 because when you use ++ it adds up 1 to your current value same goes with minus

