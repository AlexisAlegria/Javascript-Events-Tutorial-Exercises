//Declare your function here
var addString = document.getElementById('hello');
addString.addEventListener('click', myString);
function myString(e){
const h = document.createElement('h1');
h.innerText = 'Hello World';
document.body.appendChild(h)
}