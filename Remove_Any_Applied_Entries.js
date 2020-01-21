removeApplied();
function removeApplied() {
        var elements = document.querySelectorAll('a[role="button"]');
        for(var i = 0; i<elements.length; i++){
            var elementText = elements[i].innerHTML;
            if(elementText.trim() == "Applied"){
                elements[i].parentNode.parentNode.style.display = "none";
            }
        }
    setTimeout(removeApplied, 500);
    }
