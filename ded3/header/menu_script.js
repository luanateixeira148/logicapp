var navigation_state = false;

function toggleNavigation() { 
    if(navigation_state === false) {
    document.querySelector("#quizButton").style.width = "auto";
    document.querySelector("#homeButton").style.width = "auto";
    document.querySelector("#tutorialButton").style.width = "auto";
    // document.querySelector("#quizButton").style.left = "30px";
    // document.querySelector("#homeButton").style.left = "30px";
    // document.querySelector("#tutorialButton").style.left = "30px";
    // document.querySelector("#quizButton").style.display = "block";
    // document.querySelector("#homeButton").style.display = "block";
    // document.querySelector("#tutorialButton").style.display = "block";
    navigation_state = true;
}
 else {
    document.querySelector("#quizButton").style.width = "0";
    document.querySelector("#homeButton").style.width = "0";
    document.querySelector("#tutorialButton").style.width = "0";
    // document.querySelector("#quizButton").style.left = "-30px";
    // document.querySelector("#homeButton").style.left = "-30px";
    // document.querySelector("#tutorialButton").style.left = "-30px";
    // document.querySelector("#quizButton").style.display= "none";
    // document.querySelector("#homeButton").style.display = "none";
    // document.querySelector("#tutorialButton").style.display = "none";
    navigation_state = false;
 }
}