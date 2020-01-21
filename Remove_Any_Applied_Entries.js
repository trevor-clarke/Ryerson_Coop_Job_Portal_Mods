var elements = document.querySelectorAll('a[role="button"]');
removeItems();
function removeItems() {
for(var i = 0; i<elements.length; i++){
	var elementText = elements[i].innerHTML;
  if(elementText.trim() == "Applied"){
  	elements[i].parentNode.parentNode.style.display = "none";
  }
}
setTimeout(removeItems, 500);
}
