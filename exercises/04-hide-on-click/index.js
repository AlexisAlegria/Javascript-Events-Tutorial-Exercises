window.myEventListener = function myEventListener()
{
	//your code here
	var divItems = document.querySelectorAll('div');
	var arrayOfDivs = Array.from(divItems);
	arrayOfDivs[0].style.display = 'none';
}
