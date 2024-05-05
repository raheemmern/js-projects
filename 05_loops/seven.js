const myNums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let newNums = myNums.map( (num) => num + 10 ) // so this map method has added 10 to every number and it returns the values without adding return keyword what if we use scopes does it will return the values without using the return keyword there also lets see

// newNums = myNums.map( (num) => {return num + 10} ) // so it will return the values but as undefined but if you added the return keyword it will return the values as it returns without scopes
// console.log(newNums);

const numbersNew = myNums
                    .map( (num) => num * 10 )
                    .map( (num) => num + 1 ) // this is called chaining using two or more methods at once like here we have used chaining and when chaining happens the first method will be applied and the second method will be applied on the output of the first method
                    .filter ( (num) => num >= 40 )

console.log(numbersNew);









