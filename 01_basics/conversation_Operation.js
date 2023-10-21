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
