// Array Part 2

const marvelHeroes = ["Ironman" , "Thor" , "Captain America"] ;
const dcHeroes = [ "Superman" , "Batman" , "Flash"] ;

marvelHeroes.push(dcHeroes); // we are using a method here called push to push the values of dc heroes in marvel heros variable

console.log(marvelHeroes); 

/* output [
  'Ironman',
  'Thor',
  'Captain America',
  [ 'Superman', 'Batman', 'Flash' ]
] */     // so this is the output that its generated instead of mergin two arrays it has put whole array as a value

console.log(marvelHeroes[3][0]); // this is how you can access the value that is at 3rd index and in 3rd index value 0
const allHeroes = marvelHeroes.concat(dcHeroes);  // concatenate method works only on new array not on existing array

console.log(allHeroes); // the output gonna be that both of the arrays gonna concatenate and the value will be 1 array

const allNewHeroes = [...marvelHeroes , ...dcHeroes] // this method also works as an concatenate method and its called spread 
// method it changed the values to single values unlike cocatenate

const newArray3 = [ 1, 2, 3, 4 [5, 6, 7] ,[8, 9, 10[11 , 12 ,13]]] // so in this case there are array inside array then again array
// inside array so we can clean it up just by using a method called flat but we have to use that into new varibale

const arrayFlat = newArray3.flat(Infinity); //  then you have to add the value inside the brackets on which level you want to flat it out
// just like 3,4 ,5 but you can add infinity to flat it out all levels

console.log(Array.isArray ("Raheem")); // by using this method we can check if something is an array 

console.log(Array.from("Raheem")); // you can convert the vlaues to array by using this method called from 

console.log(Array.from({name : "Raheem"})); // when its not able to convert an object to array its gonna return [] empty
// brackets

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // this method converts different elements into an array by giving the value
// which elements we want to be converted to an array

//output is   [100, 200, 300]  it returned me all the elements in an array from different elements