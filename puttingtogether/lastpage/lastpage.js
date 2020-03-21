function saveForFinal1(n) {
    q1 = n;
}

function saveForFinal2(n) {
    q2 = n;
}

function saveForFinal3(n) {
    q3 = n;
}

function finalResult() {
    if (q1 + q2 + q3 === 0) {
        final_ind = 0;
        document.querySelector("#text1").innertext = final[final_ind].text1;
        document.querySelector("#finalImage").innertext = final[final_ind].finalImage;
        document.querySelector("#text2").innertext = final[final_ind].text2;
        document.querySelector("#next_text").innertext = final[final_ind].next_text;
        document.querySelector("#next_icon").innertext = final[final_ind].next_icon;
    } else if (q1 + q2 + q3 === 1) {
        final_ind = 1;
        document.querySelector("#text1").innertext = final[final_ind].text1;
        document.querySelector("#finalImage").innertext = final[final_ind].finalImage;
        document.querySelector("#text2").innertext = final[final_ind].text2;
        document.querySelector("#next_text").innertext = final[final_ind].next_text;
        document.querySelector("#next_icon").innertext = final[final_ind].next_icon;
    } else if (q1 + q2 + q3 === 2) {
        final_ind = 2;
        document.querySelector("#text1").innertext = final[final_ind].text1;
        document.querySelector("#finalImage").innertext = final[final_ind].finalImage;
        document.querySelector("#text2").innertext = final[final_ind].text2;
        document.querySelector("#next_text").innertext = final[final_ind].next_text;
        document.querySelector("#next_icon").innertext = final[final_ind].next_icon;
    } else if (q1 + q2 + q3 === 3) {
        final_ind = 3
        document.querySelector("#text1").innertext = final[final_ind].text1;
        document.querySelector("#finalImage").innertext = final[final_ind].finalImage;
        document.querySelector("#text2").innertext = final[final_ind].text2;
        document.querySelector("#next_text").innertext = final[final_ind].next_text;
        document.querySelector("#next_icon").innertext = final[final_ind].next_icon;
    }
}

function takeQuizAgain() {
    document.querySelector("#firstsection").style.display = "none";
    document.querySelector("#secondsection").style.display = "none";
    document.querySelector("#thirdsection").style.display = "block";
    document.querySelector("#forthsection").style.display = "none";
    quiz_ind = 0;
}