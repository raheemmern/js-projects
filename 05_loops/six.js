const coding = ["python" , "cpp" , "java" , "ruby" , "js"]

const values = coding.forEach( (item) => {
    console.log(item);
    return item  // even after returning the item the output you are gonna get is undefined
    // so the conclusion we are at that for each doesnot return any value even if you want or dont want
}  )
console.log(values); // it has returned undefined and havenot returned anything


const myNums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


const newNums = myNums.filter( (num) => num > 4 ) // for each doesnot return values but filter deos in this case it has returned 5,6,7,8,9,10 bigger values then 4
// in filter you will get each access value in callback function after that you will have to give condition like in this case we have given condition of num > 4 if the condition is checked and true it will return the values this is called the basic of filter
console.log(newNums);

const newNums2 = myNums.filter( (num) => {
    num > 4     // the output in this case is empty array
    // when you start a scope you have to write return keyword in order to get the output
    // you can get the returns without opening the scopes like in the upper example shown there
} )

const nums3 = []


myNums.forEach( (num) => {
    if (num > 4) {
        newNums.push(num) // you can do the same by using foreach like you did with filter
    }
} )

console.log(newNums);

const books = [
    { title : "Book one" , genre : "Science", publish : 1970},
    { title : "Book two" , genre : "History", publish : 1999},
    { title : "Book three" , genre : "Arts", publish : 2003},
    { title : "Book four" , genre : "History", publish : 1988},
    { title : "Book five" , genre : "Science", publish : 2001},
    { title : "Book six" , genre : "History", publish : 2007},
    { title : "Book seven" , genre : "Arts", publish : 2004},
    { title : "Book eight" , genre : "Arts", publish : 2005}
];

let userBooks = books.filter( (bk) => {return bk.genre === "History"} )
userBooks = books.filter( (bk) => {
    return bk.publish >= "2000" && bk.genre === "History"

} )
console.log(userBooks);













