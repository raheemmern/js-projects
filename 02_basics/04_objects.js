// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

// this is how you can de structure a object 


const {courseInstructor: instructor} = course  // de structuring an object its pretty easy

// console.log(courseInstructor);
console.log(instructor);



// this is how an json file looks like its an object {}

// so in object you have to name the object but in json you just need to put it in {} you can hold it in variable but without variable its goona work perfectly fine
// and also in json the key is gonna be a string and value also gonna be a string unlike in object where the key doesnot need to be a string
// numbers can come directly without  being a string and also true false
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// you will get apis in object format most of the time but some time you can get it in the format of array like shown in next example

// json is equal to javascript object notation

[
    {},
    {},
    {}
]