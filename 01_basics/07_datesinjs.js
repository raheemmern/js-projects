// Dates 

let  myDate = new Date();

console.log(myDate.toString()); // its gonna convert it to time but in some long format
console.log(myDate.toDateString()); // the out put is gonna be Day , Month then date and year Sunday,Oct 22 2023
console.log(myDate.toLocaleString()); // the output is gonna be 22/10/23 , 1:02 PM
console.log(typeof myDate); // the type of date is Object just like null

let myCreatedDate = new Date(2023 , 0 , 23);
console.log(myCreatedDate.toDateString()); // output       monday , jan , 23 , 2023    
// the 2023 got at the end .todatestring added the day itself then comes the month that is mentioned 0 at the end 2023

let myNewDate = new Date(2023 , 0 , 23 , 7 , 0);
console.log(myNewDate.toLocaleString()); // output is gonna be 1/23/2023 7:00 AM
// so the locale string works different the month came first then the date then year and then time 
// you can add as much values as you want like you can go to seconds or even mili seconds just by adding the values

let anotherDate = new Date(2002-08-03);
console.log(anotherDate.toLocaleString()); // output gonna be 03/08/2002  so you can add the values like that also specific values
// this is for when you want values in specific order

let myTimeStamp = Date.now(); // to ge the exact date 

console.log(myTimeStamp); // its gonna give us the time exactly from 1970 till now in mili seconds
console.log(anotherDate.getTime()); // this is gonna give us the seconds from 1970 to mentioned date

console.log(Math.round(Date.now()) / 1000); // so by this method we are getting the time in mili seconds from 1970 till now
// then we are converting that mili seconds to seconds by dividing it on 1000 and then by using Math.round we are rounding 
// that number so that we dont get any decimal value

let newDate1 = new Date();
console.log(newDate1); // output gonna be exact date of today

console.log(newDate1.month() + 1 ); // this is gonna give us the present month starting from 0 and then adds 1 into it 

console.log(newDate1.day()); // this is gonna give us the present day starting from 0 monday to saturday,sunday

newDate1.toLocaleString('default' , {
    weekday : "long";
    
})
