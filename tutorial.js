// var tut_ind = -1;

function GoToNext() {
    tut_ind++;
    if(tut_ind === 4){
        //display buttons
    }
    document.querySelector("#text1").innerText = tut[tut_ind].text1;
    document.querySelector("#tutorialImage").src = tut[tut_ind].tutorialImage;
    document.querySelector("#text2").innerText = tut[tut_ind].text2;
    document.querySelector("#next_text").innerText = tut[tut_ind].next_text;
}

document.querySelector("#text1").innerText = tut[tut_ind].text1;
document.querySelector("#tutorialImage").src = tut[tut_ind].tutorialImage;
document.querySelector("#text2").innerText = tut[tut_ind].text2;
document.querySelector("#next_text").innerText = tut[tut_ind].next_text;

// ShowFirst();