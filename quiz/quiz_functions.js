function quizGoToNext() {
    quiz_ind++;
    document.querySelector("#title").innerText = quiz[quiz_ind].title;
    document.querySelector("#text").innerText = quiz[quiz_ind].text;
    document.querySelector("#quizimg").src = quiz[quiz_ind].quizimg;
    document.querySelector("#next_text").innerText = quiz[quiz_ind].next_text;
}