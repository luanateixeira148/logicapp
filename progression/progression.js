var progression_state = 33;
function gettingBigger() {
    progression_state+=33.5;
    document.querySelector("#progression").style.width = progression_state + "%";
    console.log(progression_state);
}