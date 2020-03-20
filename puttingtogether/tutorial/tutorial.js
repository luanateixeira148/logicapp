var tut_ind = 0;
document.querySelector("#title").innerText = tut[tut_ind].title;
document.querySelector("#text1").innerText = tut[tut_ind].text1;
document.querySelector("#tutorialImage").src = tut[tut_ind].tutorialImage;
document.querySelector("#text2").innerText = tut[tut_ind].text2;
document.querySelector("#next_text").innerText = tut[tut_ind].next_text;
document.querySelector("#next_icon").src = tut[tut_ind].next_icon;

function TutorialGoToNext() {
    if (tut_ind >= 5) {
        document.querySelector("#firstsection").style.display = "none";
        document.querySelector("#secondsection").style.display = "block";
        document.querySelector("#thirdsection").style.display = "none";
        document.querySelector("#forthsection").style.display = "none";
        return false;
    }
    tut_ind++;
    document.querySelector("#title").innerText = tut[tut_ind].title;
    document.querySelector("#text1").innerText = tut[tut_ind].text1;
    document.querySelector("#tutorialImage").src = tut[tut_ind].tutorialImage;
    document.querySelector("#text2").innerText = tut[tut_ind].text2;
    document.querySelector("#next_text").innerText = tut[tut_ind].next_text;
    document.querySelector("#next_icon").src = tut[tut_ind].next_icon;
}