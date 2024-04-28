// for in loop used for objects or on objects


const myObject = {
    js : "Javascript",
    py : "Python",
    cpp : "C++",
    swift : "Swift By Apple"
}

for (const key in myObject) {
   console.log(`${key} Is Shortcut For ${myObject[key]}`); // 
}

// arrays also have keys and it starts from 0 
// for in loop just picks the keys from arrays not the direct values like for of loop does

const programming = [ "Java" , "C++" , "Python"]

for (const key in programming) {
    console.log(key); // by using this method you are going to get keys in this array the keys are 0 , 1 , 2 as there are 3 values
}

// if you want to access the values inside the programming array you need to use the syntax like this

for (const key in programming) {
    console.log(programming[key]); // by using this method you will get the values of the keys values
}


// maps are not itterable through for in loops so you will not get an error becuase its not gonna get itterable 

// for objects we are gonna use for in loop

// for arrays we are gonna use for of loop // we can use many more loops on arrays





