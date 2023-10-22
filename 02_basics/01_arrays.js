// Arrays 

const array = [1, 2 , 3, 4, 5]; // this is how you can declare an array you can strings,numbers,boolean 

const heros = ["IronMan" , "Thor" , "Hulk"] // this is an array containing just the string values

const newArray = new Array(1, 2 , 3 , 4 , 5) ; // this is another way you can define an array

console.log(array[0]); // this is an function to check what is the value at index 0 the output is gonne 1

// Array Methods

array.push(6); // this is an method which is going to add 6 into the array it used to add new value to the array
array.pop(); // this method just removes the last value from the array in this case its 6 

array.unshift(9); // this method adds the value to the start of the array not so useful
array.shift(); // this method removes the first value of the array just like pop removes the last value

console.log(array.includes(1)); // this method checks if the array have the value that you added in it 
console.log(array.indexOf(1)); // this method checks for the index of the  provided value in array

const newArray2 = array.join(); // this method joins the array and converts it into a string
console.log(newArray2); // output gonna be in string like (1,2,3,4,5) unlike it was numbers before

// slice splice

const myArray1 = array.slice(1 , 4); // this method is gonna slice the value from index 1 till index 3 not including 
// index 4 and its not gonna effect the original array values

const myArray2 = array.splice(1 , 4); // this method is gonna cut the values from index 1 till index 4 unlike slice
// but its kind of taking a bite from original array its gonna change the original array and cutt of these values from 
// original array


