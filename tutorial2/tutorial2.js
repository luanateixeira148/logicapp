document.querySelector("#title").innerText = tut[tut_ind].title;
document.querySelector("#text1").innerText = tut[tut_ind].text1;
document.querySelector("#tut2image").src = tut[tut_ind].tut2image;
document.querySelector("#text2").innerText = tut[tut_ind].text2;
document.querySelector("#next_text").innerText = tut[tut_ind].next_text;


function GoToNext(){
    tut_ind++;
    if(tut_ind===1 || tut_ind===4) {
        document.querySelector("#rightwrong").style.display = "flex";
    }
    
    if(tut_ind===0) {
        document.querySelector("#buttonscontainer").style.display="flex";
        document.querySelector("#button1").style.display="flex";
        document.querySelector("#button2").style.display="flex";
    }
    document.querySelector("#title").innerText = tut[tut_ind].title;
    document.querySelector("#text1").innerText = tut[tut_ind].text1;
    document.querySelector("#tut2image").src = tut[tut_ind].tut2image;
    document.querySelector("#text2").innerText = tut[tut_ind].text2;
    document.querySelector("#next_text").innerText = tut[tut_ind].next_text;   

}
