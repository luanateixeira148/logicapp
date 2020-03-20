document.querySelector("#title").innerText = tut2[tut_ind2].title;
document.querySelector("#text1").innerText = tut2[tut_ind2].text1;
document.querySelector("#tut2image").src = tut2[tut_ind2].tut2image;
document.querySelector("#text2").innerText = tut2[tut_ind2].text2;
document.querySelector("#next_text").innerText = tut2[tut_ind2].next_text;

function tutorial2SaveAnswer(n) {
    tut2_answer = n;
}

function Tutorial2GoToNext() {
    if (tut2_answer === 1) {
        //show correct text
        document.querySelector("#title").innerText = tut2[tut_ind2].right.title;
        document.querySelector("#text1").innerText = tut2[tut_ind2]].right.text1;
        document.querySelector("#tut2image").src = tut2[tut_ind2].right.tut2image;
        document.querySelector("#text2").innerText = tut2[tut_ind2].right.text2;
        document.querySelector("#next_text").innerText = tut2[tut_ind2].right.next_text;
        document.querySelector("#rightwrong").style.display = "flex";
            document.querySelector("#rightwrong").style.backgroundColor = "#50C878";
            document.querySelector("#rightwrong h1").innerText = "RIGHT";
            
            document.querySelector("#buttonscontainer").style.display = "none";
        tut2_answer = 0;
    }

    else if (tut2_answer === 2) {
        document.querySelector("#title").innerText = tut2[tut_ind2].wrong.title;
        document.querySelector("#text1").innerText = tut2[tut_ind2].wrong.text1;
        document.querySelector("#tut2image").src = tut2[tut_ind2].wrong.tut2image;
        document.querySelector("#text2").innerText = tut2[tut_ind2].wrong.text2;
        document.querySelector("#next_text").innerText = tut2[tut_ind2].wrong.next_text;
        document.querySelector("#rightwrong").style.display = "flex";
            document.querySelector("#rightwrong").style.backgroundColor = "#fa7070";
            document.querySelector("#rightwrong h1").innerText = "WRONG";
            
            document.querySelector("#buttonscontainer").style.display = "none";
        tut2_answer = 0;
        console.log(tut_answer)
    }
    
    else {
        tut_ind2++;
        document.querySelector("#buttonscontainer").style.display = "flex";
        document.querySelector("#rightwrong").style.display = "none";
        document.querySelector("#title").innerText = tut2[tut_ind2].title;
        document.querySelector("#text1").innerText = tut2[tut_ind2].text1;
        document.querySelector("#tut2image").src = tut2[tut_ind2].tut2image;
        document.querySelector("#text2").innerText = tut2[tut_ind2].text2;
        document.querySelector("#next_text").innerText = tut2[tut_ind2].next_text;
        
        console.log(tut_ind)
        if (tut_ind2 === 2)   {
        document.querySelector("#buttonscontainer").style.display = "none";
   
     }
        
    }
}


