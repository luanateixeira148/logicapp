// document.querySelector("#title").innerText = tut2[tut2_ind].title;
// document.querySelector("#text1").innerText = tut2[tut2_ind].text1;
// document.querySelector("#tut2image").src = tut2[tut2_ind].tut2image;
// document.querySelector("#text2").innerText = tut2[tut2_ind].text2;
// document.querySelector("#next_text").innerText = tut2[tut2_ind].next_text;

function border1(){
    document.getElementById("button1").style.border = "2px solid #7558B7";
    document.getElementById("button2").style.border = "none"; 
}

function border2(){
        document.getElementById("button2").style.border = "2px solid #7558B7";
        document.getElementById("button1").style.border = "none"; 
    }

function tutorial2SaveAnswer(n) {
    tut2_answer = n;
}

function Tutorial2GoToNext() {
    if (tut2_ind >= 2) {
        document.querySelector("#firstsection").style.display = "none";
        document.querySelector("#secondsection").style.display = "none";
        document.querySelector("#thirdsection").style.display = "block";
        document.querySelector("#forthsection").style.display = "none";
        return false;
    }
    console.log(tut2_answer)
    if (tut2_answer === tut2[tut2_ind].answer) {
        document.querySelector("#title").innerText = tut2[tut2_ind].right.title;
        document.querySelector("#text12").innerText = tut2[tut2_ind].right.text1;
        document.querySelector("#tut2image").src = tut2[tut2_ind].right.tut2image;
        document.querySelector("#text22").innerText = tut2[tut2_ind].right.text2;
        document.querySelector("#next_text").innerText = tut2[tut2_ind].right.next_text;
        document.querySelector("#rightwrong").style.display = "flex";
            document.querySelector("#rightwrong").style.backgroundColor = "#50C878";
            document.querySelector("#rightwrong h1").innerText = "RIGHT";
            
            document.querySelector("#buttonscontainer").style.display = "none";
        tut2_answer = 0;
    }

    else if (tut2_answer === tut2[tut2_ind].notanswer) {
        document.querySelector("#title").innerText = tut2[tut2_ind].wrong.title;
        document.querySelector("#text12").innerText = tut2[tut2_ind].wrong.text1;
        document.querySelector("#tut2image").src = tut2[tut2_ind].wrong.tut2image;
        document.querySelector("#text22").innerText = tut2[tut2_ind].wrong.text2;
        document.querySelector("#next_text").innerText = tut2[tut2_ind].wrong.next_text;
        document.querySelector("#rightwrong").style.display = "flex";
            document.querySelector("#rightwrong").style.backgroundColor = "#fa7070";
            document.querySelector("#rightwrong h1").innerText = "WRONG";
            document.querySelector("#buttonscontainer").style.display = "none";
        tut2_answer = 0;
        console.log(tut2_answer)
    }
    
    else {
        tut2_ind++;
        document.querySelector("#buttonscontainer").style.display = "flex";
        document.querySelector("#rightwrong").style.display = "none";
        document.querySelector("#title2").innerText = tut2[tut2_ind].title;
        document.querySelector("#text12").innerText = tut2[tut2_ind].text1;
        document.querySelector("#tut2image").src = tut2[tut2_ind].tut2image;
        document.querySelector("#text22").innerText = tut2[tut2_ind].text2;
        document.querySelector("#next_text").innerText = tut2[tut2_ind].next_text;
        if (tut2_ind===2)   {
        document.querySelector("#buttonscontainer").style.display = "none";
   
    }
    }
}

