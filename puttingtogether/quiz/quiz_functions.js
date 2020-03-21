document.querySelector("#title").innerText = quiz[quiz_ind].title;
document.querySelector("#text").innerText = quiz[quiz_ind].text;
document.querySelector("#quizimg").src = quiz[quiz_ind].quizimg;
document.querySelector("#next_text").innerText = quiz[quiz_ind].next_text;

function quizSaveAnswer(n) {
    quiz_answer = n;
}

function quizGoToNext() {
    if (quiz_ind >= 2) {
        document.querySelector("#firstsection").style.display = "none";
        document.querySelector("#secondsection").style.display = "none";
        document.querySelector("#thirdsection").style.display = "none";
        document.querySelector("#forthsection").style.display = "block";
        return false;
    }

    console.log(quiz_answer)
// right answer
        if (quiz_answer === quiz[quiz_ind].answer){
        document.querySelector("#title").innerText = quiz[quiz_ind].right.title;
        document.querySelector("#text").innerText = quiz[quiz_ind].right.text;
        document.querySelector("#quizimg").src = quiz[quiz_ind].right.quizimg;
        document.querySelector("#next_text").innerText = quiz[quiz_ind].right.next_text;
        
        document.querySelector("#topbar").style.display = "none";
        document.querySelector("#questionrightwrong").style.display = "flex";
        document.querySelector("#questionrightwrong").style.backgroundColor = "#50C878";
        document.querySelector("#questionrightwrong h1").innerText = "RIGHT!"

        document.querySelector("#questioncontainer").style.display = "none";
        document.querySelector("#bottomanswer").style.display = "flex";
        document.querySelector("#bottomanswer h1").innerText = quiz[quiz_ind].right.thisis;
        quiz_answer = 0;
    }

    // wrong answer
    else if (quiz_answer === quiz[quiz_ind].notanswer) {
        document.querySelector("#title").innerText = quiz[quiz_ind].wrong.title;
        document.querySelector("#text").innerText = quiz[quiz_ind].wrong.text;
        document.querySelector("#quizimg").src = quiz[quiz_ind].wrong.quizimg;
        document.querySelector("#next_text").innerText = quiz[quiz_ind].wrong.next_text;

        document.querySelector("#topbar").style.display = "none";
        document.querySelector("#questionrightwrong").style.display = "flex";
        document.querySelector("#questionrightwrong").style.backgroundColor = "#FA7070";
        document.querySelector("#questionrightwrong h1").innerText = "WRONG..."

        document.querySelector("#questioncontainer").style.display = "none";
        document.querySelector("#bottomanswer").style.display = "flex";
        document.querySelector("#bottomanswer h1").innerText = quiz[quiz_ind].right.thisis;
        quiz_answer = 0;
    }

    else {
        quiz_ind++;
        document.querySelector("#topbar").style.display = "flex";
        document.querySelector("#progression").style.width = quiz[quiz_ind].progress; 
        document.querySelector("#questionrightwrong").style.display = "none";
        document.querySelector("#questioncontainer").style.display = "block";
        document.querySelector("#bottomanswer").style.display = "none";
    }

    document.querySelector("#title").innerText = quiz[quiz_ind].title;
    document.querySelector("#text").innerText = quiz[quiz_ind].text;
    document.querySelector("#quizimg").src = quiz[quiz_ind].quizimg;
    document.querySelector("#next_text").innerText = quiz[quiz_ind].next_text;
}