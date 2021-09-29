window.onload = function myLoadFunction() {
	alert("The website just finished loading!");
	//some code here
};

//the listener function here
var btnGreen = document.getElementById('theGreen');
btnGreen.addEventListener('click', myAlert);
function myAlert (e){
	alert('woohoo!');
}
