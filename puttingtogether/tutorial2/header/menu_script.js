var navigation_state = false;

function toggleNavigation() { 
    if(navigation_state === false) {
    document.querySelector("#quizButton").style.width = "auto";
    document.querySelector("#homeButton").style.width = "auto";
    document.querySelector("#tutorialButton").style.width = "auto";
    navigation_state = true;
}
 else {
    document.querySelector("#quizButton").style.width = "0";
    document.querySelector("#homeButton").style.width = "0";
    document.querySelector("#tutorialButton").style.width = "0";
    navigation_state = false;
 }
}