document.querySelector("#firstsection").style.display = "block";
document.querySelector("#secondsection").style.display = "none";
document.querySelector("#thirdsection").style.display = "none";
document.querySelector("#forthsection").style.display = "none";

function nextPage() {
    if (tut_ind === 5) {
        document.querySelector("#firstsection").style.display = "none";
        document.querySelector("#secondsection").style.display = "block";
        document.querySelector("#thirdsection").style.display = "none";
        document.querySelector("#forthsection").style.display = "none";
    } else if (tut2_ind === 2) {
        document.querySelector("#firstsection").style.display = "none";
        document.querySelector("#secondsection").style.display = "none";
        document.querySelector("#thirdsection").style.display = "block";
        document.querySelector("#forthsection").style.display = "none";
    } else if (quiz_ind === 2) {
        document.querySelector("#firstsection").style.display = "none";
        document.querySelector("#secondsection").style.display = "none";
        document.querySelector("#thirdsection").style.display = "none";
        document.querySelector("#forthsection").style.display = "block";
    }
}