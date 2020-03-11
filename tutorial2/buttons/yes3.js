var state=1;


function border(){
if (state === 1){
document.getElementById("yes3").style.border = "2px solid #7558B7";
document.getElementById("no3").style.border = "none";
state = 2;
}
else {
    document.getElementById("no3").style.border = "2px solid #7558B7";
    document.getElementById("yes3").style.border = "none";
    state = 1;
}

    }