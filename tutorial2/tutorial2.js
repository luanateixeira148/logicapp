document.querySelector("#title").innerText = tut[tut_ind].title;
document.querySelector("#text1").innerText = tut[tut_ind].text1;
document.querySelector("#tut2image").src = tut[tut_ind].tut2image;
document.querySelector("#text2").innerText = tut[tut_ind].text2;
document.querySelector("#next_text").innerText = tut[tut_ind].next_text; 

function saveAnswer(n){
   tut_answer = n;
}

function GoToNext(){
    tut_ind++;

    document.querySelector("#title").innerText = tut[tut_ind].title;
    document.querySelector("#text1").innerText = tut[tut_ind].text1;
    document.querySelector("#tut2image").src = tut[tut_ind].tut2image;
    document.querySelector("#text2").innerText = tut[tut_ind].text2;
    document.querySelector("#next_text").innerText = tut[tut_ind].next_text; 

//    if(tut_answer ===1 && tut_ind===0){
//     document.querySelector("#title").innerText = tut[2].title;
//     document.querySelector("#text1").innerText = tut[2].text1;
//     document.querySelector("#tut2image").src = tut[2].tut2image;
//     document.querySelector("#text2").innerText = tut[2].text2;
//     document.querySelector("#next_text").innerText = tut[2].next_text;  
//    }


    if(tut_ind===1 || tut_ind===2 || tut_ind===4 || tut_ind===5 || tut_ind===6) {
        document.querySelector("#buttonscontainer").style.display="none";
        document.querySelector("#button1").style.display="none";
        document.querySelector("#button2").style.display="none";
    } 

    if (tut_ind===0 || tut_ind===3 ) {
        document.querySelector("#buttonscontainer").style.display="flex";
        document.querySelector("#button1").style.display="flex";
        document.querySelector("#button2").style.display="flex";
    }

    if(tut_ind===1 || tut_ind===4){
        document.querySelector("#rightwrong").style.display="flex";
        document.querySelector("#rightwrong").style.backgroundColor="#50c878";
        document.querySelector("#rightwrong h1").innerText="RIGHT";  
     } 
 
    if(tut_ind===2 || tut_ind===5){
    document.querySelector("#rightwrong").style.display="flex";
    document.querySelector("#rightwrong").style.backgroundColor="#fa7070";
    document.querySelector("#rightwrong h1").innerText="WRONG";
    
 }else{
    document.querySelector("#rightwrong").style.display="none";  
 }
  

}
