var quiz_ind = 0;
var quiz = [

    // question 01
    {
        title: "Question 01",
        text: "The CANUCKS have LOST their last seven games. Thus, they will probably lose their next game.",
        quizimg: "quiz/imgs/hockey1.png",
        next_text:"Check Answer",
        answer:1,
        notanswer:2,
        progress: "33%",
        right: {
            title: "Question 01",
            text: "The CANUCKS have LOST their last seven games. Thus, they will probably lose their next game.",
            quizimg: "quiz/imgs/hockey1.png",
            next_text:"Next Question",
            thisis:"INDUCTIVE REASONING",
        },
        wrong: {
            title: "Question 01",
            text: "The CANUCKS have LOST their last seven games. Thus, they will probably lose their next game.",
            quizimg: "quiz/imgs/hockey1.png",
            next_text:"Next Question",
            thisis:"INDUCTIVE REASONING",
        },
    },    

    // question 02
    {
        title: "Question 02",
        text: "All students go to school. You are a student. Therefore you go to school.",
        quizimg: "quiz/imgs/kidschool.png",
        next_text:"Check Answer",
        answer:2,
        notanswer:1,
        progress: "66%",
        right: {
            title: "Question 02",
            text: "All students go to school. You are a student. Therefore you go to school.",
            quizimg: "quiz/imgs/kidschool.png",
            next_text:"Next Question",
            thisis:"DEDUCTIVE REASONING",
        },
        wrong: {
            title: "Question 02",
            text: "All students go to school. You are a student. Therefore you go to school.",
            quizimg: "quiz/imgs/kidschool.png",
            next_text:"Next Question",
            thisis:"DEDUCTIVE REASONING",
        },
    },

    // question 03
    {
        title: "Question 03",
        text: "All birds can fly. An ostrich is a bird. Therefore an ostrich can fly.",
        quizimg: "quiz/imgs/ostrich.png",
        next_text:"Check Answer",
        answer:2,
        notanswer:1,
        progress: "100%",
        right: {
            title: "Question 03",
            text: "All birds can fly. An ostrich is a bird. Therefore an ostrich can fly.",
            quizimg: "quiz/imgs/ostrich.png",
            next_text:"Check Result",
            thisis:"DEDUCTIVE REASONING",
        },
        wrong: {
            title: "Question 03",
            text: "All birds can fly. An ostrich is a bird. Therefore an ostrich can fly.",
            quizimg: "quiz/imgs/ostrich.png",
            next_text:"Check Result",
            thisis:"DEDUCTIVE REASONING",
        }
    }
]