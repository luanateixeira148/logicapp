var tut_ind = 0;

var tut = [
    {
        title: "Deductive Reasoning",
        text1: "Dogs cannot fly. Buddy is a dog, therefore Buddy cannot fly.",
        tut2image: "imgs/flying.png",
        text2: "Do you think this statement is true?",
        next_text: "Check Answer",
        right: {
            title: "Deductive Reasoning",
            text1: "In Deductive reasoning, we can get to a conclusion based on at least two true statements.",
            tut2image: "imgs/failing.png",
            text2: "In this example, 'Dogs cannot fly'  and 'Buddy is a dog' are two  true statements, so the conclusion is true.",
            next_text: "Next",
        },
        //1we need a green div on top of the page- Right},
        wrong: {
            title: "Deductive Reasoning",
            text1: "In Deductive reasoning, we can get to a conclusion based on at least two true statements.",
            tut2image: "imgs/failing.png",
            text2: "In this example, 'Dogs cannot fly'  and 'Buddy is a dog' are two  true statements, so the conclusion is true.",
            next_text: "Next",
        }
    },
    {
        title: "Inductive Reasoning",
        text1: "Buddy loves swimming. Buddy is a dog. Therefore, all dogs love swimming.",
        tut2image: "imgs/shower.png",
        text2: "Do you think this statement is true?",
        next_text: "Check Answer",
        //3buttons?
    },

    {
        title: "Inductive Reasoning",
        text1: "In Inductive reasoning, you get to a general conclusion based on two specific instances. The conclusion is not certain, but MIGHT be true.",
        tut2image: "imgs/shower.png",
        text2: "In this example, “Buddy loves swimming” and “Buddy is a dog” but you cannot generalize that all dogs love swimming.",
        next_text: "Next",
        //4we need a green div on top of the page- Right

    },

    {
        title: "Inductive Reasoning",
        text1: "In Inductive reasoning, you get to a general conclusion based on two specific instances. The conclusion is not certain, but MIGHT be true.",
        tut2image: "imgs/shower.png",
        text2: "In this example, “Buddy loves swimming” and “Buddy is a dog” but you cannot generalize that all dogs love swimming.",
        next_text: "Next",
        //5we need a red div on top of the page- wrong

    },

    {
        title: "Quiz Time",
        text1: "Now that you know what Deductive and Inductive Reasoning are, let’s take a quiz!",
        tut2image: "imgs/love.png",
        text2: "",
        next_text: "Start the Quiz",
    }

]
