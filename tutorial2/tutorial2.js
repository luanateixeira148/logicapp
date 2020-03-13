document.querySelector("#title").innerText = tut[tut_ind].title;
document.querySelector("#text1").innerText = tut[tut_ind].text1;
document.querySelector("#tut2image").src = tut[tut_ind].tut2image;
document.querySelector("#text2").innerText = tut[tut_ind].text2;
document.querySelector("#next_text").innerText = tut[tut_ind].next_text;

function tutorial2SaveAnswer(n) {
    tut_answer = n;
}

function Tutorial2GoToNext() {
    if (tut_answer === 1) {
        //show correct text
        document.querySelector("#title").innerText = tut[tut_ind].right.title;
        document.querySelector("#text1").innerText = tut[tut_ind].right.text1;
        document.querySelector("#tut2image").src = tut[tut_ind].right.tut2image;
        document.querySelector("#text2").innerText = tut[tut_ind].right.text2;
        document.querySelector("#next_text").innerText = tut[tut_ind].right.next_text;
        document.querySelector("#rightwrong").style.display = "flex";
            document.querySelector("#rightwrong").style.backgroundColor = "#50C878";
            document.querySelector("#rightwrong h1").innerText = "RIGHT";
            
            document.querySelector("#buttonscontainer").style.display = "none";
        tut_answer = 0;
    }

    else if (tut_answer === 2) {
        document.querySelector("#title").innerText = tut[tut_ind].wrong.title;
        document.querySelector("#text1").innerText = tut[tut_ind].wrong.text1;
        document.querySelector("#tut2image").src = tut[tut_ind].wrong.tut2image;
        document.querySelector("#text2").innerText = tut[tut_ind].wrong.text2;
        document.querySelector("#next_text").innerText = tut[tut_ind].wrong.next_text;
        document.querySelector("#rightwrong").style.display = "flex";
            document.querySelector("#rightwrong").style.backgroundColor = "#fa7070";
            document.querySelector("#rightwrong h1").innerText = "WRONG";
            
            document.querySelector("#buttonscontainer").style.display = "none";
        tut_answer = 0;
        console.log(tut_answer)
    }
    
    else {
        tut_ind++;
        document.querySelector("#buttonscontainer").style.display = "flex";
        document.querySelector("#rightwrong").style.display = "none";
        document.querySelector("#title").innerText = tut[tut_ind].title;
        document.querySelector("#text1").innerText = tut[tut_ind].text1;
        document.querySelector("#tut2image").src = tut[tut_ind].tut2image;
        document.querySelector("#text2").innerText = tut[tut_ind].text2;
        document.querySelector("#next_text").innerText = tut[tut_ind].next_text;
        
        console.log(tut_ind)
        if (tut_ind===2)   {
        document.querySelector("#buttonscontainer").style.display = "none";
   
     }
        
    }
}


