
function GoToNext() {
    if (tut_ind >= 5) {
        return false;
    }

    tut_ind++;
    if(tut_ind === 5){
        document.querySelector("#ind1").style.display = "flex";
        document.querySelector("#ded1").style.display = "flex";
        document.querySelector("#button1").style.display = "flex";
        document.querySelector("#tutorialImage").style.display = "none";
        document.querySelector("#next_icon").style.display = "none";
        //display buttons
    }
    else {
        document.querySelector("#ind1").style.display = "none";
        document.querySelector("#ded1").style.display = "none";
        document.querySelector("#button1").style.display = "none";
    }
    document.querySelector("#title").innerText = tut[tut_ind].title;
    document.querySelector("#text1").innerText = tut[tut_ind].text1;
    document.querySelector("#tutorialImage").src = tut[tut_ind].tutorialImage;
    document.querySelector("#text2").innerText = tut[tut_ind].text2;
    document.querySelector("#next_text").innerText = tut[tut_ind].next_text;
    document.querySelector("#next_icon").src = tut[tut_ind].next_icon;
}

document.querySelector("#title").innerText = tut[tut_ind].title;
document.querySelector("#text1").innerText = tut[tut_ind].text1;
document.querySelector("#tutorialImage").src = tut[tut_ind].tutorialImage;
document.querySelector("#text2").innerText = tutw[tut_ind].text2;
document.querySelector("#next_text").innerText = tut[tut_ind].next_text;
document.querySelector("#next_icon").src = tut[tut_ind].next_icon;

// ShowFirst();