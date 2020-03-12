document.querySelector("#title").innerText = tut[tut_ind].title;
document.querySelector("#text1").innerText = tut[tut_ind].text1;
document.querySelector("#tut2image").src = tut[tut_ind].tut2image;
document.querySelector("#text2").innerText = tut[tut_ind].text2;
document.querySelector("#next_text").innerText = tut[tut_ind].next_text; 



function GoToNext(){
    tut_ind++;
   

    if(tut_ind===1 || tut_ind===2 || tut_ind===4 || tut_ind===5 || tut_ind===6 ) {
        document.querySelector("#buttonscontainer").style.display="none";
        document.querySelector("#button1").style.display="none";
        document.querySelector("#button2").style.display="none";
    } 
    else {
        document.querySelector("#buttonscontainer").style.display="flex";
    }
   
   
   
    if(tut_ind===2) {
        document.querySelector("#rightwrong").style.backgroundColor = "#fa7070";
        document.querySelector("#rightwrong h1").innerText = "WRONG"
    }    

    document.querySelector("#title").innerText = tut[tut_ind].title;
    document.querySelector("#text1").innerText = tut[tut_ind].text1;
    document.querySelector("#tut2image").src = tut[tut_ind].tut2image;
    document.querySelector("#text2").innerText = tut[tut_ind].text2;
    document.querySelector("#next_text").innerText = tut[tut_ind].next_text; 
}
