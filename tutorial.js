
function GoToNext() {
    tut_ind++;
    if(tut_ind === 4){
        //display buttons
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
document.querySelector("#text2").innerText = tut[tut_ind].text2;
document.querySelector("#next_text").innerText = tut[tut_ind].next_text;
document.querySelector("#next_icon").src = tut[tut_ind].next_icon;

// ShowFirst();