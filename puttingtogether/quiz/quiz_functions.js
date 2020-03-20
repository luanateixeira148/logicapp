document.querySelector("#title").innerText = quiz[quiz_ind].title;
document.querySelector("#text").innerText = quiz[quiz_ind].text;
document.querySelector("#quizimg").src = quiz[quiz_ind].quizimg;
document.querySelector("#next_text").innerText = quiz[quiz_ind].next_text;

function quizSaveAnswer(n) {
    quiz_answer = n;
}

function quizGoToNext() {
    console.log(quiz_answer)
        if (quiz_answer === quiz[quiz_ind].answer){
        document.querySelector("#title").innerText = quiz[quiz_ind].right.title;
        document.querySelector("#text").innerText = quiz[quiz_ind].right.text;
        document.querySelector("#quizimg").src = quiz[quiz_ind].right.quizimg;
        document.querySelector("#next_text").innerText = quiz[quiz_ind].right.next_text;
        
        document.querySelector("#topbar").style.display = "none";
        document.querySelector("#rightwrong").style.display = "flex";
        document.querySelector("#rightwrong").style.backgroundColor = "#50C878";
        document.querySelector("#rightwrong h1").innerText = "RIGHT!"

        document.querySelector("#questioncontainer").style.display = "none";
        document.querySelector("#bottomanswer").style.display = "flex";
        document.querySelector("#bottomanswer h1").innerText = "INDUCTIVE REASONING"
        quiz_answer = 0;
    }

    else if (quiz_answer === quiz[quiz_ind].notanswer) {
        document.querySelector("#title").innerText = quiz[quiz_ind].wrong.title;
        document.querySelector("#text").innerText = quiz[quiz_ind].wrong.text;
        document.querySelector("#quizimg").src = quiz[quiz_ind].wrong.quizimg;
        document.querySelector("#next_text").innerText = quiz[quiz_ind].wrong.next_text;
        document.querySelector("#topbar").style.display = "none";
        document.querySelector("#rightwrong").style.display = "flex";
        document.querySelector("#rightwrong").style.backgroundColor = "#FA7070";
        document.querySelector("#rightwrong h1").innerText = "WRONG..."
        quiz_answer = 0;
    }

    else {
        quiz_ind++;
        document.querySelector("#topbar").style.display = "flex";
        document.querySelector("#rightwrong").style.display = "none";
        document.querySelector("#questioncontainer").style.display = "block";
        document.querySelector("#bottomanswer").style.display = "none";
    }

    document.querySelector("#title").innerText = quiz[quiz_ind].title;
    document.querySelector("#text").innerText = quiz[quiz_ind].text;
    document.querySelector("#quizimg").src = quiz[quiz_ind].quizimg;
    document.querySelector("#next_text").innerText = quiz[quiz_ind].next_text;
}





// buttons

    //     //show q1 answer
    // if(quiz_ind===1 || quiz_ind===2) {
    //     document.querySelector("#questioncontainer").style.display = "none";
    //     document.querySelector("#bottomanswer").style.display = "flex";
    //     document.querySelector("#bottomanswer h1").innerText = "INDUCTIVE REASONING"
    // }

    //     //show q2 and 3 answers
    // if(quiz_ind===4 || quiz_ind===5 || quiz_ind===7 || quiz_ind===8) {
    //     document.querySelector("#questioncontainer").style.display = "none";
    //     document.querySelector("#bottomanswer").style.display = "flex";
    //     document.querySelector("#bottomanswer h1").innerText = "DEDUCTIVE REASONING"
    // }

        //show option buttons
    // if(quiz_ind===3 || quiz_ind===6) {
    //     document.querySelector("#questioncontainer").style.display = "block";
    //     document.querySelector("#bottomanswer").style.display = "none";}

// // changing pages
//     function saveAnswer(n) {
//         quiz_answer = n;
//     }


// function saveAnswer(n) {
//     tut_answer = n;
// }

// if(tut_answer === 1 && tut_ind===2){
//     show whatever you need to show
// }

// onclick: "saveAnswer(1)"



// progression bar and right/wrong

        // show progression bar
    // if(quiz_ind===3 || quiz_ind===6) {
    //     document.querySelector("#topbar").style.display = "flex";
    //     document.querySelector("#rightwrong").style.display = "none";
    // }

    //     // show answer is right
    // if(quiz_ind===1 || quiz_ind===4 || quiz_ind===7) {
    //     document.querySelector("#topbar").style.display = "none";
    //     document.querySelector("#rightwrong").style.display = "flex";
    //     document.querySelector("#rightwrong").style.backgroundColor = "#50C878";
    //     document.querySelector("#rightwrong h1").innerText = "RIGHT!"
    // }
    
        // show answer is wrong
    // if(quiz_ind===2 || quiz_ind===5 || quiz_ind===8) {
    //     document.querySelector("#topbar").style.display = "none";
    //     document.querySelector("#rightwrong").style.display = "flex";
    //     document.querySelector("#rightwrong").style.backgroundColor = "#FA7070";
    //     document.querySelector("#rightwrong h1").innerText = "WRONG..."
    // }