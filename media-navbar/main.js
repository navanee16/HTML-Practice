var navigation = document.getElementById("nav");
var button = document.getElementById("btn");

function myfunction(){
    var x = window.getComputedStyle(navigation).display
    if(x=="none"){
        navigation.style.display="block";
    }
    else{
        navigation.style.display="none"
    }

}


button.addEventListener("click",myfunction);