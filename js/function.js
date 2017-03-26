function menuClick() {
	if (document.getElementById('navbar').style.maxHeight == '150px') {
		document.getElementById('navbar').style.maxHeight = '0px';
	} else {
		document.getElementById('navbar').style.maxHeight = '150px';
	}
}
function menuItemsClick() {
	document.getElementById('navbar').style.maxHeight = '0px';
}