// for of loop

[ "" , "" , "" ]  // strings in array
[ {} , {} , {} ] // objects inside array

const arr = [ 1 , 3 , 4 , 5 ]

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello World!"

for (const greet of greetings) {
    console.log(greet);
}

// Maps

const map = new Map() // map is recognized for its unique value and also stays in its order in which order you endtered if you entered the same value again its just gonna print it one time 
map.set('PK', "Pakistan")
map.set('UK', "United Kingdom")
map.set('RU', "Russia")

console.log(map);

for (const [key , value] of map) {
    console.log(key , "-:", value ); // so here we have implemented for off loop on maps and we are getting the key and value separately
}

const myObj = {
    hero1 : "Flash",
    hero2 : "Batman",
}

for (const [key , value] of myObj) {
    console.log(key , "-:" , value); // you cannot itterate an object with for off loop there are other ways to itterate an object but this is not the one
}
