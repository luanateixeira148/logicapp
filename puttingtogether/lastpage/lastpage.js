
function GoToNext() {
    final_ind++;
    document.querySelector("#title").innerText = final[final_ind].title;
    document.querySelector("#text1").innerText = final[final_ind].text1;
    document.querySelector("#tutorialImage").src = final[final_ind].tutorialImage;
    document.querySelector("#text2").innerText = final[final_ind].text2;
    document.querySelector("#next_text").innerText = final[final_ind].next_text;
    document.querySelector("#next_icon").src = final[final_ind].next_icon;
}

document.querySelector("#title").innerText = final[final_ind].title;
document.querySelector("#text1").innerText = final[final_ind].text1;
document.querySelector("#tutorialImage").src = final[final_ind].tutorialImage;
document.querySelector("#text2").innerText = final[final_ind].text2;
document.querySelector("#next_text").innerText = final[final_ind].next_text;
document.querySelector("#next_icon").src = final[final_ind].next_icon;

// ShowFirst();