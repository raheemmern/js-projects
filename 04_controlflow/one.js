// first the most basic control flow is if statement

if (true){

} // if the condition is true then the code will be executed otheriwse it wont

if (false){

} // if the condition is false then the code will not be executed

// comparison operators

// < less than
// > greater than
// <= less then or equal to
// >= greater then or equal to
// == equal to this operator doesnot check data type like 2 == "2" the answer will be true but the first data type is a number and second one is a string
// != not equal to    3 != 2
// === equal to checks the data type as well like 2 === "2" output is gonna be false because the values are equal but the data types are not same
// !== this operator also checks the negative values in strict mode and also the data types like ===

const temprature = 41

if( temprature < 50 ){
    console.log("Temprature Is Less Then 50"); 
}else{
    console.log("Temprature Is Greater Then 50");
}
console.log("Execute"); // this one in global scope is gonna execute what ever the condition is in if else

const score = 200
if (score > 100) {
    const power = "fly";
    console.log(`User Power Is He Can : ${power}`); // this is the scope the variables declared in side this if else cannot be accessed in global scope
}

const balance = 1000

if (balance < 500) {
    console.log("Less Then 500"); // if you want to check more then 1 condition this is the method you are gonna use
} else if (balance < 750 ) {
    console.log("Less Then 750");
} else if ( balance < 900 ){
    console.log("Less Then 900");
} else {
    console.log("Less Then 1200");
}

const userLoggedIn = true
const debitCard = true

if (userLoggedIn && debitCard) { // this && sign work as and in this condition
    console.log("You Can Buy Courses");
}

const loggedInFromGoogle = false
const loggedInFromEmail = true

if (loggedInFromGoogle || loggedInFromEmail) { // these pipe sign || work as or in this condition
    console.log("User Logge In");
}





































