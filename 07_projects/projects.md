# Projects Related To Dom

## Projects Link 
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

### Project 1 Solution Code Color Changer
```javascript
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {

button.addEventListener('click', function(e){
  console.log(e)
  console.log(e.target)

  if(e.target.id === "grey"){
    body.style.backgroundColor = e.target.id
  }
  if(e.target.id === "white"){
    body.style.backgroundColor = e.target.id
  }
  if(e.target.id === "blue"){
    body.style.backgroundColor = e.target.id
  }
  if(e.target.id === "yellow"){
    body.style.backgroundColor = e.target.id
  }
})
});
```
### Project 2 Solution Code Bmi Generator

``` javascript
const form = document.querySelector("form")

form.addEventListener("submit", function(e){
  e.preventDefault()

  const height = parseInt(document.querySelector("#height").value)  // converted the value to integer by using .value
  const weight = parseInt(document.querySelector("#weight").value)
  const results = document.querySelector("#results")

  if ( height === 0 || height <= 0 || isNaN(height) ){
      results.innerHTML = "Please Give A Valid Height."
  } else if ( weight === 0 || weight <= 0 || isNaN(weight) ){
    results.innerHTML = "Please Give A Valid Weight." 
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2)
    results.innerHTML = `<span>${bmi}</span>`;
  }
});
```
### Project 3 Solution Code Digital Clock

``` javascript
const clock = document.getElementById('clock')

setInterval(function () {
   let date = new Date();
   clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```

### Project 4 Solution Code Random Number Guessor

``` javascript

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}
```