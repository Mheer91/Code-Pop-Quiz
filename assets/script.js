var questionDisplay = document.getElementById("question");
var answerDisplay1 = document.getElementById("answer1");
var answerDisplay2 = document.getElementById("answer2");
var answerDisplay3 = document.getElementById("answer3");
var answerDisplay4 = document.getElementById("answer4");
var score = 0;
var corAns = 0;
var incorAns = 0;
const qAndA = [
    {
        question: "What CSS property can you use to make a webpage adaptive to scren size?",
        choice1: "Pseudo Selector",
        choice2: "Media Query",
        choice3: "Class",
        choice4: "Margin",
        answer: "Media Query"
    },
    {
        question: "What is Bootstrap in reference to web development?",
        choice1: "A strab on your boot",
        choice2: "A JS Library",
        choice3: "A CSS Library",
        choice4: "An Array",
        answer: "A CSS Library"
    },
    {
        question: "Where should you link your CSS sheet in your HTML file?",
        choice1: "Head",
        choice2: "Body",
        choice3: "Footer",
        choice4: "Article",
        answer: "Head"
    },
    {
        question: "Which one of the following is an operator?",
        choice1: "||",
        choice2: "if",
        choice3: "||||",
        choice4: "other",
        answer: "||"
    },
    {
        question: "Which of the following is a string:",
        choice1: "true",
        choice2: "(true))",
        choice3: "'true'",
        choice4: "!true",
        answer: "'true''"
    },
];

    
