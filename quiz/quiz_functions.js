document.querySelector("#title").innerText = quiz[quiz_ind].title;
document.querySelector("#text").innerText = quiz[quiz_ind].text;
document.querySelector("#quizimg").src = quiz[quiz_ind].quizimg;
document.querySelector("#next_text").innerText = quiz[quiz_ind].next_text;

function quizGoToNext() {
    quiz_ind++;

    // progression bar and right/wrong

        // show progression bar
    if(quiz_ind===3 || quiz_ind===6) {
        document.querySelector("#progressionBar").style.display = "flex";
        document.querySelector("#rightwrong").style.display = "none";
    }

        // show answer is right
    if(quiz_ind===1 || quiz_ind===4 || quiz_ind===7) {
        document.querySelector("#progressionBar").style.display = "none";
        document.querySelector("#rightwrong").style.display = "flex";
        document.querySelector("#rightwrong").style.backgroundColor = "#50C878";
        document.querySelector("#rightwrong h1").innerText = "RIGHT!"
    }
    
        // show answer is wrong
    if(quiz_ind===2 || quiz_ind===5 || quiz_ind===8) {
        document.querySelector("#progressionBar").style.display = "none";
        document.querySelector("#rightwrong").style.display = "flex";
        document.querySelector("#rightwrong").style.backgroundColor = "#FA7070";
        document.querySelector("#rightwrong h1").innerText = "WRONG..."
    }

    // buttons

    if(quiz_ind===1 || quiz_ind===2) {
        document.querySelector("#questioncontainer").style.display = "none";
        document.querySelector("#bottomanswer").style.display = "flex";
        document.querySelector("#bottomanswer h1").innerText = "INDUCTIVE REASONING"
    }

    if(quiz_ind===3) {
        document.querySelector("#questioncontainer").style.display = "block";
        document.querySelector("#bottomanswer").style.display = "none";
    }
}

document.querySelector("#title").innerText = quiz[quiz_ind].title;
    document.querySelector("#text").innerText = quiz[quiz_ind].text;
    document.querySelector("#quizimg").src = quiz[quiz_ind].quizimg;
    document.querySelector("#next_text").innerText = quiz[quiz_ind].next_text;