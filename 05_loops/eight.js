const myNums = [ 1, 2, 3]

// const myTotal = myNums.reduce(function (acc , currval) {
//     console.log(`Acc: ${acc} and CurrVal: ${currval}`);
//     return acc + currval
// },0)

const myTotal = myNums.reduce( (acc , curr) => acc + curr ,0) // this is how you can do it with arrow function

// the zero at the end is the starting value of accumulative value that we pass in the start


console.log(myTotal);

// output is 6
// on first loop the acc val was 0 and curr val was 1
// on second loop the acc val was 1 and curr val was 2
// on second loop the acc val was 3 and curr val was 3

const shoppingCart = [

    {
        itemname : "Web Dev Course",
        price : 999
    },
    {
        itemname : "Mobile Dev Course",
        price : 2999
    },
    {
        itemname : "Data Scientist Course",
        price : 5999
    },
]

const priceToPay = shoppingCart.reduce( (acc , item) => (acc + item.price),0)

console.log(`Your Total Price is : ${priceToPay}`);

// output Your Total Price is : 9997










