function quizGoToNext() {
    quiz_ind++;
    if(quiz_ind===1 || quiz_ind===2 || quiz_ind===4  || quiz_ind===5  || quiz_ind===7 || quiz_ind===8) {
        document.querySelector("#progressionBar").style.display = "none";
    }
    
    if(quiz_ind===1 || quiz_ind===2 || quiz_ind===4  || quiz_ind===5  || quiz_ind===7 || quiz_ind===8) {
        document.querySelector("#rightwrong").style.display = "flex";
    }
    document.querySelector("#title").innerText = quiz[quiz_ind].title;
    document.querySelector("#text").innerText = quiz[quiz_ind].text;
    document.querySelector("#quizimg").src = quiz[quiz_ind].quizimg;
    document.querySelector("#next_text").innerText = quiz[quiz_ind].next_text;
    

    if(quiz_ind===2) {
        document.querySelector("#rightwrong").style.backgroundColor = "#FA7070";
        document.querySelector("#rightwrong h1").innerText = "WRONG..."
    }
}

document.querySelector("#title").innerText = quiz[quiz_ind].title;
    document.querySelector("#text").innerText = quiz[quiz_ind].text;
    document.querySelector("#quizimg").src = quiz[quiz_ind].quizimg;
    document.querySelector("#next_text").innerText = quiz[quiz_ind].next_text;

