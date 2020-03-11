var state=1;


function border(){
if (state === 1){
document.getElementById("ind2").style.border = "thick solid #7558B7";
document.getElementById("ded2").style.border = "none";
state = 2;
}
else {
    document.getElementById("ded2").style.border = "thick solid #7558B7";
    document.getElementById("ind2").style.border = "none";
    state = 1;
}

    }


