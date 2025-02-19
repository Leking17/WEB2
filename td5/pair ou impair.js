"use strict"; 
function pariteeee() { 
    const nb = Number(document.getElementById("nb").value);
    if (nb%2==0){
        document.getElementById("parité").value =  nb + " est pair" 
    }
    else {
        document.getElementById("parité").value = nb +" est impair" 
    }
}
document.getElementById("paritée").addEventListener("click", pariteeee);
