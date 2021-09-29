window.myClickFunction = function myClickFunction() {
	alert("Your first function!");
};
var secondButton = document.getElementById('button2');
secondButton.addEventListener('click',myAlert);
function myAlert(e){
	e.preventDefault();
	alert("Your first function!");
}