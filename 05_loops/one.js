// for loop

for (let index = 0; index <= 10; index++) {
    const element = index;
    if (element === 5) {
        console.log("Dsa 5 Is the Best Thing");
    }
    console.log(element);
}
// after using the for word the first thing happen is your index get initialized what ever variable you anitialized after that your condition get checked if the condition is true then the code inside {} curly braces will be executed and then it again goes to line number 3 and increase the itteration until the condition got failed

for (let i = 1; i <= 10; i++) {
    console.log(`Outer Loop Value ${i}`);
    for (let j = 1; j <= 10 ; j++) {
        // console.log(`Inner Loop Value ${j} and Inner Loop Value ${i}`); // so there is a nested for loop inside the loop
        console.log( i + "*" + j + "=" + i*j);
    }
}
// thats how the loop is gonna work here first its gonna print the value of outer loop one time goes inside the inner loop print the value of inner loop ten times thena again return back to outer loop print the value second time and same inside loop value 10 times and it will keep on happening until the outer loop gets printed ten times


for (let index = 1; index <= 20; index++) {
    if (index === 5) {
        console.log(`Value ${index} is detected`);
        break // we use break to control the flow to stop the loop at a point we want it to stop
    }
    console.log(`Value Of Index Is ${index}`);
}

for (let index = 1; index <= 20; index++) {
    if (index === 5) {
        console.log(`Value ${index} is detected`);
        continue // we use continue it let the loop to continue one time even after meeting the condition
    }
    console.log(`Value Of Index Is ${index}`);
}







