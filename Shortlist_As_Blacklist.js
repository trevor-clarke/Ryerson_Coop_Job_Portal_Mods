item = document.getElementsByClassName("action")
for(var i =0;i<item.length; i++){
    if(item[i].innerHTML.trim() == "Shortlisted"){
        item[i].parentNode.parentNode.style.display = "none";
    }
}
