const quizQuestions = [
    {
        question: "Which of these animals has black,gray,or brown stripes?",
        a: "Lion",
        b: "Tiger",
        c: "Monkey",
        d: "Panther",
        correct: "b",
    },
    {
        question: "Which of these animals has a shell called a carpace?",
        a: "Spider",
        b: "Snail",
        c: "Turtle",
        d: "Lizard",
        correct: "c",
    },
    {
        question: "Which of these animals is a nocturnal bird that has large-foward facing eyes",
        a: "Owl",
        b: "Falcon",
        c: "Eagle",
        d: "Groundhog",
        correct: "a",
    },
    {
        question: "Which of these animals has big mane and rules the jungle?",
        a: "Leopard",
        b: "Hyena",
        c: "Lion",
        d: "Ostrich",
        correct: "c",
    },
    {
        question: "Which of these marine mammals is the Largest of all animals?",
        a: "Sea lion",
        b: "Shark",
        c: "Dolphin",
        d: "Whale",
        correct: "d",
    },
    {
        question: "Which of these birds cannot fly and likes the cold?",
        a: "Kiwi",
        b: "Penguin",
        c: "Woodpecker",
        d: "Blue Jay",
        correct: "b",
    },
    {
        question: "Which of these animals is a large aquatic reptile with big teeth?",
        a: "Crocidle",
        b: "Iguana",
        c: "Scorpion",
        d: "Komodo Dragon",
        correct: "a",
    },
    {
        question: "Which of these animals has a hunting laughter-like call?",
        a: "Tiger",
        b: "Lion",
        c: "Gorilla",
        d: "Hyena",
        correct: "d",
    },
    {
        question: "Which of these animals is a bushy-tail large eyed rodent?",
        a: "Beaver",
        b: "Mole rat",
        c: "Squirell",
        d: "Mouse",
        correct: "c",
    },
    {
        question: "Which of these is the tallest of all land-living animals?",
        a: "Camel",
        b: "Giraffe",
        c: "Gorilla",
        d: "Hippo",
        correct: "b",
    },
]

const quiz = document.getElementById("quiz")

const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

const submitButton = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;


const deSelect = () => {
    answerElements.forEach((answer) => (answer.checked = false));
}

const selectThing = () => {
    let answer;
    answerElements.forEach((answerElement) => {
        if (answerElement.checked) answer = answerElement.id;
    });
    return answer;
    };

    const loadingQuiz = () => {
        deSelect();
        const currentQuizData = quizQuestions[currentQuiz];

        questionElement.innerText = currentQuizData.question;
        a_text.innerText = currentQuizData.a;
        b_text.innerText = currentQuizData.b;
        c_text.innerText = currentQuizData.c;
        d_text.innerText = currentQuizData.d;
    };

    loadingQuiz();


        
    
         submitButton.addEventListener("click", () => {
        const answer = selectThing();
        if (answer) {
            if (answer === quizQuestions[currentQuiz].correct) score++;
            currentQuiz++;
            if (currentQuiz < quizQuestions.length) loadingQuiz();
            else {
                const resultsElemnt = document.getElementById("results");
                resultsElemnt.innerHTML = `
                <h1>You got ${score}/${quizQuestions.length} correct</h1>
                <button onclick="location.reload()">Restart Quiz</button>
                `;
            }
        }
        });
    


