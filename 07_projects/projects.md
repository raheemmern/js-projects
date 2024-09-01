# Projects Related To Dom

## Projects Link 
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

### Project 1 Solution Code
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
### Project 2 Solution Code

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
### Project 3 Solution Code

``` javascript
const clock = document.getElementById('clock')

setInterval(function () {
   let date = new Date();
   clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```