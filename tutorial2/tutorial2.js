document.querySelector("#title").innerText = tut[tut_ind].title;
document.querySelector("#text1").innerText = tut[tut_ind].text1;
document.querySelector("#tut2image").src = tut[tut_ind].tut2image;
document.querySelector("#text2").innerText = tut[tut_ind].text2;
document.querySelector("#next_text").innerText = tut[tut_ind].next_text;


function GoToNext(){
    tut_ind++;
    if(tut_ind===0) {
        document.querySelector("#rightwrong").style.display = "none";
    }
    
    if(tut_ind===1 || tut_ind===2 || tut_ind===4 || tut_ind===5 ) {
        document.querySelector("#buttonscontainer").style.display="none";
        document.querySelector("#button1").style.display="none";
        document.querySelector("#button2").style.display="none";
    }
    document.querySelector("#title").innerText = tut[tut_ind].title;
    document.querySelector("#text1").innerText = tut[tut_ind].text1;
    document.querySelector("#tut2image").src = tut[tut_ind].tut2image;
    document.querySelector("#text2").innerText = tut[tut_ind].text2;
    document.querySelector("#next_text").innerText = tut[tut_ind].next_text;   

}
